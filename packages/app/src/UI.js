//var T3D = require("../../../vendor/T3D/T3D-1.0.3.js");
var SceneUtils = require("./SceneUtils");

var tShort = 200 * 0;
var tLong = 500 * 0;


var UI = function(holder, controller, loadMap){
	this.holder = holder;
	this.controller = controller;
	this.loadMap = loadMap;
};

UI.prototype.selectMap=function(mapListObject){
	$("#mapPicker option").filter(function() {
	    return $(this).val() == mapListObject.fileName; 
	}).prop('selected', true);
	$("#mapPicker").change();
};

UI.prototype.logProgress = function(){
	if(!UI.op)
		UI.op = $("#output");
	
	/// Hack to keep the message about first time up.
	if( arguments[0] != "Find type")
		UI.op.find(".progressTitle").html(arguments[0]);

	if(parseFloat(arguments[1])){
		UI.op.find(".progress").html(arguments[1]+"%");	
	}
	else{
		UI.op.find(".progress").html(arguments[1]);	
	}
	
}

UI.prototype.init=function(){
	var self = this;

	/// Connect to T3D
	T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = this.logProgress;
	T3D.Logger.logFunctions[T3D.Logger.TYPE_DEBUG] = function(){};

	/// Main UI
	var $UI = $("<div id='UI' class='diagonalBG hidden' />");
	
	this.holder.append($UI);

	

	/// Messages output
	var outputWrapper = $("<div id='outputWrapper'/>");
	outputWrapper.css({top:-500}).delay(tShort).animate({top:0},tLong);
	var output = $("<div id='output' class='diagonalBG'/>");
	
	outputWrapper.append(output);
	this.holder.append(outputWrapper);

	/// File picker
	output.append($(
		"<div class='ui-panel' id='filePanel'>"+
		"<p class='title'>"+
		"<span class='titleLink homeLink'>Home</span>"+
		"<span class='titleSeparator'> &#187 </span>"+
		"File"+
		"<span class='titleSeparator'> &#187 </span>"+
		"<span class='titleInactive'>Map</span>"+
		"</p>"+
		"<p class='instruction'>"+
			"Tyria 3D reads data from the Guild Wars 2 <span class='hightlight'>.dat file</span>. This file contains all the assets used to run the game and is located"+
			" in the Guild Wars 2 install directory, the same directory that the game executable is located in."+
		"</p>"+
		"</div>"
	));


	// Progress and mesages
	var progressOutput = $("<div class='ui-panel hidden' id='progressPanel'>"+
		"<p class='progressTitle'></p>"+
		"<p class='progress'></p>"+
		"</div>");
	output.append(progressOutput);

	var errorOutput = $("<div class='ui-panel hidden' id='errorPanel'>"+
		"Your browser doesn\'t seem to support Pointer Lock API, "+
		"navigating the map will not be possible.<br/><br/>Pro tip: "+
		"<a href='https://www.google.com/chrome/browser/desktop/index.html' target='_blank'>"+
		"Donwload Google Chrome</a>."+
		"</div>");
	output.append(errorOutput);

	var suspendedPanel = $("<div class='ui-panel hidden' id='suspendedPanel'>"+
			"This view is suspended until you<br/><br/> "+
			"<strong>click and hold</strong> to look around<br /><br/>"+
			"or<br/><br />click the <strong>Lock Mouse</strong> button<br/><br/>"+
			"When this view is active, use <strong>W A S D</strong> and <strong>space</strong> to move and jump + air jump"+
		"</div>");
	output.append(suspendedPanel);


	// Map opts
	var mapOpts = $("<div class='ui-panel hidden' id='mapPanel'>"+
		"<p class='title'>"+
		"<span class='titleLink homeLink'>Home</span>"+
		"<span class='titleSeparator'> &#187 </span>"+
		"<span id='mapBack' class='titleLink'>File</span>"+
		"<span class='titleSeparator'> &#187 </span>"+
		"Map"+
		"</p>"+
		"<p class='instruction' style='margin-bottom:0;'>"+
			"Select what data to load and pick a <span class='highlight'>Map</span>."+
		"</p>"+		
		"</div>");

	output.append(mapOpts);

	$("#mapBack").click(function(evt){
		SceneUtils.swapPanels($("#mapPanel"), $("#filePanel"));
	});

	$(".homeLink").click(function(){
		location.reload();
	});




	/// UI to select what to load
	mapOpts.append($(
		
			"<label class='noselect'>"+
				"<p class='label'>Zone Models</p>"+
				"<input type='checkbox' id='loadZone' tabindex='-1' />"+
			"</label>"+
			"<label class='noselect '>"+
				"<p class='label'>Prop Models</p>"+
				"<input type='checkbox' id='loadProp' tabindex='-1' checked='checked' />"+
				//"<input type='checkbox' id='loadProp' tabindex='-1' />"+
			"</label>"+
			"<label class='noselect '>"+
				"<p class='label'>Visible collision</p>"+
				"<input type='checkbox' id='showHavok' tabindex='-1' />"+
			"</label><br/>"
	));

	
	/// UI to pick map file
	var picker = $("<select id='mapPicker' tabindex='-1'/>");
	picker.append($("<option selected='true' disabled='disabled'>No .dat loaded</option>")); 
	
	
	T3D.MapFileList.maps.forEach(function(g){
		var group = $("<optgroup label='"+g.name+"' />");
		picker.append(group);
		g.maps.forEach(function(m){
			group.append("<option value='"+m.fileName+"'>"+m.name+"</option>");
		});
		
	});
	

	picker.change(function(evt){
		var val = picker.val();
		self.loadMap(val, evt.value);

		var label = $("#mapPicker option").filter(function() {
	    	return $(this).val() == val; 
		}).html();
		$("#mapTitle").html(label);


		picker.blur();
	});
	mapOpts.append(picker);	


	mapOpts.append( $("<p class='instruction'>"+
			"Enabling <span class='highlight'>Zone Models</span> allows you to view trees, plants and various 'nature' models. "+
		
		"</p><p class='instruction'>"+
			"Enabling <span class='highlight'>Prop Models</span> allows you to view most of the models in a map. "+
		
		"</p><p class='instruction'>"+	
			"Enabling <span class='highlight'>Visible collision</span> allows you to view all the collision data in a map. "+
			" The collision data has no textures but will give you a hint of how the map looks with actual models,"+
			" consider enabling only Visible collision to reduce map loading times. "+
			" If you enabled Zone Models or Prop Models you probably don't want Visible collision."+
		"</p>") );

	/// END Map Picker


	// Move opts
	var movementOpts = $(`<div class='ui-panel' id='optionsPanel'>
			<p class='title' id='mapTitle'></p>
			<p id='showMapSelection' class='optionsLink' tabindex='-1'>Back to map selection</p>
			
			<div>
				<br/>
				<span class='label'>View distance:</span><br/>
				<div class='slider' id='fogSlider' tabindex='-1'></div>
			</div>
			
			<div>
				<span class='label'>&#128161;:</span>
				<div class='slider' id='ambientSlider' tabindex='-1'></div>
			</div>
			
			<div>
				<span class='label'>Speed [Scroll Up/Down]:</span>
				<div class='slider' id='moveSpeedSlider' tabindex='-1'></div>
			</div>
			
			<div>
				<span class='label'>Mouse sensitivity:</span>
				<div class='slider' id='mouseSensSlider' tabindex='-1'></div>
			</div>
			
			<div>
				<label class='noselect halfLabel'><p class='label'>Fly [F]</p>
				<input id='flyInput' type='checkbox' tabindex='-1' checked='checked'></input></label>
				<label class='noselect halfLabel'><p class='label'>Invert mouse</p>
				<input id='invertInput' type='checkbox' tabindex='-1'></input></label>
			</div>
			
			<p class='uiText'>Toggle UI [U], Toggle Stats [I], Orthographic Cam [O], Perspective Cam [P]</p>
			<button id='mouseLockBtn' tabindex='-1'>Lock Mouse</button>
			
			
			<label class='hidden'><p class='label nomargin'>Location URL</p>	
			<input class='hidden' id='locationInput' type='text'></input></label>	
		</div>`);

    $UI.append(movementOpts);

    $("#showMapSelection").click(function(){

		//Clear URL
		window.location.hash = "";

    	$("#UI").addClass("hidden");
    	self.controller.setMapReady(false);
    	SceneUtils.swapPanels($("#suspendedPanel"),$("#mapPanel"));
    	$("canvas").hide();
    	$("#mapPicker option").prop('selected', false);
    	$("#mapPicker option").first().prop('selected', true);
    });

    function onSpeedChange(evt, ui){
    	var speed = Math.exp(ui.value);
    	window.setTimeout(function(){
    		self.controller.setSpeed(speed);	
    	},10);	
    }

    function onSensChange(evt, ui){
    	var sens = ui.value;
    	window.setTimeout(function(){
    		self.controller.setSensitivity(sens);
    	},10);
    }

    function onFogChange(evt, ui){
    	SceneUtils.setFog(ui.value);
    }

    function onAmbientChange(evt, ui){
    	SceneUtils.setAmbientAdd(ui.value);
    }

    function onLightChange(evt, ui){
    	window.setTimeout(function(){
    		SceneUtils.setHSLa(
    			0.27,
    			$("#saturationSlider").slider("option", "value"),
    			$("#lightnessSlider").slider("option", "value"),
    			$("#intensitySlider").slider("option", "value")
			);
    		SceneUtils.render();
    	},10);
    }

    

    /// Sliders
    $("#moveSpeedSlider").slider({
		min: 4, max: 10, step: 0.01,
  		change: onSpeedChange
    }).slider("value",7.5);

    $("#mouseSensSlider").slider({
		min: 0.0001, max: 0.01, step: 0.0001,
  		change: onSensChange
    }).slider("value",0.002);
    
    $("#fogSlider").slider({
		min: 5000, max: 100000, step: 500,
  		change: onFogChange
    });

    $("#ambientSlider").slider({
		min: 0, max: 1.0, step: 0.01,
  		change: onAmbientChange
    });

    /// HSL
    /*$("#saturationSlider").slider({
		min: 0, max: 1, step: 0.01,
  		change: onLightChange
    }).slider("value",0.4);
    $("#intensitySlider").slider({
		min: 0, max: 1, step: 0.01,
  		change: onLightChange
    }).slider("value",0.5);
    $("#lightnessSlider").slider({
		min: 0, max: 1, step: 0.01,
  		change: onLightChange
    }).slider("value",0.5);*/

    /// END Sliders


    /// Toggle buttons
    $("#invertInput").change(function(){
    	self.controller.invertMouse();
    })
    $("#flyInput").change(function(){
    	
    	/*if($(this).is(':checked'))
    		$("#fogSlider").slider("value",35000);
    	else 
    		$("#fogSlider").slider("value",15000);*/
    		
    	self.controller.toggleFly();
    })

    $("#mouseLockBtn").click(function(){
    	self.controller.lock();
    });

    /// END Toggle buttons
	$("#locationInput").on('click',function(){ this.select(); });

    // Instructions 
	/*var instructions = $("<div class='ui-panel'>"+
		"<p class='title'>Instructions</p>"+
		"<p class='instruction'>Pick a map from the drop down menu.</p>"+
		"<p class='instruction'><strong>Click and hold</strong> to look around. "+
		"Use <strong>W A S D</strong> and <strong>space</strong> to move.</p>"+
		"<p class='instruction'>Enable experimental downward collision by unchecking <strong>fly</strong>.</p>"+
		"<p class='instruction'>Toggle this panel with <strong>U</strong>.</p>"+
	"</div>");
	$UI.append(instructions);*/
};


module.exports = UI;