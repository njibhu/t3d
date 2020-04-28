const T3D = require("../../src/T3DLib");
window.T3D = T3D;

/// This is an example application for the T3D library
/// Skip down to onButtonClick to get to the juicy part
/// This will be updated sooner or later, perhaps with a
/// written guide, who knows.

var _lr;
var _context;
var _scene;
var _camera;
var _renderer;
var _models = [];

/// Extend Original Logger
var myLogger = {
    log:function(){
        var htmlOutput  =  $("#log");
        var i = 1;
        var str="";
        while(i<arguments.length){
            str+=arguments[i];
            i++;    
        }
        htmlOutput.append($("<p>"+str+"</p>"))
        htmlOutput.append($("<p>-------------</p>"));
        
    }
}

$(document).ready(
    function(){

        /// Build TREE scene
        setupScene();

        /// Handle file pick
        $("#filePicker").change(
            function(evt){

                var file = evt.target.files[0];

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
    var fileId = $("#fileIdInput").val();


    /// Let's use the SingleModelRenderer. It renders 3D stuff!
    var renderClass = T3D.SingleModelRenderer;

    /// All renderers must have access to a LocalReader.
    /// The LocalReader is the object that allows us
    /// to read from the .dat
    var localReader = _lr;

    /// The settings object is different for all renderers.
    /// Accourding to documentation the SingleModelRenderer requires
    /// the id of a file.
    var settings = {id:fileId};

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
    var callback = onRendererDone;

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
    var readFromContext = _context;

    /// The generator class we want output for is SingleModelRenderer
    var readForClass = T3D.SingleModelRenderer;

    /// The documentation says the generated outputs are:
    /// 
    /// meshes : An array of THREE.Mesh objects visualizing this model file.
    /// 
    /// Lets get that one!
    var nameOfValue = "meshes";

    /// Let's go!
    _models = T3D.getContextValue(readFromContext, readForClass, nameOfValue); 

    /// From here on it's just THREE stuff:

    /// Keeping track of the biggest model for later
    var biggestMdl = null;

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

    var canvasWidth = 500;
    var canvasHeight = 500;
    var canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
    var fov = 60;
    var aspect = 1;
    var near = 0.1;
    var far = 50000;

    _camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    _scene = new THREE.Scene();

    /// This scene has one ambient light source and three directional lights
    var ambientLight = new THREE.AmbientLight( 0x555555 );
    _scene.add( ambientLight );

    var directionalLight1 = new THREE.DirectionalLight( 0xffffff, .8 );
    directionalLight1.position.set( 0, 0, 1 );
    _scene.add( directionalLight1 );

    var directionalLight2 = new THREE.DirectionalLight( 0xffffff, .8);
    directionalLight2.position.set( 1, 0, 0 );
    _scene.add( directionalLight2 );

    var directionalLight3 = new THREE.DirectionalLight( 0xffffff, .8 );
    directionalLight3.position.set( 0, 1, 0 );
    _scene.add( directionalLight3 );
    
    /// Standard THREE renderer with AA
    _renderer = new THREE.WebGLRenderer({antialiasing: true});
    document.body.appendChild(_renderer.domElement);
    _renderer.setSize( canvasWidth, canvasHeight );
    _renderer.setClearColor( canvasClearColor );

    /// Add THREE orbit controls, for simple orbiting, panning and zooming
    var orbit = new THREE.OrbitControls( _camera, _renderer.domElement );
    orbit.enableZoom = true;

    /// Note: constant continous rendering from page load
    render();
}

function render(){
    window.requestAnimationFrame( render );
    _renderer.render(_scene, _camera);
}
