//require("../../../vendor/three/PointerLockControls");
var SceneUtils = require("./SceneUtils");


var velocity = new THREE.Vector3();
var moveUp = false;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var isOnObject = false;
var canJump = false;
var raycaster;
var controls;
var speed = 500;
var sensitivity = 500;
var bodyHeight = 70;
var isFly = true;
var mapReady = false;

var FlyControls = function(){
	///this. .. = 
	//this.();
};

FlyControls.prototype.updateURL = function(){
	/// Write position to UI (fugly but whatevs)
	var pos = controls.getObject().position;
	
	var pitch =  Math.round(controls.getPitchObject().rotation.x*10000)/10000;
	var yaw =   Math.round(controls.getObject().rotation.y*10000)/10000;
	
	var mapFileName = $("#mapPicker").val();

	var positionURL = {
		map: mapFileName,
		x: Math.round(pos.x*1000)/1000,
		y: Math.round(pos.y*1000)/1000,
		z: Math.round(pos.z*1000)/1000,
		pitch: pitch,
		yaw: yaw,
		loadZone: $("#loadZone").prop("checked"), 
		loadProp: $("#loadProp").prop("checked"), 
		showHavok: $("#showHavok").prop("checked"),
	};

	//Write position to URL
	window.location.hash = $.param(positionURL);

}

FlyControls.prototype.getControls=function(){
	return controls;
}

FlyControls.prototype.setSpeed=function(value){
	speed = value;
}

FlyControls.prototype.toggleFly=function(){
	isFly = !isFly;
}

FlyControls.prototype.setSensitivity=function(value){
	controls.setSensitivity(value);
}

FlyControls.prototype.invertMouse = function(){
	controls.invertMouse();
};

FlyControls.prototype.update=function(delta){
	if( controls.enabled ){



		var underwater = controls.getObject().position.y<0;

		if(isFly || underwater){
			/// Free fly
			var object = controls.getObject();
			velocity.x = 0;
			velocity.y = 0;

			// TODO: handle water better
			velocity.z = 0;

			
			if( moveForward || moveBackward){
				var dirSpeed = moveForward ? speed : -speed;
				controls.getDirection( velocity );
				velocity.normalize();
				
				
		        //vector.applyEuler(camera.rotation, camera.rotation.order).normalize();
		        velocity.multiplyScalar(dirSpeed);

		        object.position.set(
				object.position.x + velocity.x * delta,
				object.position.y + velocity.y * delta,
				object.position.z + velocity.z * delta);
			}

			if( moveLeft || moveRight){
				var dirSpeed = moveRight ? speed : -speed;
				object.translateX( dirSpeed * delta );
			}

			if(moveUp){
				controls.getObject().translateY( speed * delta );
			}
		} /// End if fly

		else{
			
			
			if ( moveForward ) 			velocity.z = -speed;
			else if ( moveBackward ) 	velocity.z = speed;
			else 						velocity.z = 0;

			if ( moveLeft ) 			velocity.x = -speed;
			else if ( moveRight ) 		velocity.x = speed;
			else 						velocity.x = 0;

		
			var intersections;

			//if( velocity.y < 0 ){
				raycaster.ray.origin.copy( controls.getObject().position );
				
				/// Check for object under us
				intersections = raycaster.intersectObjects( SceneUtils.getCollisions() );

				/// If there are any, valocity will be set to 0 or higher, if not gravity will pull
				isOnObject = intersections.length > 0;
			/*}
			else if( velocity.y > 0){
				isOnObject = false;
			}*/

		
			if ( isOnObject === true ) {
				velocity.y = Math.max( 0, velocity.y );

				/// Move up to avoid sinking trough ground
				var eps = 1;
				controls.getObject().translateY( bodyHeight - intersections[0].distance - eps);

				//canJump = true;
			}
			else{
				velocity.y -= speed * 2 * delta; 
			}

			controls.getObject().translateX( velocity.x * delta );
			controls.getObject().translateY( velocity.y * delta );
			controls.getObject().translateZ( velocity.z * delta );

		}/// End if not fly
		


		

		return true;
	}

	return false;

}

FlyControls.prototype.lock=function(){
	var element = document.body;

	// Ask the browser to lock the pointer
	element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

	if ( false &&  /Firefox/i.test( navigator.userAgent ) ) {

		var fullscreenchange = function ( event ) {

			if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

				document.removeEventListener( 'fullscreenchange', fullscreenchange );
				document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

				element.requestPointerLock();
			}

		}

		document.addEventListener( 'fullscreenchange', fullscreenchange, false );
		document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

		element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

		element.requestFullscreen();

	} else {

		element.requestPointerLock();

	}
}

FlyControls.prototype.setMapReady=function(value){
	mapReady = value;
};

FlyControls.prototype.init=function(){
	var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

	if ( havePointerLock ) {

		var self = this;
		var element = document.body;

		document.exitPointerLock = document.exitPointerLock ||
			   document.mozExitPointerLock ||
			   document.webkitExitPointerLock;
		

		var pointerlockchange = function ( event ) {

			if(!mapReady)
				return;
			
			if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

				controlsEnabled = true;
				controls.enabled = true;

				$("#output").fadeOut(300);


			} else {
				$("#output").fadeIn(300);

				self.updateURL();

				controls.enabled = false;

			}

		}

		var pointerlockerror = function ( event ) {
			//instructions.style.display = '';

		}

		// Hook pointer lock state change events
		document.addEventListener( 'pointerlockchange', pointerlockchange, false );
		document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
		document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

		document.addEventListener( 'pointerlockerror', pointerlockerror, false );
		document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
		document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

		SceneUtils.getRenderer().domElement.addEventListener( 'mousedown', function ( event ) {
			if(mapReady)
				self.lock();
		}, false );
		$("#outputWrapper").on( 'mousedown', function ( event ) {
			if(mapReady)
				self.lock();
		});

		document.addEventListener( 'mouseup', function ( event ) {
			document.exitPointerLock();
			controls.enabled = false;
		}, false );

		

	} else {

		return false;

	}

    controls = new THREE.PointerLockControls( SceneUtils.getCamera(), 0.002 );
    	
	SceneUtils.getScene().add( controls.getObject() );

    var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				// Used fo moving up in fly mode and jumping in FPS mode
				moveUp = true;
				
				// Used for jumping in non-fly mode
				if ( canJump === true ){
					velocity.y += speed;
					canJump = false;
				}
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;

			case 32: // space
				moveUp = false;
				//Allowing tapping space to mid air jump again
				canJump = true;
				break;

		}

	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, bodyHeight );

	return true;
	
};


module.exports = FlyControls;