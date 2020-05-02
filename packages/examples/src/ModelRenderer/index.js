const $ = require("jquery");
window.$ = $;
const DataStream = require("DataStream.js");
window.DataStream = DataStream;
const T3D = require("t3d-lib");
window.T3D = T3D;
const THREE = require("three");
window.THREE = THREE;
require("three/examples/js/controls/OrbitControls");

/// This is an example application for the T3D library
/// Skip down to onButtonClick to get to the juicy part
/// This will be updated sooner or later, perhaps with a
/// written guide, who knows.

let _lr;
let _context;
let _scene;
let _camera;
let _renderer;
let _models = [];

/// Extend Original Logger
let myLogger = {
    log:function(){
        let htmlOutput  =  $("#log");
        let i = 1;
        let str="";
        while(i<arguments.length){
            str+=arguments[i];
            i++;    
        }
        htmlOutput.append($("<p>"+str+"</p>"));
        htmlOutput.append($("<p>-------------</p>"));
        
    }
};

$(document).ready(
    function(){

        /// Build TREE scene
        setupScene();

        /// Handle file pick
        $("#filePicker").change(
            function(evt){

                let file = evt.target.files[0];

                _lr = T3D.getLocalReader(
                    file,
                    onReaderCreated,
                    "../static/t3dworker.js",
                    myLogger);
            }
        );

        /// Handle button click
        $("#loadModelBtn").click(onButtonClick);

    }


);

/// Callback for when the LocalReader has finished setting up!
function onReaderCreated(){
    $("#fileIdInput").removeAttr('disabled');
    $("#loadModelBtn").removeAttr('disabled');
}

/// The insterresting part!
function onButtonClick(){

    /// Get selected file id
    let fileId = $("#fileIdInput").val();


    /// Let's use the SingleModelRenderer. It renders 3D stuff!
    let renderClass = T3D.SingleModelRenderer;

    /// All renderers must have access to a LocalReader.
    /// The LocalReader is the object that allows us
    /// to read from the .dat
    let localReader = _lr;

    /// The settings object is different for all renderers.
    /// Accourding to documentation the SingleModelRenderer requires
    /// the id of a file.
    let settings = {id:fileId};

    /// This is the value object that renderers use to write output!
    /// If we ran multiple renderers that wanted to read output from
    /// each other we'd have to pass this object to each Renderer!
    /// Note that we'll want to access this object later, so make
    /// sure it's stored in a scope we can reach from the callback
    /// method.
    _context = {};

    /// The method to run when the renderer is done. Almost all
    /// renderers are asynchronous since there is a lot of file
    /// reading et cetera.
    let callback = onRendererDone;

    /// Running a renderer takes 5 mandatory parameters! Phew!
    T3D.runRenderer(
        renderClass,
        localReader,
        settings,
        _context,
        callback
    );
}

/// Runs when the SingleModelRenderer is finshed
function onRendererDone(){
    
    /// Remove old models from the 3D scene
    _models.forEach(function(mdl){
        _scene.remove(mdl);
    });

    /// Now we want to take a look in the output object!
    /// The object we told the renderer to write to was _context
    let readFromContext = _context;

    /// The generator class we want output for is SingleModelRenderer
    let readForClass = T3D.SingleModelRenderer;

    /// The documentation says the generated outputs are:
    /// 
    /// meshes : An array of THREE.Mesh objects visualizing this model file.
    /// 
    /// Lets get that one!
    let nameOfValue = "meshes";

    /// Let's go!
    _models = T3D.getContextValue(readFromContext, readForClass, nameOfValue); 

    /// From here on it's just THREE stuff:

    /// Keeping track of the biggest model for later
    let biggestMdl = null;

    /// Add all models to the scene
    _models.forEach(function(model){

        /// Find the biggest model for camera focus/fitting
        if(!biggestMdl || biggestMdl.boundingSphere.radius < model.boundingSphere.radius){
            biggestMdl = model;
        }

        _scene.add(model);
    });

    _camera.position.x = 200;
    _camera.position.y = 50;

    /// Focus camera to the bigest model
    if(biggestMdl)
        _camera.lookAt(biggestMdl.position);      
}





/// Basic THREE stuff, don't mind it
function setupScene(){

    let canvasWidth = 500;
    let canvasHeight = 500;
    let canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
    let fov = 60;
    let aspect = 1;
    let near = 0.1;
    let far = 50000;

    _camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    _scene = new THREE.Scene();

    /// This scene has one ambient light source and three directional lights
    let ambientLight = new THREE.AmbientLight( 0x555555 );
    _scene.add( ambientLight );

    let directionalLight1 = new THREE.DirectionalLight( 0xffffff, .8 );
    directionalLight1.position.set( 0, 0, 1 );
    _scene.add( directionalLight1 );

    let directionalLight2 = new THREE.DirectionalLight( 0xffffff, .8);
    directionalLight2.position.set( 1, 0, 0 );
    _scene.add( directionalLight2 );

    let directionalLight3 = new THREE.DirectionalLight( 0xffffff, .8 );
    directionalLight3.position.set( 0, 1, 0 );
    _scene.add( directionalLight3 );
    
    /// Standard THREE renderer with AA
    _renderer = new THREE.WebGLRenderer({antialiasing: true});
    document.body.appendChild(_renderer.domElement);
    _renderer.setSize( canvasWidth, canvasHeight );
    _renderer.setClearColor( canvasClearColor );

    /// Add THREE orbit controls, for simple orbiting, panning and zooming
    let orbit = new THREE.OrbitControls( _camera, _renderer.domElement );
    orbit.enableZoom = true;

    /// Note: constant continous rendering from page load
    render();
}

function render(){
    window.requestAnimationFrame( render );
    _renderer.render(_scene, _camera);
}
