(function () {
	'use strict';

	var Stats = function () {

		var mode = 0;

		var container = document.createElement( 'div' );
		container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
		container.addEventListener( 'click', function ( event ) {

			event.preventDefault();
			showPanel( ++ mode % container.children.length );

		}, false );

		//

		function addPanel( panel ) {

			container.appendChild( panel.dom );
			return panel;

		}

		function showPanel( id ) {

			for ( var i = 0; i < container.children.length; i ++ ) {

				container.children[ i ].style.display = i === id ? 'block' : 'none';

			}

			mode = id;

		}

		//

		var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

		var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
		var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

		if ( self.performance && self.performance.memory ) {

			var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

		}

		showPanel( 0 );

		return {

			REVISION: 16,

			dom: container,

			addPanel: addPanel,
			showPanel: showPanel,

			begin: function () {

				beginTime = ( performance || Date ).now();

			},

			end: function () {

				frames ++;

				var time = ( performance || Date ).now();

				msPanel.update( time - beginTime, 200 );

				if ( time >= prevTime + 1000 ) {

					fpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );

					prevTime = time;
					frames = 0;

					if ( memPanel ) {

						var memory = performance.memory;
						memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

					}

				}

				return time;

			},

			update: function () {

				beginTime = this.end();

			},

			// Backwards Compatibility

			domElement: container,
			setMode: showPanel

		};

	};

	Stats.Panel = function ( name, fg, bg ) {

		var min = Infinity, max = 0, round = Math.round;
		var PR = round( window.devicePixelRatio || 1 );

		var WIDTH = 80 * PR, HEIGHT = 48 * PR,
			TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
			GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
			GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

		var canvas = document.createElement( 'canvas' );
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		canvas.style.cssText = 'width:80px;height:48px';

		var context = canvas.getContext( '2d' );
		context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
		context.textBaseline = 'top';

		context.fillStyle = bg;
		context.fillRect( 0, 0, WIDTH, HEIGHT );

		context.fillStyle = fg;
		context.fillText( name, TEXT_X, TEXT_Y );
		context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

		context.fillStyle = bg;
		context.globalAlpha = 0.9;
		context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

		return {

			dom: canvas,

			update: function ( value, maxValue ) {

				min = Math.min( min, value );
				max = Math.max( max, value );

				context.fillStyle = bg;
				context.globalAlpha = 1;
				context.fillRect( 0, 0, WIDTH, GRAPH_Y );
				context.fillStyle = fg;
				context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

				context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

				context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

				context.fillStyle = bg;
				context.globalAlpha = 0.9;
				context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

			}

		};

	};

	/**
	 * @license
	 * Copyright 2010-2023 Three.js Authors
	 * SPDX-License-Identifier: MIT
	 */
	const REVISION = '160';

	const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
	const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };

	const UVMapping = 300;
	const RepeatWrapping = 1000;
	const ClampToEdgeWrapping = 1001;
	const MirroredRepeatWrapping = 1002;
	const NearestFilter = 1003;
	const LinearFilter = 1006;
	const LinearMipmapLinearFilter = 1008;
	const UnsignedByteType = 1009;
	const UnsignedIntType = 1014;
	const UnsignedInt248Type = 1020;
	const RGBAFormat = 1023;
	const DepthFormat = 1026;
	const DepthStencilFormat = 1027;
	/** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
	const LinearEncoding = 3000;
	/** @deprecated Use SRGBColorSpace in three.js r152+. */
	const sRGBEncoding = 3001;

	// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
	const NoColorSpace = '';
	const SRGBColorSpace = 'srgb';
	const LessEqualCompare = 515;

	const WebGLCoordinateSystem = 2000;
	const WebGPUCoordinateSystem = 2001;

	/**
	 * https://github.com/mrdoob/eventdispatcher.js/
	 */

	class EventDispatcher {

		addEventListener( type, listener ) {

			if ( this._listeners === undefined ) this._listeners = {};

			const listeners = this._listeners;

			if ( listeners[ type ] === undefined ) {

				listeners[ type ] = [];

			}

			if ( listeners[ type ].indexOf( listener ) === - 1 ) {

				listeners[ type ].push( listener );

			}

		}

		hasEventListener( type, listener ) {

			if ( this._listeners === undefined ) return false;

			const listeners = this._listeners;

			return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

		}

		removeEventListener( type, listener ) {

			if ( this._listeners === undefined ) return;

			const listeners = this._listeners;
			const listenerArray = listeners[ type ];

			if ( listenerArray !== undefined ) {

				const index = listenerArray.indexOf( listener );

				if ( index !== - 1 ) {

					listenerArray.splice( index, 1 );

				}

			}

		}

		dispatchEvent( event ) {

			if ( this._listeners === undefined ) return;

			const listeners = this._listeners;
			const listenerArray = listeners[ event.type ];

			if ( listenerArray !== undefined ) {

				event.target = this;

				// Make a copy, in case listeners are removed while iterating.
				const array = listenerArray.slice( 0 );

				for ( let i = 0, l = array.length; i < l; i ++ ) {

					array[ i ].call( this, event );

				}

				event.target = null;

			}

		}

	}

	const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

	let _seed = 1234567;


	const DEG2RAD = Math.PI / 180;
	const RAD2DEG = 180 / Math.PI;

	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
	function generateUUID() {

		const d0 = Math.random() * 0xffffffff | 0;
		const d1 = Math.random() * 0xffffffff | 0;
		const d2 = Math.random() * 0xffffffff | 0;
		const d3 = Math.random() * 0xffffffff | 0;
		const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
				_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
				_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
				_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

		// .toLowerCase() here flattens concatenated strings to save heap memory space.
		return uuid.toLowerCase();

	}

	function clamp( value, min, max ) {

		return Math.max( min, Math.min( max, value ) );

	}

	// compute euclidean modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation
	function euclideanModulo( n, m ) {

		return ( ( n % m ) + m ) % m;

	}

	// Linear mapping from range <a1, a2> to range <b1, b2>
	function mapLinear( x, a1, a2, b1, b2 ) {

		return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

	}

	// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
	function inverseLerp( x, y, value ) {

		if ( x !== y ) {

			return ( value - x ) / ( y - x );

		} else {

			return 0;

		}

	}

	// https://en.wikipedia.org/wiki/Linear_interpolation
	function lerp( x, y, t ) {

		return ( 1 - t ) * x + t * y;

	}

	// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
	function damp( x, y, lambda, dt ) {

		return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

	}

	// https://www.desmos.com/calculator/vcsjnyz7x4
	function pingpong( x, length = 1 ) {

		return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

	}

	// http://en.wikipedia.org/wiki/Smoothstep
	function smoothstep( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * ( 3 - 2 * x );

	}

	function smootherstep( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

	}

	// Random integer from <low, high> interval
	function randInt( low, high ) {

		return low + Math.floor( Math.random() * ( high - low + 1 ) );

	}

	// Random float from <low, high> interval
	function randFloat( low, high ) {

		return low + Math.random() * ( high - low );

	}

	// Random float from <-range/2, range/2> interval
	function randFloatSpread( range ) {

		return range * ( 0.5 - Math.random() );

	}

	// Deterministic pseudo-random float in the interval [ 0, 1 ]
	function seededRandom( s ) {

		if ( s !== undefined ) _seed = s;

		// Mulberry32 generator

		let t = _seed += 0x6D2B79F5;

		t = Math.imul( t ^ t >>> 15, t | 1 );

		t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

		return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

	}

	function degToRad( degrees ) {

		return degrees * DEG2RAD;

	}

	function radToDeg( radians ) {

		return radians * RAD2DEG;

	}

	function isPowerOfTwo( value ) {

		return ( value & ( value - 1 ) ) === 0 && value !== 0;

	}

	function ceilPowerOfTwo( value ) {

		return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

	}

	function floorPowerOfTwo( value ) {

		return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

	}

	function setQuaternionFromProperEuler( q, a, b, c, order ) {

		// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

		// rotations are applied to the axes in the order specified by 'order'
		// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
		// angles are in radians

		const cos = Math.cos;
		const sin = Math.sin;

		const c2 = cos( b / 2 );
		const s2 = sin( b / 2 );

		const c13 = cos( ( a + c ) / 2 );
		const s13 = sin( ( a + c ) / 2 );

		const c1_3 = cos( ( a - c ) / 2 );
		const s1_3 = sin( ( a - c ) / 2 );

		const c3_1 = cos( ( c - a ) / 2 );
		const s3_1 = sin( ( c - a ) / 2 );

		switch ( order ) {

			case 'XYX':
				q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
				break;

			case 'YZY':
				q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
				break;

			case 'ZXZ':
				q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
				break;

			case 'XZX':
				q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
				break;

			case 'YXY':
				q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
				break;

			case 'ZYZ':
				q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
				break;

			default:
				console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

		}

	}

	function denormalize( value, array ) {

		switch ( array.constructor ) {

			case Float32Array:

				return value;

			case Uint32Array:

				return value / 4294967295.0;

			case Uint16Array:

				return value / 65535.0;

			case Uint8Array:

				return value / 255.0;

			case Int32Array:

				return Math.max( value / 2147483647.0, - 1.0 );

			case Int16Array:

				return Math.max( value / 32767.0, - 1.0 );

			case Int8Array:

				return Math.max( value / 127.0, - 1.0 );

			default:

				throw new Error( 'Invalid component type.' );

		}

	}

	function normalize( value, array ) {

		switch ( array.constructor ) {

			case Float32Array:

				return value;

			case Uint32Array:

				return Math.round( value * 4294967295.0 );

			case Uint16Array:

				return Math.round( value * 65535.0 );

			case Uint8Array:

				return Math.round( value * 255.0 );

			case Int32Array:

				return Math.round( value * 2147483647.0 );

			case Int16Array:

				return Math.round( value * 32767.0 );

			case Int8Array:

				return Math.round( value * 127.0 );

			default:

				throw new Error( 'Invalid component type.' );

		}

	}

	const MathUtils = {
		DEG2RAD: DEG2RAD,
		RAD2DEG: RAD2DEG,
		generateUUID: generateUUID,
		clamp: clamp,
		euclideanModulo: euclideanModulo,
		mapLinear: mapLinear,
		inverseLerp: inverseLerp,
		lerp: lerp,
		damp: damp,
		pingpong: pingpong,
		smoothstep: smoothstep,
		smootherstep: smootherstep,
		randInt: randInt,
		randFloat: randFloat,
		randFloatSpread: randFloatSpread,
		seededRandom: seededRandom,
		degToRad: degToRad,
		radToDeg: radToDeg,
		isPowerOfTwo: isPowerOfTwo,
		ceilPowerOfTwo: ceilPowerOfTwo,
		floorPowerOfTwo: floorPowerOfTwo,
		setQuaternionFromProperEuler: setQuaternionFromProperEuler,
		normalize: normalize,
		denormalize: denormalize
	};

	class Vector2 {

		constructor( x = 0, y = 0 ) {

			Vector2.prototype.isVector2 = true;

			this.x = x;
			this.y = y;

		}

		get width() {

			return this.x;

		}

		set width( value ) {

			this.x = value;

		}

		get height() {

			return this.y;

		}

		set height( value ) {

			this.y = value;

		}

		set( x, y ) {

			this.x = x;
			this.y = y;

			return this;

		}

		setScalar( scalar ) {

			this.x = scalar;
			this.y = scalar;

			return this;

		}

		setX( x ) {

			this.x = x;

			return this;

		}

		setY( y ) {

			this.y = y;

			return this;

		}

		setComponent( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

			return this;

		}

		getComponent( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				default: throw new Error( 'index is out of range: ' + index );

			}

		}

		clone() {

			return new this.constructor( this.x, this.y );

		}

		copy( v ) {

			this.x = v.x;
			this.y = v.y;

			return this;

		}

		add( v ) {

			this.x += v.x;
			this.y += v.y;

			return this;

		}

		addScalar( s ) {

			this.x += s;
			this.y += s;

			return this;

		}

		addVectors( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;

			return this;

		}

		addScaledVector( v, s ) {

			this.x += v.x * s;
			this.y += v.y * s;

			return this;

		}

		sub( v ) {

			this.x -= v.x;
			this.y -= v.y;

			return this;

		}

		subScalar( s ) {

			this.x -= s;
			this.y -= s;

			return this;

		}

		subVectors( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;

			return this;

		}

		multiply( v ) {

			this.x *= v.x;
			this.y *= v.y;

			return this;

		}

		multiplyScalar( scalar ) {

			this.x *= scalar;
			this.y *= scalar;

			return this;

		}

		divide( v ) {

			this.x /= v.x;
			this.y /= v.y;

			return this;

		}

		divideScalar( scalar ) {

			return this.multiplyScalar( 1 / scalar );

		}

		applyMatrix3( m ) {

			const x = this.x, y = this.y;
			const e = m.elements;

			this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
			this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

			return this;

		}

		min( v ) {

			this.x = Math.min( this.x, v.x );
			this.y = Math.min( this.y, v.y );

			return this;

		}

		max( v ) {

			this.x = Math.max( this.x, v.x );
			this.y = Math.max( this.y, v.y );

			return this;

		}

		clamp( min, max ) {

			// assumes min < max, componentwise

			this.x = Math.max( min.x, Math.min( max.x, this.x ) );
			this.y = Math.max( min.y, Math.min( max.y, this.y ) );

			return this;

		}

		clampScalar( minVal, maxVal ) {

			this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
			this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

			return this;

		}

		clampLength( min, max ) {

			const length = this.length();

			return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

		}

		floor() {

			this.x = Math.floor( this.x );
			this.y = Math.floor( this.y );

			return this;

		}

		ceil() {

			this.x = Math.ceil( this.x );
			this.y = Math.ceil( this.y );

			return this;

		}

		round() {

			this.x = Math.round( this.x );
			this.y = Math.round( this.y );

			return this;

		}

		roundToZero() {

			this.x = Math.trunc( this.x );
			this.y = Math.trunc( this.y );

			return this;

		}

		negate() {

			this.x = - this.x;
			this.y = - this.y;

			return this;

		}

		dot( v ) {

			return this.x * v.x + this.y * v.y;

		}

		cross( v ) {

			return this.x * v.y - this.y * v.x;

		}

		lengthSq() {

			return this.x * this.x + this.y * this.y;

		}

		length() {

			return Math.sqrt( this.x * this.x + this.y * this.y );

		}

		manhattanLength() {

			return Math.abs( this.x ) + Math.abs( this.y );

		}

		normalize() {

			return this.divideScalar( this.length() || 1 );

		}

		angle() {

			// computes the angle in radians with respect to the positive x-axis

			const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

			return angle;

		}

		angleTo( v ) {

			const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

			if ( denominator === 0 ) return Math.PI / 2;

			const theta = this.dot( v ) / denominator;

			// clamp, to handle numerical problems

			return Math.acos( clamp( theta, - 1, 1 ) );

		}

		distanceTo( v ) {

			return Math.sqrt( this.distanceToSquared( v ) );

		}

		distanceToSquared( v ) {

			const dx = this.x - v.x, dy = this.y - v.y;
			return dx * dx + dy * dy;

		}

		manhattanDistanceTo( v ) {

			return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

		}

		setLength( length ) {

			return this.normalize().multiplyScalar( length );

		}

		lerp( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;

			return this;

		}

		lerpVectors( v1, v2, alpha ) {

			this.x = v1.x + ( v2.x - v1.x ) * alpha;
			this.y = v1.y + ( v2.y - v1.y ) * alpha;

			return this;

		}

		equals( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) );

		}

		fromArray( array, offset = 0 ) {

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;

			return array;

		}

		fromBufferAttribute( attribute, index ) {

			this.x = attribute.getX( index );
			this.y = attribute.getY( index );

			return this;

		}

		rotateAround( center, angle ) {

			const c = Math.cos( angle ), s = Math.sin( angle );

			const x = this.x - center.x;
			const y = this.y - center.y;

			this.x = x * c - y * s + center.x;
			this.y = x * s + y * c + center.y;

			return this;

		}

		random() {

			this.x = Math.random();
			this.y = Math.random();

			return this;

		}

		*[ Symbol.iterator ]() {

			yield this.x;
			yield this.y;

		}

	}

	class Matrix3 {

		constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

			Matrix3.prototype.isMatrix3 = true;

			this.elements = [

				1, 0, 0,
				0, 1, 0,
				0, 0, 1

			];

			if ( n11 !== undefined ) {

				this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

			}

		}

		set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

			const te = this.elements;

			te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
			te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
			te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

			return this;

		}

		identity() {

			this.set(

				1, 0, 0,
				0, 1, 0,
				0, 0, 1

			);

			return this;

		}

		copy( m ) {

			const te = this.elements;
			const me = m.elements;

			te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
			te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
			te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

			return this;

		}

		extractBasis( xAxis, yAxis, zAxis ) {

			xAxis.setFromMatrix3Column( this, 0 );
			yAxis.setFromMatrix3Column( this, 1 );
			zAxis.setFromMatrix3Column( this, 2 );

			return this;

		}

		setFromMatrix4( m ) {

			const me = m.elements;

			this.set(

				me[ 0 ], me[ 4 ], me[ 8 ],
				me[ 1 ], me[ 5 ], me[ 9 ],
				me[ 2 ], me[ 6 ], me[ 10 ]

			);

			return this;

		}

		multiply( m ) {

			return this.multiplyMatrices( this, m );

		}

		premultiply( m ) {

			return this.multiplyMatrices( m, this );

		}

		multiplyMatrices( a, b ) {

			const ae = a.elements;
			const be = b.elements;
			const te = this.elements;

			const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
			const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
			const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

			const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
			const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
			const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

			te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
			te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
			te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

			te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
			te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
			te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

			te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
			te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
			te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

			return this;

		}

		multiplyScalar( s ) {

			const te = this.elements;

			te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
			te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
			te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

			return this;

		}

		determinant() {

			const te = this.elements;

			const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
				d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
				g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

			return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

		}

		invert() {

			const te = this.elements,

				n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
				n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
				n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

				t11 = n33 * n22 - n32 * n23,
				t12 = n32 * n13 - n33 * n12,
				t13 = n23 * n12 - n22 * n13,

				det = n11 * t11 + n21 * t12 + n31 * t13;

			if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

			const detInv = 1 / det;

			te[ 0 ] = t11 * detInv;
			te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
			te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

			te[ 3 ] = t12 * detInv;
			te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
			te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

			te[ 6 ] = t13 * detInv;
			te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
			te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

			return this;

		}

		transpose() {

			let tmp;
			const m = this.elements;

			tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
			tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
			tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

			return this;

		}

		getNormalMatrix( matrix4 ) {

			return this.setFromMatrix4( matrix4 ).invert().transpose();

		}

		transposeIntoArray( r ) {

			const m = this.elements;

			r[ 0 ] = m[ 0 ];
			r[ 1 ] = m[ 3 ];
			r[ 2 ] = m[ 6 ];
			r[ 3 ] = m[ 1 ];
			r[ 4 ] = m[ 4 ];
			r[ 5 ] = m[ 7 ];
			r[ 6 ] = m[ 2 ];
			r[ 7 ] = m[ 5 ];
			r[ 8 ] = m[ 8 ];

			return this;

		}

		setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

			const c = Math.cos( rotation );
			const s = Math.sin( rotation );

			this.set(
				sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
				- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
				0, 0, 1
			);

			return this;

		}

		//

		scale( sx, sy ) {

			this.premultiply( _m3.makeScale( sx, sy ) );

			return this;

		}

		rotate( theta ) {

			this.premultiply( _m3.makeRotation( - theta ) );

			return this;

		}

		translate( tx, ty ) {

			this.premultiply( _m3.makeTranslation( tx, ty ) );

			return this;

		}

		// for 2D Transforms

		makeTranslation( x, y ) {

			if ( x.isVector2 ) {

				this.set(

					1, 0, x.x,
					0, 1, x.y,
					0, 0, 1

				);

			} else {

				this.set(

					1, 0, x,
					0, 1, y,
					0, 0, 1

				);

			}

			return this;

		}

		makeRotation( theta ) {

			// counterclockwise

			const c = Math.cos( theta );
			const s = Math.sin( theta );

			this.set(

				c, - s, 0,
				s, c, 0,
				0, 0, 1

			);

			return this;

		}

		makeScale( x, y ) {

			this.set(

				x, 0, 0,
				0, y, 0,
				0, 0, 1

			);

			return this;

		}

		//

		equals( matrix ) {

			const te = this.elements;
			const me = matrix.elements;

			for ( let i = 0; i < 9; i ++ ) {

				if ( te[ i ] !== me[ i ] ) return false;

			}

			return true;

		}

		fromArray( array, offset = 0 ) {

			for ( let i = 0; i < 9; i ++ ) {

				this.elements[ i ] = array[ i + offset ];

			}

			return this;

		}

		toArray( array = [], offset = 0 ) {

			const te = this.elements;

			array[ offset ] = te[ 0 ];
			array[ offset + 1 ] = te[ 1 ];
			array[ offset + 2 ] = te[ 2 ];

			array[ offset + 3 ] = te[ 3 ];
			array[ offset + 4 ] = te[ 4 ];
			array[ offset + 5 ] = te[ 5 ];

			array[ offset + 6 ] = te[ 6 ];
			array[ offset + 7 ] = te[ 7 ];
			array[ offset + 8 ] = te[ 8 ];

			return array;

		}

		clone() {

			return new this.constructor().fromArray( this.elements );

		}

	}

	const _m3 = /*@__PURE__*/ new Matrix3();

	function createElementNS( name ) {

		return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

	}

	const _cache = {};

	function warnOnce( message ) {

		if ( message in _cache ) return;

		_cache[ message ] = true;

		console.warn( message );

	}


	function SRGBToLinear( c ) {

		return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

	}

	let _canvas;

	class ImageUtils {

		static getDataURL( image ) {

			if ( /^data:/i.test( image.src ) ) {

				return image.src;

			}

			if ( typeof HTMLCanvasElement === 'undefined' ) {

				return image.src;

			}

			let canvas;

			if ( image instanceof HTMLCanvasElement ) {

				canvas = image;

			} else {

				if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

				_canvas.width = image.width;
				_canvas.height = image.height;

				const context = _canvas.getContext( '2d' );

				if ( image instanceof ImageData ) {

					context.putImageData( image, 0, 0 );

				} else {

					context.drawImage( image, 0, 0, image.width, image.height );

				}

				canvas = _canvas;

			}

			if ( canvas.width > 2048 || canvas.height > 2048 ) {

				console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

				return canvas.toDataURL( 'image/jpeg', 0.6 );

			} else {

				return canvas.toDataURL( 'image/png' );

			}

		}

		static sRGBToLinear( image ) {

			if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
				( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
				( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

				const canvas = createElementNS( 'canvas' );

				canvas.width = image.width;
				canvas.height = image.height;

				const context = canvas.getContext( '2d' );
				context.drawImage( image, 0, 0, image.width, image.height );

				const imageData = context.getImageData( 0, 0, image.width, image.height );
				const data = imageData.data;

				for ( let i = 0; i < data.length; i ++ ) {

					data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

				}

				context.putImageData( imageData, 0, 0 );

				return canvas;

			} else if ( image.data ) {

				const data = image.data.slice( 0 );

				for ( let i = 0; i < data.length; i ++ ) {

					if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

						data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

					} else {

						// assuming float

						data[ i ] = SRGBToLinear( data[ i ] );

					}

				}

				return {
					data: data,
					width: image.width,
					height: image.height
				};

			} else {

				console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
				return image;

			}

		}

	}

	let _sourceId = 0;

	class Source {

		constructor( data = null ) {

			this.isSource = true;

			Object.defineProperty( this, 'id', { value: _sourceId ++ } );

			this.uuid = generateUUID();

			this.data = data;

			this.version = 0;

		}

		set needsUpdate( value ) {

			if ( value === true ) this.version ++;

		}

		toJSON( meta ) {

			const isRootObject = ( meta === undefined || typeof meta === 'string' );

			if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

				return meta.images[ this.uuid ];

			}

			const output = {
				uuid: this.uuid,
				url: ''
			};

			const data = this.data;

			if ( data !== null ) {

				let url;

				if ( Array.isArray( data ) ) {

					// cube texture

					url = [];

					for ( let i = 0, l = data.length; i < l; i ++ ) {

						if ( data[ i ].isDataTexture ) {

							url.push( serializeImage( data[ i ].image ) );

						} else {

							url.push( serializeImage( data[ i ] ) );

						}

					}

				} else {

					// texture

					url = serializeImage( data );

				}

				output.url = url;

			}

			if ( ! isRootObject ) {

				meta.images[ this.uuid ] = output;

			}

			return output;

		}

	}

	function serializeImage( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			// default images

			return ImageUtils.getDataURL( image );

		} else {

			if ( image.data ) {

				// images of DataTexture

				return {
					data: Array.from( image.data ),
					width: image.width,
					height: image.height,
					type: image.data.constructor.name
				};

			} else {

				console.warn( 'THREE.Texture: Unable to serialize Texture.' );
				return {};

			}

		}

	}

	let _textureId = 0;

	class Texture extends EventDispatcher {

		constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

			super();

			this.isTexture = true;

			Object.defineProperty( this, 'id', { value: _textureId ++ } );

			this.uuid = generateUUID();

			this.name = '';

			this.source = new Source( image );
			this.mipmaps = [];

			this.mapping = mapping;
			this.channel = 0;

			this.wrapS = wrapS;
			this.wrapT = wrapT;

			this.magFilter = magFilter;
			this.minFilter = minFilter;

			this.anisotropy = anisotropy;

			this.format = format;
			this.internalFormat = null;
			this.type = type;

			this.offset = new Vector2( 0, 0 );
			this.repeat = new Vector2( 1, 1 );
			this.center = new Vector2( 0, 0 );
			this.rotation = 0;

			this.matrixAutoUpdate = true;
			this.matrix = new Matrix3();

			this.generateMipmaps = true;
			this.premultiplyAlpha = false;
			this.flipY = true;
			this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

			if ( typeof colorSpace === 'string' ) {

				this.colorSpace = colorSpace;

			} else { // @deprecated, r152

				warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
				this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

			}


			this.userData = {};

			this.version = 0;
			this.onUpdate = null;

			this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
			this.needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

		}

		get image() {

			return this.source.data;

		}

		set image( value = null ) {

			this.source.data = value;

		}

		updateMatrix() {

			this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

		}

		clone() {

			return new this.constructor().copy( this );

		}

		copy( source ) {

			this.name = source.name;

			this.source = source.source;
			this.mipmaps = source.mipmaps.slice( 0 );

			this.mapping = source.mapping;
			this.channel = source.channel;

			this.wrapS = source.wrapS;
			this.wrapT = source.wrapT;

			this.magFilter = source.magFilter;
			this.minFilter = source.minFilter;

			this.anisotropy = source.anisotropy;

			this.format = source.format;
			this.internalFormat = source.internalFormat;
			this.type = source.type;

			this.offset.copy( source.offset );
			this.repeat.copy( source.repeat );
			this.center.copy( source.center );
			this.rotation = source.rotation;

			this.matrixAutoUpdate = source.matrixAutoUpdate;
			this.matrix.copy( source.matrix );

			this.generateMipmaps = source.generateMipmaps;
			this.premultiplyAlpha = source.premultiplyAlpha;
			this.flipY = source.flipY;
			this.unpackAlignment = source.unpackAlignment;
			this.colorSpace = source.colorSpace;

			this.userData = JSON.parse( JSON.stringify( source.userData ) );

			this.needsUpdate = true;

			return this;

		}

		toJSON( meta ) {

			const isRootObject = ( meta === undefined || typeof meta === 'string' );

			if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

				return meta.textures[ this.uuid ];

			}

			const output = {

				metadata: {
					version: 4.6,
					type: 'Texture',
					generator: 'Texture.toJSON'
				},

				uuid: this.uuid,
				name: this.name,

				image: this.source.toJSON( meta ).uuid,

				mapping: this.mapping,
				channel: this.channel,

				repeat: [ this.repeat.x, this.repeat.y ],
				offset: [ this.offset.x, this.offset.y ],
				center: [ this.center.x, this.center.y ],
				rotation: this.rotation,

				wrap: [ this.wrapS, this.wrapT ],

				format: this.format,
				internalFormat: this.internalFormat,
				type: this.type,
				colorSpace: this.colorSpace,

				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,

				flipY: this.flipY,

				generateMipmaps: this.generateMipmaps,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment

			};

			if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

			if ( ! isRootObject ) {

				meta.textures[ this.uuid ] = output;

			}

			return output;

		}

		dispose() {

			this.dispatchEvent( { type: 'dispose' } );

		}

		transformUv( uv ) {

			if ( this.mapping !== UVMapping ) return uv;

			uv.applyMatrix3( this.matrix );

			if ( uv.x < 0 || uv.x > 1 ) {

				switch ( this.wrapS ) {

					case RepeatWrapping:

						uv.x = uv.x - Math.floor( uv.x );
						break;

					case ClampToEdgeWrapping:

						uv.x = uv.x < 0 ? 0 : 1;
						break;

					case MirroredRepeatWrapping:

						if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

							uv.x = Math.ceil( uv.x ) - uv.x;

						} else {

							uv.x = uv.x - Math.floor( uv.x );

						}

						break;

				}

			}

			if ( uv.y < 0 || uv.y > 1 ) {

				switch ( this.wrapT ) {

					case RepeatWrapping:

						uv.y = uv.y - Math.floor( uv.y );
						break;

					case ClampToEdgeWrapping:

						uv.y = uv.y < 0 ? 0 : 1;
						break;

					case MirroredRepeatWrapping:

						if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

							uv.y = Math.ceil( uv.y ) - uv.y;

						} else {

							uv.y = uv.y - Math.floor( uv.y );

						}

						break;

				}

			}

			if ( this.flipY ) {

				uv.y = 1 - uv.y;

			}

			return uv;

		}

		set needsUpdate( value ) {

			if ( value === true ) {

				this.version ++;
				this.source.needsUpdate = true;

			}

		}

		get encoding() { // @deprecated, r152

			warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
			return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;

		}

		set encoding( encoding ) { // @deprecated, r152

			warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
			this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

		}

	}

	Texture.DEFAULT_IMAGE = null;
	Texture.DEFAULT_MAPPING = UVMapping;
	Texture.DEFAULT_ANISOTROPY = 1;

	class Quaternion {

		constructor( x = 0, y = 0, z = 0, w = 1 ) {

			this.isQuaternion = true;

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

		}

		static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

			// fuzz-free, array-based Quaternion SLERP operation

			let x0 = src0[ srcOffset0 + 0 ],
				y0 = src0[ srcOffset0 + 1 ],
				z0 = src0[ srcOffset0 + 2 ],
				w0 = src0[ srcOffset0 + 3 ];

			const x1 = src1[ srcOffset1 + 0 ],
				y1 = src1[ srcOffset1 + 1 ],
				z1 = src1[ srcOffset1 + 2 ],
				w1 = src1[ srcOffset1 + 3 ];

			if ( t === 0 ) {

				dst[ dstOffset + 0 ] = x0;
				dst[ dstOffset + 1 ] = y0;
				dst[ dstOffset + 2 ] = z0;
				dst[ dstOffset + 3 ] = w0;
				return;

			}

			if ( t === 1 ) {

				dst[ dstOffset + 0 ] = x1;
				dst[ dstOffset + 1 ] = y1;
				dst[ dstOffset + 2 ] = z1;
				dst[ dstOffset + 3 ] = w1;
				return;

			}

			if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

				let s = 1 - t;
				const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
					dir = ( cos >= 0 ? 1 : - 1 ),
					sqrSin = 1 - cos * cos;

				// Skip the Slerp for tiny steps to avoid numeric problems:
				if ( sqrSin > Number.EPSILON ) {

					const sin = Math.sqrt( sqrSin ),
						len = Math.atan2( sin, cos * dir );

					s = Math.sin( s * len ) / sin;
					t = Math.sin( t * len ) / sin;

				}

				const tDir = t * dir;

				x0 = x0 * s + x1 * tDir;
				y0 = y0 * s + y1 * tDir;
				z0 = z0 * s + z1 * tDir;
				w0 = w0 * s + w1 * tDir;

				// Normalize in case we just did a lerp:
				if ( s === 1 - t ) {

					const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

					x0 *= f;
					y0 *= f;
					z0 *= f;
					w0 *= f;

				}

			}

			dst[ dstOffset ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;

		}

		static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

			const x0 = src0[ srcOffset0 ];
			const y0 = src0[ srcOffset0 + 1 ];
			const z0 = src0[ srcOffset0 + 2 ];
			const w0 = src0[ srcOffset0 + 3 ];

			const x1 = src1[ srcOffset1 ];
			const y1 = src1[ srcOffset1 + 1 ];
			const z1 = src1[ srcOffset1 + 2 ];
			const w1 = src1[ srcOffset1 + 3 ];

			dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
			dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
			dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
			dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

			return dst;

		}

		get x() {

			return this._x;

		}

		set x( value ) {

			this._x = value;
			this._onChangeCallback();

		}

		get y() {

			return this._y;

		}

		set y( value ) {

			this._y = value;
			this._onChangeCallback();

		}

		get z() {

			return this._z;

		}

		set z( value ) {

			this._z = value;
			this._onChangeCallback();

		}

		get w() {

			return this._w;

		}

		set w( value ) {

			this._w = value;
			this._onChangeCallback();

		}

		set( x, y, z, w ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

			this._onChangeCallback();

			return this;

		}

		clone() {

			return new this.constructor( this._x, this._y, this._z, this._w );

		}

		copy( quaternion ) {

			this._x = quaternion.x;
			this._y = quaternion.y;
			this._z = quaternion.z;
			this._w = quaternion.w;

			this._onChangeCallback();

			return this;

		}

		setFromEuler( euler, update = true ) {

			const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

			// http://www.mathworks.com/matlabcentral/fileexchange/
			// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
			//	content/SpinCalc.m

			const cos = Math.cos;
			const sin = Math.sin;

			const c1 = cos( x / 2 );
			const c2 = cos( y / 2 );
			const c3 = cos( z / 2 );

			const s1 = sin( x / 2 );
			const s2 = sin( y / 2 );
			const s3 = sin( z / 2 );

			switch ( order ) {

				case 'XYZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'YXZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'ZXY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'ZYX':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'YZX':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'XZY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				default:
					console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

			}

			if ( update === true ) this._onChangeCallback();

			return this;

		}

		setFromAxisAngle( axis, angle ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

			// assumes axis is normalized

			const halfAngle = angle / 2, s = Math.sin( halfAngle );

			this._x = axis.x * s;
			this._y = axis.y * s;
			this._z = axis.z * s;
			this._w = Math.cos( halfAngle );

			this._onChangeCallback();

			return this;

		}

		setFromRotationMatrix( m ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			const te = m.elements,

				m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
				m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
				m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

				trace = m11 + m22 + m33;

			if ( trace > 0 ) {

				const s = 0.5 / Math.sqrt( trace + 1.0 );

				this._w = 0.25 / s;
				this._x = ( m32 - m23 ) * s;
				this._y = ( m13 - m31 ) * s;
				this._z = ( m21 - m12 ) * s;

			} else if ( m11 > m22 && m11 > m33 ) {

				const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

				this._w = ( m32 - m23 ) / s;
				this._x = 0.25 * s;
				this._y = ( m12 + m21 ) / s;
				this._z = ( m13 + m31 ) / s;

			} else if ( m22 > m33 ) {

				const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

				this._w = ( m13 - m31 ) / s;
				this._x = ( m12 + m21 ) / s;
				this._y = 0.25 * s;
				this._z = ( m23 + m32 ) / s;

			} else {

				const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

				this._w = ( m21 - m12 ) / s;
				this._x = ( m13 + m31 ) / s;
				this._y = ( m23 + m32 ) / s;
				this._z = 0.25 * s;

			}

			this._onChangeCallback();

			return this;

		}

		setFromUnitVectors( vFrom, vTo ) {

			// assumes direction vectors vFrom and vTo are normalized

			let r = vFrom.dot( vTo ) + 1;

			if ( r < Number.EPSILON ) {

				// vFrom and vTo point in opposite directions

				r = 0;

				if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

					this._x = - vFrom.y;
					this._y = vFrom.x;
					this._z = 0;
					this._w = r;

				} else {

					this._x = 0;
					this._y = - vFrom.z;
					this._z = vFrom.y;
					this._w = r;

				}

			} else {

				// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

				this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
				this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
				this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
				this._w = r;

			}

			return this.normalize();

		}

		angleTo( q ) {

			return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

		}

		rotateTowards( q, step ) {

			const angle = this.angleTo( q );

			if ( angle === 0 ) return this;

			const t = Math.min( 1, step / angle );

			this.slerp( q, t );

			return this;

		}

		identity() {

			return this.set( 0, 0, 0, 1 );

		}

		invert() {

			// quaternion is assumed to have unit length

			return this.conjugate();

		}

		conjugate() {

			this._x *= - 1;
			this._y *= - 1;
			this._z *= - 1;

			this._onChangeCallback();

			return this;

		}

		dot( v ) {

			return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

		}

		lengthSq() {

			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

		}

		length() {

			return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

		}

		normalize() {

			let l = this.length();

			if ( l === 0 ) {

				this._x = 0;
				this._y = 0;
				this._z = 0;
				this._w = 1;

			} else {

				l = 1 / l;

				this._x = this._x * l;
				this._y = this._y * l;
				this._z = this._z * l;
				this._w = this._w * l;

			}

			this._onChangeCallback();

			return this;

		}

		multiply( q ) {

			return this.multiplyQuaternions( this, q );

		}

		premultiply( q ) {

			return this.multiplyQuaternions( q, this );

		}

		multiplyQuaternions( a, b ) {

			// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

			const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
			const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

			this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
			this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
			this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
			this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

			this._onChangeCallback();

			return this;

		}

		slerp( qb, t ) {

			if ( t === 0 ) return this;
			if ( t === 1 ) return this.copy( qb );

			const x = this._x, y = this._y, z = this._z, w = this._w;

			// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

			let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

			if ( cosHalfTheta < 0 ) {

				this._w = - qb._w;
				this._x = - qb._x;
				this._y = - qb._y;
				this._z = - qb._z;

				cosHalfTheta = - cosHalfTheta;

			} else {

				this.copy( qb );

			}

			if ( cosHalfTheta >= 1.0 ) {

				this._w = w;
				this._x = x;
				this._y = y;
				this._z = z;

				return this;

			}

			const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

			if ( sqrSinHalfTheta <= Number.EPSILON ) {

				const s = 1 - t;
				this._w = s * w + t * this._w;
				this._x = s * x + t * this._x;
				this._y = s * y + t * this._y;
				this._z = s * z + t * this._z;

				this.normalize(); // normalize calls _onChangeCallback()

				return this;

			}

			const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
			const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
			const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
				ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

			this._w = ( w * ratioA + this._w * ratioB );
			this._x = ( x * ratioA + this._x * ratioB );
			this._y = ( y * ratioA + this._y * ratioB );
			this._z = ( z * ratioA + this._z * ratioB );

			this._onChangeCallback();

			return this;

		}

		slerpQuaternions( qa, qb, t ) {

			return this.copy( qa ).slerp( qb, t );

		}

		random() {

			// Derived from http://planning.cs.uiuc.edu/node198.html
			// Note, this source uses w, x, y, z ordering,
			// so we swap the order below.

			const u1 = Math.random();
			const sqrt1u1 = Math.sqrt( 1 - u1 );
			const sqrtu1 = Math.sqrt( u1 );

			const u2 = 2 * Math.PI * Math.random();

			const u3 = 2 * Math.PI * Math.random();

			return this.set(
				sqrt1u1 * Math.cos( u2 ),
				sqrtu1 * Math.sin( u3 ),
				sqrtu1 * Math.cos( u3 ),
				sqrt1u1 * Math.sin( u2 ),
			);

		}

		equals( quaternion ) {

			return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

		}

		fromArray( array, offset = 0 ) {

			this._x = array[ offset ];
			this._y = array[ offset + 1 ];
			this._z = array[ offset + 2 ];
			this._w = array[ offset + 3 ];

			this._onChangeCallback();

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this._x;
			array[ offset + 1 ] = this._y;
			array[ offset + 2 ] = this._z;
			array[ offset + 3 ] = this._w;

			return array;

		}

		fromBufferAttribute( attribute, index ) {

			this._x = attribute.getX( index );
			this._y = attribute.getY( index );
			this._z = attribute.getZ( index );
			this._w = attribute.getW( index );

			this._onChangeCallback();

			return this;

		}

		toJSON() {

			return this.toArray();

		}

		_onChange( callback ) {

			this._onChangeCallback = callback;

			return this;

		}

		_onChangeCallback() {}

		*[ Symbol.iterator ]() {

			yield this._x;
			yield this._y;
			yield this._z;
			yield this._w;

		}

	}

	class Vector3 {

		constructor( x = 0, y = 0, z = 0 ) {

			Vector3.prototype.isVector3 = true;

			this.x = x;
			this.y = y;
			this.z = z;

		}

		set( x, y, z ) {

			if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

			this.x = x;
			this.y = y;
			this.z = z;

			return this;

		}

		setScalar( scalar ) {

			this.x = scalar;
			this.y = scalar;
			this.z = scalar;

			return this;

		}

		setX( x ) {

			this.x = x;

			return this;

		}

		setY( y ) {

			this.y = y;

			return this;

		}

		setZ( z ) {

			this.z = z;

			return this;

		}

		setComponent( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				case 2: this.z = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

			return this;

		}

		getComponent( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				default: throw new Error( 'index is out of range: ' + index );

			}

		}

		clone() {

			return new this.constructor( this.x, this.y, this.z );

		}

		copy( v ) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;

			return this;

		}

		add( v ) {

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;

			return this;

		}

		addScalar( s ) {

			this.x += s;
			this.y += s;
			this.z += s;

			return this;

		}

		addVectors( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;

			return this;

		}

		addScaledVector( v, s ) {

			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;

			return this;

		}

		sub( v ) {

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;

			return this;

		}

		subScalar( s ) {

			this.x -= s;
			this.y -= s;
			this.z -= s;

			return this;

		}

		subVectors( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;

			return this;

		}

		multiply( v ) {

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;

			return this;

		}

		multiplyScalar( scalar ) {

			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;

			return this;

		}

		multiplyVectors( a, b ) {

			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;

			return this;

		}

		applyEuler( euler ) {

			return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

		}

		applyAxisAngle( axis, angle ) {

			return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

		}

		applyMatrix3( m ) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
			this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
			this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

			return this;

		}

		applyNormalMatrix( m ) {

			return this.applyMatrix3( m ).normalize();

		}

		applyMatrix4( m ) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

			this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
			this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
			this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

			return this;

		}

		applyQuaternion( q ) {

			// quaternion q is assumed to have unit length

			const vx = this.x, vy = this.y, vz = this.z;
			const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

			// t = 2 * cross( q.xyz, v );
			const tx = 2 * ( qy * vz - qz * vy );
			const ty = 2 * ( qz * vx - qx * vz );
			const tz = 2 * ( qx * vy - qy * vx );

			// v + q.w * t + cross( q.xyz, t );
			this.x = vx + qw * tx + qy * tz - qz * ty;
			this.y = vy + qw * ty + qz * tx - qx * tz;
			this.z = vz + qw * tz + qx * ty - qy * tx;

			return this;

		}

		project( camera ) {

			return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

		}

		unproject( camera ) {

			return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

		}

		transformDirection( m ) {

			// input: THREE.Matrix4 affine matrix
			// vector interpreted as a direction

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
			this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
			this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

			return this.normalize();

		}

		divide( v ) {

			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;

			return this;

		}

		divideScalar( scalar ) {

			return this.multiplyScalar( 1 / scalar );

		}

		min( v ) {

			this.x = Math.min( this.x, v.x );
			this.y = Math.min( this.y, v.y );
			this.z = Math.min( this.z, v.z );

			return this;

		}

		max( v ) {

			this.x = Math.max( this.x, v.x );
			this.y = Math.max( this.y, v.y );
			this.z = Math.max( this.z, v.z );

			return this;

		}

		clamp( min, max ) {

			// assumes min < max, componentwise

			this.x = Math.max( min.x, Math.min( max.x, this.x ) );
			this.y = Math.max( min.y, Math.min( max.y, this.y ) );
			this.z = Math.max( min.z, Math.min( max.z, this.z ) );

			return this;

		}

		clampScalar( minVal, maxVal ) {

			this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
			this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
			this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

			return this;

		}

		clampLength( min, max ) {

			const length = this.length();

			return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

		}

		floor() {

			this.x = Math.floor( this.x );
			this.y = Math.floor( this.y );
			this.z = Math.floor( this.z );

			return this;

		}

		ceil() {

			this.x = Math.ceil( this.x );
			this.y = Math.ceil( this.y );
			this.z = Math.ceil( this.z );

			return this;

		}

		round() {

			this.x = Math.round( this.x );
			this.y = Math.round( this.y );
			this.z = Math.round( this.z );

			return this;

		}

		roundToZero() {

			this.x = Math.trunc( this.x );
			this.y = Math.trunc( this.y );
			this.z = Math.trunc( this.z );

			return this;

		}

		negate() {

			this.x = - this.x;
			this.y = - this.y;
			this.z = - this.z;

			return this;

		}

		dot( v ) {

			return this.x * v.x + this.y * v.y + this.z * v.z;

		}

		// TODO lengthSquared?

		lengthSq() {

			return this.x * this.x + this.y * this.y + this.z * this.z;

		}

		length() {

			return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

		}

		manhattanLength() {

			return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

		}

		normalize() {

			return this.divideScalar( this.length() || 1 );

		}

		setLength( length ) {

			return this.normalize().multiplyScalar( length );

		}

		lerp( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;
			this.z += ( v.z - this.z ) * alpha;

			return this;

		}

		lerpVectors( v1, v2, alpha ) {

			this.x = v1.x + ( v2.x - v1.x ) * alpha;
			this.y = v1.y + ( v2.y - v1.y ) * alpha;
			this.z = v1.z + ( v2.z - v1.z ) * alpha;

			return this;

		}

		cross( v ) {

			return this.crossVectors( this, v );

		}

		crossVectors( a, b ) {

			const ax = a.x, ay = a.y, az = a.z;
			const bx = b.x, by = b.y, bz = b.z;

			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;

			return this;

		}

		projectOnVector( v ) {

			const denominator = v.lengthSq();

			if ( denominator === 0 ) return this.set( 0, 0, 0 );

			const scalar = v.dot( this ) / denominator;

			return this.copy( v ).multiplyScalar( scalar );

		}

		projectOnPlane( planeNormal ) {

			_vector$c.copy( this ).projectOnVector( planeNormal );

			return this.sub( _vector$c );

		}

		reflect( normal ) {

			// reflect incident vector off plane orthogonal to normal
			// normal is assumed to have unit length

			return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

		}

		angleTo( v ) {

			const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

			if ( denominator === 0 ) return Math.PI / 2;

			const theta = this.dot( v ) / denominator;

			// clamp, to handle numerical problems

			return Math.acos( clamp( theta, - 1, 1 ) );

		}

		distanceTo( v ) {

			return Math.sqrt( this.distanceToSquared( v ) );

		}

		distanceToSquared( v ) {

			const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

			return dx * dx + dy * dy + dz * dz;

		}

		manhattanDistanceTo( v ) {

			return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

		}

		setFromSpherical( s ) {

			return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

		}

		setFromSphericalCoords( radius, phi, theta ) {

			const sinPhiRadius = Math.sin( phi ) * radius;

			this.x = sinPhiRadius * Math.sin( theta );
			this.y = Math.cos( phi ) * radius;
			this.z = sinPhiRadius * Math.cos( theta );

			return this;

		}

		setFromCylindrical( c ) {

			return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

		}

		setFromCylindricalCoords( radius, theta, y ) {

			this.x = radius * Math.sin( theta );
			this.y = y;
			this.z = radius * Math.cos( theta );

			return this;

		}

		setFromMatrixPosition( m ) {

			const e = m.elements;

			this.x = e[ 12 ];
			this.y = e[ 13 ];
			this.z = e[ 14 ];

			return this;

		}

		setFromMatrixScale( m ) {

			const sx = this.setFromMatrixColumn( m, 0 ).length();
			const sy = this.setFromMatrixColumn( m, 1 ).length();
			const sz = this.setFromMatrixColumn( m, 2 ).length();

			this.x = sx;
			this.y = sy;
			this.z = sz;

			return this;

		}

		setFromMatrixColumn( m, index ) {

			return this.fromArray( m.elements, index * 4 );

		}

		setFromMatrix3Column( m, index ) {

			return this.fromArray( m.elements, index * 3 );

		}

		setFromEuler( e ) {

			this.x = e._x;
			this.y = e._y;
			this.z = e._z;

			return this;

		}

		setFromColor( c ) {

			this.x = c.r;
			this.y = c.g;
			this.z = c.b;

			return this;

		}

		equals( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

		}

		fromArray( array, offset = 0 ) {

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];
			this.z = array[ offset + 2 ];

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;
			array[ offset + 2 ] = this.z;

			return array;

		}

		fromBufferAttribute( attribute, index ) {

			this.x = attribute.getX( index );
			this.y = attribute.getY( index );
			this.z = attribute.getZ( index );

			return this;

		}

		random() {

			this.x = Math.random();
			this.y = Math.random();
			this.z = Math.random();

			return this;

		}

		randomDirection() {

			// Derived from https://mathworld.wolfram.com/SpherePointPicking.html

			const u = ( Math.random() - 0.5 ) * 2;
			const t = Math.random() * Math.PI * 2;
			const f = Math.sqrt( 1 - u ** 2 );

			this.x = f * Math.cos( t );
			this.y = f * Math.sin( t );
			this.z = u;

			return this;

		}

		*[ Symbol.iterator ]() {

			yield this.x;
			yield this.y;
			yield this.z;

		}

	}

	const _vector$c = /*@__PURE__*/ new Vector3();
	const _quaternion$4 = /*@__PURE__*/ new Quaternion();

	const _vector$a = /*@__PURE__*/ new Vector3();
	const _segCenter = /*@__PURE__*/ new Vector3();
	const _segDir = /*@__PURE__*/ new Vector3();
	const _diff = /*@__PURE__*/ new Vector3();

	const _edge1 = /*@__PURE__*/ new Vector3();
	const _edge2 = /*@__PURE__*/ new Vector3();
	const _normal$1 = /*@__PURE__*/ new Vector3();

	class Ray {

		constructor( origin = new Vector3(), direction = new Vector3( 0, 0, - 1 ) ) {

			this.origin = origin;
			this.direction = direction;

		}

		set( origin, direction ) {

			this.origin.copy( origin );
			this.direction.copy( direction );

			return this;

		}

		copy( ray ) {

			this.origin.copy( ray.origin );
			this.direction.copy( ray.direction );

			return this;

		}

		at( t, target ) {

			return target.copy( this.origin ).addScaledVector( this.direction, t );

		}

		lookAt( v ) {

			this.direction.copy( v ).sub( this.origin ).normalize();

			return this;

		}

		recast( t ) {

			this.origin.copy( this.at( t, _vector$a ) );

			return this;

		}

		closestPointToPoint( point, target ) {

			target.subVectors( point, this.origin );

			const directionDistance = target.dot( this.direction );

			if ( directionDistance < 0 ) {

				return target.copy( this.origin );

			}

			return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		}

		distanceToPoint( point ) {

			return Math.sqrt( this.distanceSqToPoint( point ) );

		}

		distanceSqToPoint( point ) {

			const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

			// point behind the ray

			if ( directionDistance < 0 ) {

				return this.origin.distanceToSquared( point );

			}

			_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

			return _vector$a.distanceToSquared( point );

		}

		distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

			// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
			// It returns the min distance between the ray and the segment
			// defined by v0 and v1
			// It can also set two optional targets :
			// - The closest point on the ray
			// - The closest point on the segment

			_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
			_segDir.copy( v1 ).sub( v0 ).normalize();
			_diff.copy( this.origin ).sub( _segCenter );

			const segExtent = v0.distanceTo( v1 ) * 0.5;
			const a01 = - this.direction.dot( _segDir );
			const b0 = _diff.dot( this.direction );
			const b1 = - _diff.dot( _segDir );
			const c = _diff.lengthSq();
			const det = Math.abs( 1 - a01 * a01 );
			let s0, s1, sqrDist, extDet;

			if ( det > 0 ) {

				// The ray and segment are not parallel.

				s0 = a01 * b1 - b0;
				s1 = a01 * b0 - b1;
				extDet = segExtent * det;

				if ( s0 >= 0 ) {

					if ( s1 >= - extDet ) {

						if ( s1 <= extDet ) {

							// region 0
							// Minimum at interior points of ray and segment.

							const invDet = 1 / det;
							s0 *= invDet;
							s1 *= invDet;
							sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

						} else {

							// region 1

							s1 = segExtent;
							s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
							sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

						}

					} else {

						// region 5

						s1 = - segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					if ( s1 <= - extDet ) {

						// region 4

						s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
						s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					} else if ( s1 <= extDet ) {

						// region 3

						s0 = 0;
						s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = s1 * ( s1 + 2 * b1 ) + c;

					} else {

						// region 2

						s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
						s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				}

			} else {

				// Ray and segment are parallel.

				s1 = ( a01 > 0 ) ? - segExtent : segExtent;
				s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
				sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

			}

			if ( optionalPointOnRay ) {

				optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

			}

			if ( optionalPointOnSegment ) {

				optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

			}

			return sqrDist;

		}

		intersectSphere( sphere, target ) {

			_vector$a.subVectors( sphere.center, this.origin );
			const tca = _vector$a.dot( this.direction );
			const d2 = _vector$a.dot( _vector$a ) - tca * tca;
			const radius2 = sphere.radius * sphere.radius;

			if ( d2 > radius2 ) return null;

			const thc = Math.sqrt( radius2 - d2 );

			// t0 = first intersect point - entrance on front of sphere
			const t0 = tca - thc;

			// t1 = second intersect point - exit point on back of sphere
			const t1 = tca + thc;

			// test to see if t1 is behind the ray - if so, return null
			if ( t1 < 0 ) return null;

			// test to see if t0 is behind the ray:
			// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
			// in order to always return an intersect point that is in front of the ray.
			if ( t0 < 0 ) return this.at( t1, target );

			// else t0 is in front of the ray, so return the first collision point scaled by t0
			return this.at( t0, target );

		}

		intersectsSphere( sphere ) {

			return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

		}

		distanceToPlane( plane ) {

			const denominator = plane.normal.dot( this.direction );

			if ( denominator === 0 ) {

				// line is coplanar, return origin
				if ( plane.distanceToPoint( this.origin ) === 0 ) {

					return 0;

				}

				// Null is preferable to undefined since undefined means.... it is undefined

				return null;

			}

			const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

			// Return if the ray never intersects the plane

			return t >= 0 ? t : null;

		}

		intersectPlane( plane, target ) {

			const t = this.distanceToPlane( plane );

			if ( t === null ) {

				return null;

			}

			return this.at( t, target );

		}

		intersectsPlane( plane ) {

			// check if the ray lies on the plane first

			const distToPoint = plane.distanceToPoint( this.origin );

			if ( distToPoint === 0 ) {

				return true;

			}

			const denominator = plane.normal.dot( this.direction );

			if ( denominator * distToPoint < 0 ) {

				return true;

			}

			// ray origin is behind the plane (and is pointing behind it)

			return false;

		}

		intersectBox( box, target ) {

			let tmin, tmax, tymin, tymax, tzmin, tzmax;

			const invdirx = 1 / this.direction.x,
				invdiry = 1 / this.direction.y,
				invdirz = 1 / this.direction.z;

			const origin = this.origin;

			if ( invdirx >= 0 ) {

				tmin = ( box.min.x - origin.x ) * invdirx;
				tmax = ( box.max.x - origin.x ) * invdirx;

			} else {

				tmin = ( box.max.x - origin.x ) * invdirx;
				tmax = ( box.min.x - origin.x ) * invdirx;

			}

			if ( invdiry >= 0 ) {

				tymin = ( box.min.y - origin.y ) * invdiry;
				tymax = ( box.max.y - origin.y ) * invdiry;

			} else {

				tymin = ( box.max.y - origin.y ) * invdiry;
				tymax = ( box.min.y - origin.y ) * invdiry;

			}

			if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

			if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

			if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

			if ( invdirz >= 0 ) {

				tzmin = ( box.min.z - origin.z ) * invdirz;
				tzmax = ( box.max.z - origin.z ) * invdirz;

			} else {

				tzmin = ( box.max.z - origin.z ) * invdirz;
				tzmax = ( box.min.z - origin.z ) * invdirz;

			}

			if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

			if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

			if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

			//return point closest to the ray (positive side)

			if ( tmax < 0 ) return null;

			return this.at( tmin >= 0 ? tmin : tmax, target );

		}

		intersectsBox( box ) {

			return this.intersectBox( box, _vector$a ) !== null;

		}

		intersectTriangle( a, b, c, backfaceCulling, target ) {

			// Compute the offset origin, edges, and normal.

			// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

			_edge1.subVectors( b, a );
			_edge2.subVectors( c, a );
			_normal$1.crossVectors( _edge1, _edge2 );

			// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
			// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
			//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
			//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
			//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
			let DdN = this.direction.dot( _normal$1 );
			let sign;

			if ( DdN > 0 ) {

				if ( backfaceCulling ) return null;
				sign = 1;

			} else if ( DdN < 0 ) {

				sign = - 1;
				DdN = - DdN;

			} else {

				return null;

			}

			_diff.subVectors( this.origin, a );
			const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

			// b1 < 0, no intersection
			if ( DdQxE2 < 0 ) {

				return null;

			}

			const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

			// b2 < 0, no intersection
			if ( DdE1xQ < 0 ) {

				return null;

			}

			// b1+b2 > 1, no intersection
			if ( DdQxE2 + DdE1xQ > DdN ) {

				return null;

			}

			// Line intersects triangle, check if ray does.
			const QdN = - sign * _diff.dot( _normal$1 );

			// t < 0, no intersection
			if ( QdN < 0 ) {

				return null;

			}

			// Ray intersects triangle.
			return this.at( QdN / DdN, target );

		}

		applyMatrix4( matrix4 ) {

			this.origin.applyMatrix4( matrix4 );
			this.direction.transformDirection( matrix4 );

			return this;

		}

		equals( ray ) {

			return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

		}

		clone() {

			return new this.constructor().copy( this );

		}

	}

	class Matrix4 {

		constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

			Matrix4.prototype.isMatrix4 = true;

			this.elements = [

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			];

			if ( n11 !== undefined ) {

				this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

			}

		}

		set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

			const te = this.elements;

			te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
			te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
			te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
			te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

			return this;

		}

		identity() {

			this.set(

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		clone() {

			return new Matrix4().fromArray( this.elements );

		}

		copy( m ) {

			const te = this.elements;
			const me = m.elements;

			te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
			te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
			te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
			te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

			return this;

		}

		copyPosition( m ) {

			const te = this.elements, me = m.elements;

			te[ 12 ] = me[ 12 ];
			te[ 13 ] = me[ 13 ];
			te[ 14 ] = me[ 14 ];

			return this;

		}

		setFromMatrix3( m ) {

			const me = m.elements;

			this.set(

				me[ 0 ], me[ 3 ], me[ 6 ], 0,
				me[ 1 ], me[ 4 ], me[ 7 ], 0,
				me[ 2 ], me[ 5 ], me[ 8 ], 0,
				0, 0, 0, 1

			);

			return this;

		}

		extractBasis( xAxis, yAxis, zAxis ) {

			xAxis.setFromMatrixColumn( this, 0 );
			yAxis.setFromMatrixColumn( this, 1 );
			zAxis.setFromMatrixColumn( this, 2 );

			return this;

		}

		makeBasis( xAxis, yAxis, zAxis ) {

			this.set(
				xAxis.x, yAxis.x, zAxis.x, 0,
				xAxis.y, yAxis.y, zAxis.y, 0,
				xAxis.z, yAxis.z, zAxis.z, 0,
				0, 0, 0, 1
			);

			return this;

		}

		extractRotation( m ) {

			// this method does not support reflection matrices

			const te = this.elements;
			const me = m.elements;

			const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
			const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
			const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

			te[ 0 ] = me[ 0 ] * scaleX;
			te[ 1 ] = me[ 1 ] * scaleX;
			te[ 2 ] = me[ 2 ] * scaleX;
			te[ 3 ] = 0;

			te[ 4 ] = me[ 4 ] * scaleY;
			te[ 5 ] = me[ 5 ] * scaleY;
			te[ 6 ] = me[ 6 ] * scaleY;
			te[ 7 ] = 0;

			te[ 8 ] = me[ 8 ] * scaleZ;
			te[ 9 ] = me[ 9 ] * scaleZ;
			te[ 10 ] = me[ 10 ] * scaleZ;
			te[ 11 ] = 0;

			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		}

		makeRotationFromEuler( euler ) {

			const te = this.elements;

			const x = euler.x, y = euler.y, z = euler.z;
			const a = Math.cos( x ), b = Math.sin( x );
			const c = Math.cos( y ), d = Math.sin( y );
			const e = Math.cos( z ), f = Math.sin( z );

			if ( euler.order === 'XYZ' ) {

				const ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = - c * f;
				te[ 8 ] = d;

				te[ 1 ] = af + be * d;
				te[ 5 ] = ae - bf * d;
				te[ 9 ] = - b * c;

				te[ 2 ] = bf - ae * d;
				te[ 6 ] = be + af * d;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YXZ' ) {

				const ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce + df * b;
				te[ 4 ] = de * b - cf;
				te[ 8 ] = a * d;

				te[ 1 ] = a * f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b;

				te[ 2 ] = cf * b - de;
				te[ 6 ] = df + ce * b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZXY' ) {

				const ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce - df * b;
				te[ 4 ] = - a * f;
				te[ 8 ] = de + cf * b;

				te[ 1 ] = cf + de * b;
				te[ 5 ] = a * e;
				te[ 9 ] = df - ce * b;

				te[ 2 ] = - a * d;
				te[ 6 ] = b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZYX' ) {

				const ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = be * d - af;
				te[ 8 ] = ae * d + bf;

				te[ 1 ] = c * f;
				te[ 5 ] = bf * d + ae;
				te[ 9 ] = af * d - be;

				te[ 2 ] = - d;
				te[ 6 ] = b * c;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YZX' ) {

				const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = bd - ac * f;
				te[ 8 ] = bc * f + ad;

				te[ 1 ] = f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b * e;

				te[ 2 ] = - d * e;
				te[ 6 ] = ad * f + bc;
				te[ 10 ] = ac - bd * f;

			} else if ( euler.order === 'XZY' ) {

				const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = - f;
				te[ 8 ] = d * e;

				te[ 1 ] = ac * f + bd;
				te[ 5 ] = a * e;
				te[ 9 ] = ad * f - bc;

				te[ 2 ] = bc * f - ad;
				te[ 6 ] = b * e;
				te[ 10 ] = bd * f + ac;

			}

			// bottom row
			te[ 3 ] = 0;
			te[ 7 ] = 0;
			te[ 11 ] = 0;

			// last column
			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		}

		makeRotationFromQuaternion( q ) {

			return this.compose( _zero, q, _one );

		}

		lookAt( eye, target, up ) {

			const te = this.elements;

			_z.subVectors( eye, target );

			if ( _z.lengthSq() === 0 ) {

				// eye and target are in the same position

				_z.z = 1;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

			if ( _x.lengthSq() === 0 ) {

				// up and z are parallel

				if ( Math.abs( up.z ) === 1 ) {

					_z.x += 0.0001;

				} else {

					_z.z += 0.0001;

				}

				_z.normalize();
				_x.crossVectors( up, _z );

			}

			_x.normalize();
			_y.crossVectors( _z, _x );

			te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
			te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
			te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

			return this;

		}

		multiply( m ) {

			return this.multiplyMatrices( this, m );

		}

		premultiply( m ) {

			return this.multiplyMatrices( m, this );

		}

		multiplyMatrices( a, b ) {

			const ae = a.elements;
			const be = b.elements;
			const te = this.elements;

			const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
			const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
			const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
			const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

			const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
			const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
			const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
			const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

			te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
			te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
			te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
			te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

			te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
			te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
			te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
			te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

			te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
			te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
			te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
			te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

			te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
			te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
			te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
			te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

			return this;

		}

		multiplyScalar( s ) {

			const te = this.elements;

			te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
			te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
			te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
			te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

			return this;

		}

		determinant() {

			const te = this.elements;

			const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
			const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
			const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
			const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

			//TODO: make this more efficient
			//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

			return (
				n41 * (
					+ n14 * n23 * n32
					 - n13 * n24 * n32
					 - n14 * n22 * n33
					 + n12 * n24 * n33
					 + n13 * n22 * n34
					 - n12 * n23 * n34
				) +
				n42 * (
					+ n11 * n23 * n34
					 - n11 * n24 * n33
					 + n14 * n21 * n33
					 - n13 * n21 * n34
					 + n13 * n24 * n31
					 - n14 * n23 * n31
				) +
				n43 * (
					+ n11 * n24 * n32
					 - n11 * n22 * n34
					 - n14 * n21 * n32
					 + n12 * n21 * n34
					 + n14 * n22 * n31
					 - n12 * n24 * n31
				) +
				n44 * (
					- n13 * n22 * n31
					 - n11 * n23 * n32
					 + n11 * n22 * n33
					 + n13 * n21 * n32
					 - n12 * n21 * n33
					 + n12 * n23 * n31
				)

			);

		}

		transpose() {

			const te = this.elements;
			let tmp;

			tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
			tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
			tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

			tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
			tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
			tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

			return this;

		}

		setPosition( x, y, z ) {

			const te = this.elements;

			if ( x.isVector3 ) {

				te[ 12 ] = x.x;
				te[ 13 ] = x.y;
				te[ 14 ] = x.z;

			} else {

				te[ 12 ] = x;
				te[ 13 ] = y;
				te[ 14 ] = z;

			}

			return this;

		}

		invert() {

			// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
			const te = this.elements,

				n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
				n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
				n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
				n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

				t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
				t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
				t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
				t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

			const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

			if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

			const detInv = 1 / det;

			te[ 0 ] = t11 * detInv;
			te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
			te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
			te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

			te[ 4 ] = t12 * detInv;
			te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
			te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
			te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

			te[ 8 ] = t13 * detInv;
			te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
			te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
			te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

			te[ 12 ] = t14 * detInv;
			te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
			te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
			te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

			return this;

		}

		scale( v ) {

			const te = this.elements;
			const x = v.x, y = v.y, z = v.z;

			te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
			te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
			te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
			te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

			return this;

		}

		getMaxScaleOnAxis() {

			const te = this.elements;

			const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
			const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
			const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

			return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

		}

		makeTranslation( x, y, z ) {

			if ( x.isVector3 ) {

				this.set(

					1, 0, 0, x.x,
					0, 1, 0, x.y,
					0, 0, 1, x.z,
					0, 0, 0, 1

				);

			} else {

				this.set(

					1, 0, 0, x,
					0, 1, 0, y,
					0, 0, 1, z,
					0, 0, 0, 1

				);

			}

			return this;

		}

		makeRotationX( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				1, 0, 0, 0,
				0, c, - s, 0,
				0, s, c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeRotationY( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				 c, 0, s, 0,
				 0, 1, 0, 0,
				- s, 0, c, 0,
				 0, 0, 0, 1

			);

			return this;

		}

		makeRotationZ( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				c, - s, 0, 0,
				s, c, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeRotationAxis( axis, angle ) {

			// Based on http://www.gamedev.net/reference/articles/article1199.asp

			const c = Math.cos( angle );
			const s = Math.sin( angle );
			const t = 1 - c;
			const x = axis.x, y = axis.y, z = axis.z;
			const tx = t * x, ty = t * y;

			this.set(

				tx * x + c, tx * y - s * z, tx * z + s * y, 0,
				tx * y + s * z, ty * y + c, ty * z - s * x, 0,
				tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeScale( x, y, z ) {

			this.set(

				x, 0, 0, 0,
				0, y, 0, 0,
				0, 0, z, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeShear( xy, xz, yx, yz, zx, zy ) {

			this.set(

				1, yx, zx, 0,
				xy, 1, zy, 0,
				xz, yz, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		compose( position, quaternion, scale ) {

			const te = this.elements;

			const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
			const x2 = x + x,	y2 = y + y, z2 = z + z;
			const xx = x * x2, xy = x * y2, xz = x * z2;
			const yy = y * y2, yz = y * z2, zz = z * z2;
			const wx = w * x2, wy = w * y2, wz = w * z2;

			const sx = scale.x, sy = scale.y, sz = scale.z;

			te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
			te[ 1 ] = ( xy + wz ) * sx;
			te[ 2 ] = ( xz - wy ) * sx;
			te[ 3 ] = 0;

			te[ 4 ] = ( xy - wz ) * sy;
			te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
			te[ 6 ] = ( yz + wx ) * sy;
			te[ 7 ] = 0;

			te[ 8 ] = ( xz + wy ) * sz;
			te[ 9 ] = ( yz - wx ) * sz;
			te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
			te[ 11 ] = 0;

			te[ 12 ] = position.x;
			te[ 13 ] = position.y;
			te[ 14 ] = position.z;
			te[ 15 ] = 1;

			return this;

		}

		decompose( position, quaternion, scale ) {

			const te = this.elements;

			let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
			const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
			const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

			// if determine is negative, we need to invert one scale
			const det = this.determinant();
			if ( det < 0 ) sx = - sx;

			position.x = te[ 12 ];
			position.y = te[ 13 ];
			position.z = te[ 14 ];

			// scale the rotation part
			_m1$2.copy( this );

			const invSX = 1 / sx;
			const invSY = 1 / sy;
			const invSZ = 1 / sz;

			_m1$2.elements[ 0 ] *= invSX;
			_m1$2.elements[ 1 ] *= invSX;
			_m1$2.elements[ 2 ] *= invSX;

			_m1$2.elements[ 4 ] *= invSY;
			_m1$2.elements[ 5 ] *= invSY;
			_m1$2.elements[ 6 ] *= invSY;

			_m1$2.elements[ 8 ] *= invSZ;
			_m1$2.elements[ 9 ] *= invSZ;
			_m1$2.elements[ 10 ] *= invSZ;

			quaternion.setFromRotationMatrix( _m1$2 );

			scale.x = sx;
			scale.y = sy;
			scale.z = sz;

			return this;

		}

		makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

			const te = this.elements;
			const x = 2 * near / ( right - left );
			const y = 2 * near / ( top - bottom );

			const a = ( right + left ) / ( right - left );
			const b = ( top + bottom ) / ( top - bottom );

			let c, d;

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				c = - ( far + near ) / ( far - near );
				d = ( - 2 * far * near ) / ( far - near );

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				c = - far / ( far - near );
				d = ( - far * near ) / ( far - near );

			} else {

				throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

			}

			te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
			te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
			te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
			te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

			return this;

		}

		makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

			const te = this.elements;
			const w = 1.0 / ( right - left );
			const h = 1.0 / ( top - bottom );
			const p = 1.0 / ( far - near );

			const x = ( right + left ) * w;
			const y = ( top + bottom ) * h;

			let z, zInv;

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				z = ( far + near ) * p;
				zInv = - 2 * p;

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				z = near * p;
				zInv = - 1 * p;

			} else {

				throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

			}

			te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
			te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
			te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
			te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

			return this;

		}

		equals( matrix ) {

			const te = this.elements;
			const me = matrix.elements;

			for ( let i = 0; i < 16; i ++ ) {

				if ( te[ i ] !== me[ i ] ) return false;

			}

			return true;

		}

		fromArray( array, offset = 0 ) {

			for ( let i = 0; i < 16; i ++ ) {

				this.elements[ i ] = array[ i + offset ];

			}

			return this;

		}

		toArray( array = [], offset = 0 ) {

			const te = this.elements;

			array[ offset ] = te[ 0 ];
			array[ offset + 1 ] = te[ 1 ];
			array[ offset + 2 ] = te[ 2 ];
			array[ offset + 3 ] = te[ 3 ];

			array[ offset + 4 ] = te[ 4 ];
			array[ offset + 5 ] = te[ 5 ];
			array[ offset + 6 ] = te[ 6 ];
			array[ offset + 7 ] = te[ 7 ];

			array[ offset + 8 ] = te[ 8 ];
			array[ offset + 9 ] = te[ 9 ];
			array[ offset + 10 ] = te[ 10 ];
			array[ offset + 11 ] = te[ 11 ];

			array[ offset + 12 ] = te[ 12 ];
			array[ offset + 13 ] = te[ 13 ];
			array[ offset + 14 ] = te[ 14 ];
			array[ offset + 15 ] = te[ 15 ];

			return array;

		}

	}

	const _v1$5 = /*@__PURE__*/ new Vector3();
	const _m1$2 = /*@__PURE__*/ new Matrix4();
	const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
	const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
	const _x = /*@__PURE__*/ new Vector3();
	const _y = /*@__PURE__*/ new Vector3();
	const _z = /*@__PURE__*/ new Vector3();

	const _matrix$1 = /*@__PURE__*/ new Matrix4();
	const _quaternion$3 = /*@__PURE__*/ new Quaternion();

	class Euler {

		constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

			this.isEuler = true;

			this._x = x;
			this._y = y;
			this._z = z;
			this._order = order;

		}

		get x() {

			return this._x;

		}

		set x( value ) {

			this._x = value;
			this._onChangeCallback();

		}

		get y() {

			return this._y;

		}

		set y( value ) {

			this._y = value;
			this._onChangeCallback();

		}

		get z() {

			return this._z;

		}

		set z( value ) {

			this._z = value;
			this._onChangeCallback();

		}

		get order() {

			return this._order;

		}

		set order( value ) {

			this._order = value;
			this._onChangeCallback();

		}

		set( x, y, z, order = this._order ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._order = order;

			this._onChangeCallback();

			return this;

		}

		clone() {

			return new this.constructor( this._x, this._y, this._z, this._order );

		}

		copy( euler ) {

			this._x = euler._x;
			this._y = euler._y;
			this._z = euler._z;
			this._order = euler._order;

			this._onChangeCallback();

			return this;

		}

		setFromRotationMatrix( m, order = this._order, update = true ) {

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			const te = m.elements;
			const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
			const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
			const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

			switch ( order ) {

				case 'XYZ':

					this._y = Math.asin( clamp( m13, - 1, 1 ) );

					if ( Math.abs( m13 ) < 0.9999999 ) {

						this._x = Math.atan2( - m23, m33 );
						this._z = Math.atan2( - m12, m11 );

					} else {

						this._x = Math.atan2( m32, m22 );
						this._z = 0;

					}

					break;

				case 'YXZ':

					this._x = Math.asin( - clamp( m23, - 1, 1 ) );

					if ( Math.abs( m23 ) < 0.9999999 ) {

						this._y = Math.atan2( m13, m33 );
						this._z = Math.atan2( m21, m22 );

					} else {

						this._y = Math.atan2( - m31, m11 );
						this._z = 0;

					}

					break;

				case 'ZXY':

					this._x = Math.asin( clamp( m32, - 1, 1 ) );

					if ( Math.abs( m32 ) < 0.9999999 ) {

						this._y = Math.atan2( - m31, m33 );
						this._z = Math.atan2( - m12, m22 );

					} else {

						this._y = 0;
						this._z = Math.atan2( m21, m11 );

					}

					break;

				case 'ZYX':

					this._y = Math.asin( - clamp( m31, - 1, 1 ) );

					if ( Math.abs( m31 ) < 0.9999999 ) {

						this._x = Math.atan2( m32, m33 );
						this._z = Math.atan2( m21, m11 );

					} else {

						this._x = 0;
						this._z = Math.atan2( - m12, m22 );

					}

					break;

				case 'YZX':

					this._z = Math.asin( clamp( m21, - 1, 1 ) );

					if ( Math.abs( m21 ) < 0.9999999 ) {

						this._x = Math.atan2( - m23, m22 );
						this._y = Math.atan2( - m31, m11 );

					} else {

						this._x = 0;
						this._y = Math.atan2( m13, m33 );

					}

					break;

				case 'XZY':

					this._z = Math.asin( - clamp( m12, - 1, 1 ) );

					if ( Math.abs( m12 ) < 0.9999999 ) {

						this._x = Math.atan2( m32, m22 );
						this._y = Math.atan2( m13, m11 );

					} else {

						this._x = Math.atan2( - m23, m33 );
						this._y = 0;

					}

					break;

				default:

					console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

			}

			this._order = order;

			if ( update === true ) this._onChangeCallback();

			return this;

		}

		setFromQuaternion( q, order, update ) {

			_matrix$1.makeRotationFromQuaternion( q );

			return this.setFromRotationMatrix( _matrix$1, order, update );

		}

		setFromVector3( v, order = this._order ) {

			return this.set( v.x, v.y, v.z, order );

		}

		reorder( newOrder ) {

			// WARNING: this discards revolution information -bhouston

			_quaternion$3.setFromEuler( this );

			return this.setFromQuaternion( _quaternion$3, newOrder );

		}

		equals( euler ) {

			return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

		}

		fromArray( array ) {

			this._x = array[ 0 ];
			this._y = array[ 1 ];
			this._z = array[ 2 ];
			if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

			this._onChangeCallback();

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this._x;
			array[ offset + 1 ] = this._y;
			array[ offset + 2 ] = this._z;
			array[ offset + 3 ] = this._order;

			return array;

		}

		_onChange( callback ) {

			this._onChangeCallback = callback;

			return this;

		}

		_onChangeCallback() {}

		*[ Symbol.iterator ]() {

			yield this._x;
			yield this._y;
			yield this._z;
			yield this._order;

		}

	}

	Euler.DEFAULT_ORDER = 'XYZ';

	class Layers {

		constructor() {

			this.mask = 1 | 0;

		}

		set( channel ) {

			this.mask = ( 1 << channel | 0 ) >>> 0;

		}

		enable( channel ) {

			this.mask |= 1 << channel | 0;

		}

		enableAll() {

			this.mask = 0xffffffff | 0;

		}

		toggle( channel ) {

			this.mask ^= 1 << channel | 0;

		}

		disable( channel ) {

			this.mask &= ~ ( 1 << channel | 0 );

		}

		disableAll() {

			this.mask = 0;

		}

		test( layers ) {

			return ( this.mask & layers.mask ) !== 0;

		}

		isEnabled( channel ) {

			return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

		}

	}

	let _object3DId = 0;

	const _v1$4 = /*@__PURE__*/ new Vector3();
	const _q1 = /*@__PURE__*/ new Quaternion();
	const _m1$1 = /*@__PURE__*/ new Matrix4();
	const _target = /*@__PURE__*/ new Vector3();

	const _position$3 = /*@__PURE__*/ new Vector3();
	const _scale$2 = /*@__PURE__*/ new Vector3();
	const _quaternion$2 = /*@__PURE__*/ new Quaternion();

	const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
	const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
	const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

	const _addedEvent = { type: 'added' };
	const _removedEvent = { type: 'removed' };

	class Object3D extends EventDispatcher {

		constructor() {

			super();

			this.isObject3D = true;

			Object.defineProperty( this, 'id', { value: _object3DId ++ } );

			this.uuid = generateUUID();

			this.name = '';
			this.type = 'Object3D';

			this.parent = null;
			this.children = [];

			this.up = Object3D.DEFAULT_UP.clone();

			const position = new Vector3();
			const rotation = new Euler();
			const quaternion = new Quaternion();
			const scale = new Vector3( 1, 1, 1 );

			function onRotationChange() {

				quaternion.setFromEuler( rotation, false );

			}

			function onQuaternionChange() {

				rotation.setFromQuaternion( quaternion, undefined, false );

			}

			rotation._onChange( onRotationChange );
			quaternion._onChange( onQuaternionChange );

			Object.defineProperties( this, {
				position: {
					configurable: true,
					enumerable: true,
					value: position
				},
				rotation: {
					configurable: true,
					enumerable: true,
					value: rotation
				},
				quaternion: {
					configurable: true,
					enumerable: true,
					value: quaternion
				},
				scale: {
					configurable: true,
					enumerable: true,
					value: scale
				},
				modelViewMatrix: {
					value: new Matrix4()
				},
				normalMatrix: {
					value: new Matrix3()
				}
			} );

			this.matrix = new Matrix4();
			this.matrixWorld = new Matrix4();

			this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

			this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
			this.matrixWorldNeedsUpdate = false;

			this.layers = new Layers();
			this.visible = true;

			this.castShadow = false;
			this.receiveShadow = false;

			this.frustumCulled = true;
			this.renderOrder = 0;

			this.animations = [];

			this.userData = {};

		}

		onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

		onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

		onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

		onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

		applyMatrix4( matrix ) {

			if ( this.matrixAutoUpdate ) this.updateMatrix();

			this.matrix.premultiply( matrix );

			this.matrix.decompose( this.position, this.quaternion, this.scale );

		}

		applyQuaternion( q ) {

			this.quaternion.premultiply( q );

			return this;

		}

		setRotationFromAxisAngle( axis, angle ) {

			// assumes axis is normalized

			this.quaternion.setFromAxisAngle( axis, angle );

		}

		setRotationFromEuler( euler ) {

			this.quaternion.setFromEuler( euler, true );

		}

		setRotationFromMatrix( m ) {

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			this.quaternion.setFromRotationMatrix( m );

		}

		setRotationFromQuaternion( q ) {

			// assumes q is normalized

			this.quaternion.copy( q );

		}

		rotateOnAxis( axis, angle ) {

			// rotate object on axis in object space
			// axis is assumed to be normalized

			_q1.setFromAxisAngle( axis, angle );

			this.quaternion.multiply( _q1 );

			return this;

		}

		rotateOnWorldAxis( axis, angle ) {

			// rotate object on axis in world space
			// axis is assumed to be normalized
			// method assumes no rotated parent

			_q1.setFromAxisAngle( axis, angle );

			this.quaternion.premultiply( _q1 );

			return this;

		}

		rotateX( angle ) {

			return this.rotateOnAxis( _xAxis, angle );

		}

		rotateY( angle ) {

			return this.rotateOnAxis( _yAxis, angle );

		}

		rotateZ( angle ) {

			return this.rotateOnAxis( _zAxis, angle );

		}

		translateOnAxis( axis, distance ) {

			// translate object by distance along axis in object space
			// axis is assumed to be normalized

			_v1$4.copy( axis ).applyQuaternion( this.quaternion );

			this.position.add( _v1$4.multiplyScalar( distance ) );

			return this;

		}

		translateX( distance ) {

			return this.translateOnAxis( _xAxis, distance );

		}

		translateY( distance ) {

			return this.translateOnAxis( _yAxis, distance );

		}

		translateZ( distance ) {

			return this.translateOnAxis( _zAxis, distance );

		}

		localToWorld( vector ) {

			this.updateWorldMatrix( true, false );

			return vector.applyMatrix4( this.matrixWorld );

		}

		worldToLocal( vector ) {

			this.updateWorldMatrix( true, false );

			return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

		}

		lookAt( x, y, z ) {

			// This method does not support objects having non-uniformly-scaled parent(s)

			if ( x.isVector3 ) {

				_target.copy( x );

			} else {

				_target.set( x, y, z );

			}

			const parent = this.parent;

			this.updateWorldMatrix( true, false );

			_position$3.setFromMatrixPosition( this.matrixWorld );

			if ( this.isCamera || this.isLight ) {

				_m1$1.lookAt( _position$3, _target, this.up );

			} else {

				_m1$1.lookAt( _target, _position$3, this.up );

			}

			this.quaternion.setFromRotationMatrix( _m1$1 );

			if ( parent ) {

				_m1$1.extractRotation( parent.matrixWorld );
				_q1.setFromRotationMatrix( _m1$1 );
				this.quaternion.premultiply( _q1.invert() );

			}

		}

		add( object ) {

			if ( arguments.length > 1 ) {

				for ( let i = 0; i < arguments.length; i ++ ) {

					this.add( arguments[ i ] );

				}

				return this;

			}

			if ( object === this ) {

				console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
				return this;

			}

			if ( object && object.isObject3D ) {

				if ( object.parent !== null ) {

					object.parent.remove( object );

				}

				object.parent = this;
				this.children.push( object );

				object.dispatchEvent( _addedEvent );

			} else {

				console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

			}

			return this;

		}

		remove( object ) {

			if ( arguments.length > 1 ) {

				for ( let i = 0; i < arguments.length; i ++ ) {

					this.remove( arguments[ i ] );

				}

				return this;

			}

			const index = this.children.indexOf( object );

			if ( index !== - 1 ) {

				object.parent = null;
				this.children.splice( index, 1 );

				object.dispatchEvent( _removedEvent );

			}

			return this;

		}

		removeFromParent() {

			const parent = this.parent;

			if ( parent !== null ) {

				parent.remove( this );

			}

			return this;

		}

		clear() {

			return this.remove( ... this.children );

		}

		attach( object ) {

			// adds object as a child of this, while maintaining the object's world transform

			// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

			this.updateWorldMatrix( true, false );

			_m1$1.copy( this.matrixWorld ).invert();

			if ( object.parent !== null ) {

				object.parent.updateWorldMatrix( true, false );

				_m1$1.multiply( object.parent.matrixWorld );

			}

			object.applyMatrix4( _m1$1 );

			this.add( object );

			object.updateWorldMatrix( false, true );

			return this;

		}

		getObjectById( id ) {

			return this.getObjectByProperty( 'id', id );

		}

		getObjectByName( name ) {

			return this.getObjectByProperty( 'name', name );

		}

		getObjectByProperty( name, value ) {

			if ( this[ name ] === value ) return this;

			for ( let i = 0, l = this.children.length; i < l; i ++ ) {

				const child = this.children[ i ];
				const object = child.getObjectByProperty( name, value );

				if ( object !== undefined ) {

					return object;

				}

			}

			return undefined;

		}

		getObjectsByProperty( name, value, result = [] ) {

			if ( this[ name ] === value ) result.push( this );

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				children[ i ].getObjectsByProperty( name, value, result );

			}

			return result;

		}

		getWorldPosition( target ) {

			this.updateWorldMatrix( true, false );

			return target.setFromMatrixPosition( this.matrixWorld );

		}

		getWorldQuaternion( target ) {

			this.updateWorldMatrix( true, false );

			this.matrixWorld.decompose( _position$3, target, _scale$2 );

			return target;

		}

		getWorldScale( target ) {

			this.updateWorldMatrix( true, false );

			this.matrixWorld.decompose( _position$3, _quaternion$2, target );

			return target;

		}

		getWorldDirection( target ) {

			this.updateWorldMatrix( true, false );

			const e = this.matrixWorld.elements;

			return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

		}

		raycast( /* raycaster, intersects */ ) {}

		traverse( callback ) {

			callback( this );

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				children[ i ].traverse( callback );

			}

		}

		traverseVisible( callback ) {

			if ( this.visible === false ) return;

			callback( this );

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				children[ i ].traverseVisible( callback );

			}

		}

		traverseAncestors( callback ) {

			const parent = this.parent;

			if ( parent !== null ) {

				callback( parent );

				parent.traverseAncestors( callback );

			}

		}

		updateMatrix() {

			this.matrix.compose( this.position, this.quaternion, this.scale );

			this.matrixWorldNeedsUpdate = true;

		}

		updateMatrixWorld( force ) {

			if ( this.matrixAutoUpdate ) this.updateMatrix();

			if ( this.matrixWorldNeedsUpdate || force ) {

				if ( this.parent === null ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

				this.matrixWorldNeedsUpdate = false;

				force = true;

			}

			// update children

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				if ( child.matrixWorldAutoUpdate === true || force === true ) {

					child.updateMatrixWorld( force );

				}

			}

		}

		updateWorldMatrix( updateParents, updateChildren ) {

			const parent = this.parent;

			if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

				parent.updateWorldMatrix( true, false );

			}

			if ( this.matrixAutoUpdate ) this.updateMatrix();

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			// update children

			if ( updateChildren === true ) {

				const children = this.children;

				for ( let i = 0, l = children.length; i < l; i ++ ) {

					const child = children[ i ];

					if ( child.matrixWorldAutoUpdate === true ) {

						child.updateWorldMatrix( false, true );

					}

				}

			}

		}

		toJSON( meta ) {

			// meta is a string when called from JSON.stringify
			const isRootObject = ( meta === undefined || typeof meta === 'string' );

			const output = {};

			// meta is a hash used to collect geometries, materials.
			// not providing it implies that this is the root object
			// being serialized.
			if ( isRootObject ) {

				// initialize meta obj
				meta = {
					geometries: {},
					materials: {},
					textures: {},
					images: {},
					shapes: {},
					skeletons: {},
					animations: {},
					nodes: {}
				};

				output.metadata = {
					version: 4.6,
					type: 'Object',
					generator: 'Object3D.toJSON'
				};

			}

			// standard Object3D serialization

			const object = {};

			object.uuid = this.uuid;
			object.type = this.type;

			if ( this.name !== '' ) object.name = this.name;
			if ( this.castShadow === true ) object.castShadow = true;
			if ( this.receiveShadow === true ) object.receiveShadow = true;
			if ( this.visible === false ) object.visible = false;
			if ( this.frustumCulled === false ) object.frustumCulled = false;
			if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
			if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

			object.layers = this.layers.mask;
			object.matrix = this.matrix.toArray();
			object.up = this.up.toArray();

			if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

			// object specific properties

			if ( this.isInstancedMesh ) {

				object.type = 'InstancedMesh';
				object.count = this.count;
				object.instanceMatrix = this.instanceMatrix.toJSON();
				if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

			}

			if ( this.isBatchedMesh ) {

				object.type = 'BatchedMesh';
				object.perObjectFrustumCulled = this.perObjectFrustumCulled;
				object.sortObjects = this.sortObjects;

				object.drawRanges = this._drawRanges;
				object.reservedRanges = this._reservedRanges;

				object.visibility = this._visibility;
				object.active = this._active;
				object.bounds = this._bounds.map( bound => ( {
					boxInitialized: bound.boxInitialized,
					boxMin: bound.box.min.toArray(),
					boxMax: bound.box.max.toArray(),

					sphereInitialized: bound.sphereInitialized,
					sphereRadius: bound.sphere.radius,
					sphereCenter: bound.sphere.center.toArray()
				} ) );

				object.maxGeometryCount = this._maxGeometryCount;
				object.maxVertexCount = this._maxVertexCount;
				object.maxIndexCount = this._maxIndexCount;

				object.geometryInitialized = this._geometryInitialized;
				object.geometryCount = this._geometryCount;

				object.matricesTexture = this._matricesTexture.toJSON( meta );

				if ( this.boundingSphere !== null ) {

					object.boundingSphere = {
						center: object.boundingSphere.center.toArray(),
						radius: object.boundingSphere.radius
					};

				}

				if ( this.boundingBox !== null ) {

					object.boundingBox = {
						min: object.boundingBox.min.toArray(),
						max: object.boundingBox.max.toArray()
					};

				}

			}

			//

			function serialize( library, element ) {

				if ( library[ element.uuid ] === undefined ) {

					library[ element.uuid ] = element.toJSON( meta );

				}

				return element.uuid;

			}

			if ( this.isScene ) {

				if ( this.background ) {

					if ( this.background.isColor ) {

						object.background = this.background.toJSON();

					} else if ( this.background.isTexture ) {

						object.background = this.background.toJSON( meta ).uuid;

					}

				}

				if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

					object.environment = this.environment.toJSON( meta ).uuid;

				}

			} else if ( this.isMesh || this.isLine || this.isPoints ) {

				object.geometry = serialize( meta.geometries, this.geometry );

				const parameters = this.geometry.parameters;

				if ( parameters !== undefined && parameters.shapes !== undefined ) {

					const shapes = parameters.shapes;

					if ( Array.isArray( shapes ) ) {

						for ( let i = 0, l = shapes.length; i < l; i ++ ) {

							const shape = shapes[ i ];

							serialize( meta.shapes, shape );

						}

					} else {

						serialize( meta.shapes, shapes );

					}

				}

			}

			if ( this.isSkinnedMesh ) {

				object.bindMode = this.bindMode;
				object.bindMatrix = this.bindMatrix.toArray();

				if ( this.skeleton !== undefined ) {

					serialize( meta.skeletons, this.skeleton );

					object.skeleton = this.skeleton.uuid;

				}

			}

			if ( this.material !== undefined ) {

				if ( Array.isArray( this.material ) ) {

					const uuids = [];

					for ( let i = 0, l = this.material.length; i < l; i ++ ) {

						uuids.push( serialize( meta.materials, this.material[ i ] ) );

					}

					object.material = uuids;

				} else {

					object.material = serialize( meta.materials, this.material );

				}

			}

			//

			if ( this.children.length > 0 ) {

				object.children = [];

				for ( let i = 0; i < this.children.length; i ++ ) {

					object.children.push( this.children[ i ].toJSON( meta ).object );

				}

			}

			//

			if ( this.animations.length > 0 ) {

				object.animations = [];

				for ( let i = 0; i < this.animations.length; i ++ ) {

					const animation = this.animations[ i ];

					object.animations.push( serialize( meta.animations, animation ) );

				}

			}

			if ( isRootObject ) {

				const geometries = extractFromCache( meta.geometries );
				const materials = extractFromCache( meta.materials );
				const textures = extractFromCache( meta.textures );
				const images = extractFromCache( meta.images );
				const shapes = extractFromCache( meta.shapes );
				const skeletons = extractFromCache( meta.skeletons );
				const animations = extractFromCache( meta.animations );
				const nodes = extractFromCache( meta.nodes );

				if ( geometries.length > 0 ) output.geometries = geometries;
				if ( materials.length > 0 ) output.materials = materials;
				if ( textures.length > 0 ) output.textures = textures;
				if ( images.length > 0 ) output.images = images;
				if ( shapes.length > 0 ) output.shapes = shapes;
				if ( skeletons.length > 0 ) output.skeletons = skeletons;
				if ( animations.length > 0 ) output.animations = animations;
				if ( nodes.length > 0 ) output.nodes = nodes;

			}

			output.object = object;

			return output;

			// extract data from the cache hash
			// remove metadata on each item
			// and return as array
			function extractFromCache( cache ) {

				const values = [];
				for ( const key in cache ) {

					const data = cache[ key ];
					delete data.metadata;
					values.push( data );

				}

				return values;

			}

		}

		clone( recursive ) {

			return new this.constructor().copy( this, recursive );

		}

		copy( source, recursive = true ) {

			this.name = source.name;

			this.up.copy( source.up );

			this.position.copy( source.position );
			this.rotation.order = source.rotation.order;
			this.quaternion.copy( source.quaternion );
			this.scale.copy( source.scale );

			this.matrix.copy( source.matrix );
			this.matrixWorld.copy( source.matrixWorld );

			this.matrixAutoUpdate = source.matrixAutoUpdate;

			this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
			this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

			this.layers.mask = source.layers.mask;
			this.visible = source.visible;

			this.castShadow = source.castShadow;
			this.receiveShadow = source.receiveShadow;

			this.frustumCulled = source.frustumCulled;
			this.renderOrder = source.renderOrder;

			this.animations = source.animations.slice();

			this.userData = JSON.parse( JSON.stringify( source.userData ) );

			if ( recursive === true ) {

				for ( let i = 0; i < source.children.length; i ++ ) {

					const child = source.children[ i ];
					this.add( child.clone() );

				}

			}

			return this;

		}

	}

	Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
	Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
	Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

	const _vector1 = /*@__PURE__*/ new Vector3();
	const _vector2 = /*@__PURE__*/ new Vector3();
	const _normalMatrix = /*@__PURE__*/ new Matrix3();

	class Plane {

		constructor( normal = new Vector3( 1, 0, 0 ), constant = 0 ) {

			this.isPlane = true;

			// normal is assumed to be normalized

			this.normal = normal;
			this.constant = constant;

		}

		set( normal, constant ) {

			this.normal.copy( normal );
			this.constant = constant;

			return this;

		}

		setComponents( x, y, z, w ) {

			this.normal.set( x, y, z );
			this.constant = w;

			return this;

		}

		setFromNormalAndCoplanarPoint( normal, point ) {

			this.normal.copy( normal );
			this.constant = - point.dot( this.normal );

			return this;

		}

		setFromCoplanarPoints( a, b, c ) {

			const normal = _vector1.subVectors( c, b ).cross( _vector2.subVectors( a, b ) ).normalize();

			// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

			this.setFromNormalAndCoplanarPoint( normal, a );

			return this;

		}

		copy( plane ) {

			this.normal.copy( plane.normal );
			this.constant = plane.constant;

			return this;

		}

		normalize() {

			// Note: will lead to a divide by zero if the plane is invalid.

			const inverseNormalLength = 1.0 / this.normal.length();
			this.normal.multiplyScalar( inverseNormalLength );
			this.constant *= inverseNormalLength;

			return this;

		}

		negate() {

			this.constant *= - 1;
			this.normal.negate();

			return this;

		}

		distanceToPoint( point ) {

			return this.normal.dot( point ) + this.constant;

		}

		distanceToSphere( sphere ) {

			return this.distanceToPoint( sphere.center ) - sphere.radius;

		}

		projectPoint( point, target ) {

			return target.copy( point ).addScaledVector( this.normal, - this.distanceToPoint( point ) );

		}

		intersectLine( line, target ) {

			const direction = line.delta( _vector1 );

			const denominator = this.normal.dot( direction );

			if ( denominator === 0 ) {

				// line is coplanar, return origin
				if ( this.distanceToPoint( line.start ) === 0 ) {

					return target.copy( line.start );

				}

				// Unsure if this is the correct method to handle this case.
				return null;

			}

			const t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

			if ( t < 0 || t > 1 ) {

				return null;

			}

			return target.copy( line.start ).addScaledVector( direction, t );

		}

		intersectsLine( line ) {

			// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

			const startSign = this.distanceToPoint( line.start );
			const endSign = this.distanceToPoint( line.end );

			return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

		}

		intersectsBox( box ) {

			return box.intersectsPlane( this );

		}

		intersectsSphere( sphere ) {

			return sphere.intersectsPlane( this );

		}

		coplanarPoint( target ) {

			return target.copy( this.normal ).multiplyScalar( - this.constant );

		}

		applyMatrix4( matrix, optionalNormalMatrix ) {

			const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix( matrix );

			const referencePoint = this.coplanarPoint( _vector1 ).applyMatrix4( matrix );

			const normal = this.normal.applyMatrix3( normalMatrix ).normalize();

			this.constant = - referencePoint.dot( normal );

			return this;

		}

		translate( offset ) {

			this.constant -= offset.dot( this.normal );

			return this;

		}

		equals( plane ) {

			return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

		}

		clone() {

			return new this.constructor().copy( this );

		}

	}

	class DepthTexture extends Texture {

		constructor( width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format ) {

			format = format !== undefined ? format : DepthFormat;

			if ( format !== DepthFormat && format !== DepthStencilFormat ) {

				throw new Error( 'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat' );

			}

			if ( type === undefined && format === DepthFormat ) type = UnsignedIntType;
			if ( type === undefined && format === DepthStencilFormat ) type = UnsignedInt248Type;

			super( null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

			this.isDepthTexture = true;

			this.image = { width: width, height: height };

			this.magFilter = magFilter !== undefined ? magFilter : NearestFilter;
			this.minFilter = minFilter !== undefined ? minFilter : NearestFilter;

			this.flipY = false;
			this.generateMipmaps = false;

			this.compareFunction = null;

		}


		copy( source ) {

			super.copy( source );

			this.compareFunction = source.compareFunction;

			return this;

		}

		toJSON( meta ) {

			const data = super.toJSON( meta );

			if ( this.compareFunction !== null ) data.compareFunction = this.compareFunction;

			return data;

		}

	}

	const emptyShadowTexture = /*@__PURE__*/ new DepthTexture( 1, 1 );
	emptyShadowTexture.compareFunction = LessEqualCompare;

	/**
	 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
	 *
	 * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
	 * The azimuthal angle (theta) is measured from the positive z-axis.
	 */


	class Spherical {

		constructor( radius = 1, phi = 0, theta = 0 ) {

			this.radius = radius;
			this.phi = phi; // polar angle
			this.theta = theta; // azimuthal angle

			return this;

		}

		set( radius, phi, theta ) {

			this.radius = radius;
			this.phi = phi;
			this.theta = theta;

			return this;

		}

		copy( other ) {

			this.radius = other.radius;
			this.phi = other.phi;
			this.theta = other.theta;

			return this;

		}

		// restrict phi to be between EPS and PI-EPS
		makeSafe() {

			const EPS = 0.000001;
			this.phi = Math.max( EPS, Math.min( Math.PI - EPS, this.phi ) );

			return this;

		}

		setFromVector3( v ) {

			return this.setFromCartesianCoords( v.x, v.y, v.z );

		}

		setFromCartesianCoords( x, y, z ) {

			this.radius = Math.sqrt( x * x + y * y + z * z );

			if ( this.radius === 0 ) {

				this.theta = 0;
				this.phi = 0;

			} else {

				this.theta = Math.atan2( x, z );
				this.phi = Math.acos( clamp( y / this.radius, - 1, 1 ) );

			}

			return this;

		}

		clone() {

			return new this.constructor().copy( this );

		}

	}

	if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

		__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
			revision: REVISION,
		} } ) );

	}

	if ( typeof window !== 'undefined' ) {

		if ( window.__THREE__ ) {

			console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

		} else {

			window.__THREE__ = REVISION;

		}

	}

	const _changeEvent$1 = { type: 'change' };

	class FlyControls extends EventDispatcher {

		constructor( object, domElement ) {

			super();

			this.object = object;
			this.domElement = domElement;

			// API

			// Set to false to disable this control
			this.enabled = true;

			this.movementSpeed = 1.0;
			this.rollSpeed = 0.005;

			this.dragToLook = false;
			this.autoForward = false;

			// disable default target object behavior

			// internals

			const scope = this;

			const EPS = 0.000001;

			const lastQuaternion = new Quaternion();
			const lastPosition = new Vector3();

			this.tmpQuaternion = new Quaternion();

			this.status = 0;

			this.moveState = { up: 0, down: 0, left: 0, right: 0, forward: 0, back: 0, pitchUp: 0, pitchDown: 0, yawLeft: 0, yawRight: 0, rollLeft: 0, rollRight: 0 };
			this.moveVector = new Vector3( 0, 0, 0 );
			this.rotationVector = new Vector3( 0, 0, 0 );

			this.keydown = function ( event ) {

				if ( event.altKey || this.enabled === false ) {

					return;

				}

				switch ( event.code ) {

					case 'ShiftLeft':
					case 'ShiftRight': this.movementSpeedMultiplier = .1; break;

					case 'KeyW': this.moveState.forward = 1; break;
					case 'KeyS': this.moveState.back = 1; break;

					case 'KeyA': this.moveState.left = 1; break;
					case 'KeyD': this.moveState.right = 1; break;

					case 'KeyR': this.moveState.up = 1; break;
					case 'KeyF': this.moveState.down = 1; break;

					case 'ArrowUp': this.moveState.pitchUp = 1; break;
					case 'ArrowDown': this.moveState.pitchDown = 1; break;

					case 'ArrowLeft': this.moveState.yawLeft = 1; break;
					case 'ArrowRight': this.moveState.yawRight = 1; break;

					case 'KeyQ': this.moveState.rollLeft = 1; break;
					case 'KeyE': this.moveState.rollRight = 1; break;

				}

				this.updateMovementVector();
				this.updateRotationVector();

			};

			this.keyup = function ( event ) {

				if ( this.enabled === false ) return;

				switch ( event.code ) {

					case 'ShiftLeft':
					case 'ShiftRight': this.movementSpeedMultiplier = 1; break;

					case 'KeyW': this.moveState.forward = 0; break;
					case 'KeyS': this.moveState.back = 0; break;

					case 'KeyA': this.moveState.left = 0; break;
					case 'KeyD': this.moveState.right = 0; break;

					case 'KeyR': this.moveState.up = 0; break;
					case 'KeyF': this.moveState.down = 0; break;

					case 'ArrowUp': this.moveState.pitchUp = 0; break;
					case 'ArrowDown': this.moveState.pitchDown = 0; break;

					case 'ArrowLeft': this.moveState.yawLeft = 0; break;
					case 'ArrowRight': this.moveState.yawRight = 0; break;

					case 'KeyQ': this.moveState.rollLeft = 0; break;
					case 'KeyE': this.moveState.rollRight = 0; break;

				}

				this.updateMovementVector();
				this.updateRotationVector();

			};

			this.pointerdown = function ( event ) {

				if ( this.enabled === false ) return;

				if ( this.dragToLook ) {

					this.status ++;

				} else {

					switch ( event.button ) {

						case 0: this.moveState.forward = 1; break;
						case 2: this.moveState.back = 1; break;

					}

					this.updateMovementVector();

				}

			};

			this.pointermove = function ( event ) {

				if ( this.enabled === false ) return;

				if ( ! this.dragToLook || this.status > 0 ) {

					const container = this.getContainerDimensions();
					const halfWidth = container.size[ 0 ] / 2;
					const halfHeight = container.size[ 1 ] / 2;

					this.moveState.yawLeft = - ( ( event.pageX - container.offset[ 0 ] ) - halfWidth ) / halfWidth;
					this.moveState.pitchDown = ( ( event.pageY - container.offset[ 1 ] ) - halfHeight ) / halfHeight;

					this.updateRotationVector();

				}

			};

			this.pointerup = function ( event ) {

				if ( this.enabled === false ) return;

				if ( this.dragToLook ) {

					this.status --;

					this.moveState.yawLeft = this.moveState.pitchDown = 0;

				} else {

					switch ( event.button ) {

						case 0: this.moveState.forward = 0; break;
						case 2: this.moveState.back = 0; break;

					}

					this.updateMovementVector();

				}

				this.updateRotationVector();

			};

			this.pointercancel = function () {

				if ( this.enabled === false ) return;

				if ( this.dragToLook ) {

					this.status = 0;

					this.moveState.yawLeft = this.moveState.pitchDown = 0;

				} else {

					this.moveState.forward = 0;
					this.moveState.back = 0;

					this.updateMovementVector();

				}

				this.updateRotationVector();

			};

			this.contextMenu = function ( event ) {

				if ( this.enabled === false ) return;

				event.preventDefault();

			};

			this.update = function ( delta ) {

				if ( this.enabled === false ) return;

				const moveMult = delta * scope.movementSpeed;
				const rotMult = delta * scope.rollSpeed;

				scope.object.translateX( scope.moveVector.x * moveMult );
				scope.object.translateY( scope.moveVector.y * moveMult );
				scope.object.translateZ( scope.moveVector.z * moveMult );

				scope.tmpQuaternion.set( scope.rotationVector.x * rotMult, scope.rotationVector.y * rotMult, scope.rotationVector.z * rotMult, 1 ).normalize();
				scope.object.quaternion.multiply( scope.tmpQuaternion );

				if (
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS
				) {

					scope.dispatchEvent( _changeEvent$1 );
					lastQuaternion.copy( scope.object.quaternion );
					lastPosition.copy( scope.object.position );

				}

			};

			this.updateMovementVector = function () {

				const forward = ( this.moveState.forward || ( this.autoForward && ! this.moveState.back ) ) ? 1 : 0;

				this.moveVector.x = ( - this.moveState.left + this.moveState.right );
				this.moveVector.y = ( - this.moveState.down + this.moveState.up );
				this.moveVector.z = ( - forward + this.moveState.back );

				//console.log( 'move:', [ this.moveVector.x, this.moveVector.y, this.moveVector.z ] );

			};

			this.updateRotationVector = function () {

				this.rotationVector.x = ( - this.moveState.pitchDown + this.moveState.pitchUp );
				this.rotationVector.y = ( - this.moveState.yawRight + this.moveState.yawLeft );
				this.rotationVector.z = ( - this.moveState.rollRight + this.moveState.rollLeft );

				//console.log( 'rotate:', [ this.rotationVector.x, this.rotationVector.y, this.rotationVector.z ] );

			};

			this.getContainerDimensions = function () {

				if ( this.domElement != document ) {

					return {
						size: [ this.domElement.offsetWidth, this.domElement.offsetHeight ],
						offset: [ this.domElement.offsetLeft, this.domElement.offsetTop ]
					};

				} else {

					return {
						size: [ window.innerWidth, window.innerHeight ],
						offset: [ 0, 0 ]
					};

				}

			};

			this.dispose = function () {

				this.domElement.removeEventListener( 'contextmenu', _contextmenu );
				this.domElement.removeEventListener( 'pointerdown', _pointerdown );
				this.domElement.removeEventListener( 'pointermove', _pointermove );
				this.domElement.removeEventListener( 'pointerup', _pointerup );
				this.domElement.removeEventListener( 'pointercancel', _pointercancel );

				window.removeEventListener( 'keydown', _keydown );
				window.removeEventListener( 'keyup', _keyup );

			};

			const _contextmenu = this.contextMenu.bind( this );
			const _pointermove = this.pointermove.bind( this );
			const _pointerdown = this.pointerdown.bind( this );
			const _pointerup = this.pointerup.bind( this );
			const _pointercancel = this.pointercancel.bind( this );
			const _keydown = this.keydown.bind( this );
			const _keyup = this.keyup.bind( this );

			this.domElement.addEventListener( 'contextmenu', _contextmenu );
			this.domElement.addEventListener( 'pointerdown', _pointerdown );
			this.domElement.addEventListener( 'pointermove', _pointermove );
			this.domElement.addEventListener( 'pointerup', _pointerup );
			this.domElement.addEventListener( 'pointercancel', _pointercancel );

			window.addEventListener( 'keydown', _keydown );
			window.addEventListener( 'keyup', _keyup );

			this.updateMovementVector();
			this.updateRotationVector();

		}

	}

	// OrbitControls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one-finger move
	//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
	//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

	const _changeEvent = { type: 'change' };
	const _startEvent = { type: 'start' };
	const _endEvent = { type: 'end' };
	const _ray = new Ray();
	const _plane = new Plane();
	const TILT_LIMIT = Math.cos( 70 * MathUtils.DEG2RAD );

	class OrbitControls extends EventDispatcher {

		constructor( object, domElement ) {

			super();

			this.object = object;
			this.domElement = domElement;
			this.domElement.style.touchAction = 'none'; // disable touch scroll

			// Set to false to disable this control
			this.enabled = true;

			// "target" sets the location of focus, where the object orbits around
			this.target = new Vector3();

			// Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
			this.cursor = new Vector3();

			// How far you can dolly in and out ( PerspectiveCamera only )
			this.minDistance = 0;
			this.maxDistance = Infinity;

			// How far you can zoom in and out ( OrthographicCamera only )
			this.minZoom = 0;
			this.maxZoom = Infinity;

			// Limit camera target within a spherical area around the cursor
			this.minTargetRadius = 0;
			this.maxTargetRadius = Infinity;

			// How far you can orbit vertically, upper and lower limits.
			// Range is 0 to Math.PI radians.
			this.minPolarAngle = 0; // radians
			this.maxPolarAngle = Math.PI; // radians

			// How far you can orbit horizontally, upper and lower limits.
			// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
			this.minAzimuthAngle = - Infinity; // radians
			this.maxAzimuthAngle = Infinity; // radians

			// Set to true to enable damping (inertia)
			// If damping is enabled, you must call controls.update() in your animation loop
			this.enableDamping = false;
			this.dampingFactor = 0.05;

			// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
			// Set to false to disable zooming
			this.enableZoom = true;
			this.zoomSpeed = 1.0;

			// Set to false to disable rotating
			this.enableRotate = true;
			this.rotateSpeed = 1.0;

			// Set to false to disable panning
			this.enablePan = true;
			this.panSpeed = 1.0;
			this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
			this.keyPanSpeed = 7.0;	// pixels moved per arrow key push
			this.zoomToCursor = false;

			// Set to true to automatically rotate around the target
			// If auto-rotate is enabled, you must call controls.update() in your animation loop
			this.autoRotate = false;
			this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

			// The four arrow keys
			this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

			// Mouse buttons
			this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };

			// Touch fingers
			this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

			// for reset
			this.target0 = this.target.clone();
			this.position0 = this.object.position.clone();
			this.zoom0 = this.object.zoom;

			// the target DOM element for key events
			this._domElementKeyEvents = null;

			//
			// public methods
			//

			this.getPolarAngle = function () {

				return spherical.phi;

			};

			this.getAzimuthalAngle = function () {

				return spherical.theta;

			};

			this.getDistance = function () {

				return this.object.position.distanceTo( this.target );

			};

			this.listenToKeyEvents = function ( domElement ) {

				domElement.addEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = domElement;

			};

			this.stopListenToKeyEvents = function () {

				this._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = null;

			};

			this.saveState = function () {

				scope.target0.copy( scope.target );
				scope.position0.copy( scope.object.position );
				scope.zoom0 = scope.object.zoom;

			};

			this.reset = function () {

				scope.target.copy( scope.target0 );
				scope.object.position.copy( scope.position0 );
				scope.object.zoom = scope.zoom0;

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent( _changeEvent );

				scope.update();

				state = STATE.NONE;

			};

			// this method is exposed, but perhaps it would be better if we can make it private...
			this.update = function () {

				const offset = new Vector3();

				// so camera.up is the orbit axis
				const quat = new Quaternion().setFromUnitVectors( object.up, new Vector3( 0, 1, 0 ) );
				const quatInverse = quat.clone().invert();

				const lastPosition = new Vector3();
				const lastQuaternion = new Quaternion();
				const lastTargetPosition = new Vector3();

				const twoPI = 2 * Math.PI;

				return function update( deltaTime = null ) {

					const position = scope.object.position;

					offset.copy( position ).sub( scope.target );

					// rotate offset to "y-axis-is-up" space
					offset.applyQuaternion( quat );

					// angle from z-axis around y-axis
					spherical.setFromVector3( offset );

					if ( scope.autoRotate && state === STATE.NONE ) {

						rotateLeft( getAutoRotationAngle( deltaTime ) );

					}

					if ( scope.enableDamping ) {

						spherical.theta += sphericalDelta.theta * scope.dampingFactor;
						spherical.phi += sphericalDelta.phi * scope.dampingFactor;

					} else {

						spherical.theta += sphericalDelta.theta;
						spherical.phi += sphericalDelta.phi;

					}

					// restrict theta to be between desired limits

					let min = scope.minAzimuthAngle;
					let max = scope.maxAzimuthAngle;

					if ( isFinite( min ) && isFinite( max ) ) {

						if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

						if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

						if ( min <= max ) {

							spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

						} else {

							spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
								Math.max( min, spherical.theta ) :
								Math.min( max, spherical.theta );

						}

					}

					// restrict phi to be between desired limits
					spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

					spherical.makeSafe();


					// move target to panned location

					if ( scope.enableDamping === true ) {

						scope.target.addScaledVector( panOffset, scope.dampingFactor );

					} else {

						scope.target.add( panOffset );

					}

					// Limit the target distance from the cursor to create a sphere around the center of interest
					scope.target.sub( scope.cursor );
					scope.target.clampLength( scope.minTargetRadius, scope.maxTargetRadius );
					scope.target.add( scope.cursor );

					// adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
					// we adjust zoom later in these cases
					if ( scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera ) {

						spherical.radius = clampDistance( spherical.radius );

					} else {

						spherical.radius = clampDistance( spherical.radius * scale );

					}

					offset.setFromSpherical( spherical );

					// rotate offset back to "camera-up-vector-is-up" space
					offset.applyQuaternion( quatInverse );

					position.copy( scope.target ).add( offset );

					scope.object.lookAt( scope.target );

					if ( scope.enableDamping === true ) {

						sphericalDelta.theta *= ( 1 - scope.dampingFactor );
						sphericalDelta.phi *= ( 1 - scope.dampingFactor );

						panOffset.multiplyScalar( 1 - scope.dampingFactor );

					} else {

						sphericalDelta.set( 0, 0, 0 );

						panOffset.set( 0, 0, 0 );

					}

					// adjust camera position
					let zoomChanged = false;
					if ( scope.zoomToCursor && performCursorZoom ) {

						let newRadius = null;
						if ( scope.object.isPerspectiveCamera ) {

							// move the camera down the pointer ray
							// this method avoids floating point error
							const prevRadius = offset.length();
							newRadius = clampDistance( prevRadius * scale );

							const radiusDelta = prevRadius - newRadius;
							scope.object.position.addScaledVector( dollyDirection, radiusDelta );
							scope.object.updateMatrixWorld();

						} else if ( scope.object.isOrthographicCamera ) {

							// adjust the ortho camera position based on zoom changes
							const mouseBefore = new Vector3( mouse.x, mouse.y, 0 );
							mouseBefore.unproject( scope.object );

							scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );
							scope.object.updateProjectionMatrix();
							zoomChanged = true;

							const mouseAfter = new Vector3( mouse.x, mouse.y, 0 );
							mouseAfter.unproject( scope.object );

							scope.object.position.sub( mouseAfter ).add( mouseBefore );
							scope.object.updateMatrixWorld();

							newRadius = offset.length();

						} else {

							console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.' );
							scope.zoomToCursor = false;

						}

						// handle the placement of the target
						if ( newRadius !== null ) {

							if ( this.screenSpacePanning ) {

								// position the orbit target in front of the new camera position
								scope.target.set( 0, 0, - 1 )
									.transformDirection( scope.object.matrix )
									.multiplyScalar( newRadius )
									.add( scope.object.position );

							} else {

								// get the ray and translation plane to compute target
								_ray.origin.copy( scope.object.position );
								_ray.direction.set( 0, 0, - 1 ).transformDirection( scope.object.matrix );

								// if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
								// extremely large values
								if ( Math.abs( scope.object.up.dot( _ray.direction ) ) < TILT_LIMIT ) {

									object.lookAt( scope.target );

								} else {

									_plane.setFromNormalAndCoplanarPoint( scope.object.up, scope.target );
									_ray.intersectPlane( _plane, scope.target );

								}

							}

						}

					} else if ( scope.object.isOrthographicCamera ) {

						scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );
						scope.object.updateProjectionMatrix();
						zoomChanged = true;

					}

					scale = 1;
					performCursorZoom = false;

					// update condition is:
					// min(camera displacement, camera rotation in radians)^2 > EPS
					// using small-angle approximation cos(x/2) = 1 - x^2 / 8

					if ( zoomChanged ||
						lastPosition.distanceToSquared( scope.object.position ) > EPS ||
						8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ||
						lastTargetPosition.distanceToSquared( scope.target ) > 0 ) {

						scope.dispatchEvent( _changeEvent );

						lastPosition.copy( scope.object.position );
						lastQuaternion.copy( scope.object.quaternion );
						lastTargetPosition.copy( scope.target );

						return true;

					}

					return false;

				};

			}();

			this.dispose = function () {

				scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

				scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
				scope.domElement.removeEventListener( 'pointercancel', onPointerUp );
				scope.domElement.removeEventListener( 'wheel', onMouseWheel );

				scope.domElement.removeEventListener( 'pointermove', onPointerMove );
				scope.domElement.removeEventListener( 'pointerup', onPointerUp );


				if ( scope._domElementKeyEvents !== null ) {

					scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
					scope._domElementKeyEvents = null;

				}

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

			};

			//
			// internals
			//

			const scope = this;

			const STATE = {
				NONE: - 1,
				ROTATE: 0,
				DOLLY: 1,
				PAN: 2,
				TOUCH_ROTATE: 3,
				TOUCH_PAN: 4,
				TOUCH_DOLLY_PAN: 5,
				TOUCH_DOLLY_ROTATE: 6
			};

			let state = STATE.NONE;

			const EPS = 0.000001;

			// current position in spherical coordinates
			const spherical = new Spherical();
			const sphericalDelta = new Spherical();

			let scale = 1;
			const panOffset = new Vector3();

			const rotateStart = new Vector2();
			const rotateEnd = new Vector2();
			const rotateDelta = new Vector2();

			const panStart = new Vector2();
			const panEnd = new Vector2();
			const panDelta = new Vector2();

			const dollyStart = new Vector2();
			const dollyEnd = new Vector2();
			const dollyDelta = new Vector2();

			const dollyDirection = new Vector3();
			const mouse = new Vector2();
			let performCursorZoom = false;

			const pointers = [];
			const pointerPositions = {};

			function getAutoRotationAngle( deltaTime ) {

				if ( deltaTime !== null ) {

					return ( 2 * Math.PI / 60 * scope.autoRotateSpeed ) * deltaTime;

				} else {

					return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

				}

			}

			function getZoomScale( delta ) {

				const normalized_delta = Math.abs( delta ) / ( 100 * ( window.devicePixelRatio | 0 ) );
				return Math.pow( 0.95, scope.zoomSpeed * normalized_delta );

			}

			function rotateLeft( angle ) {

				sphericalDelta.theta -= angle;

			}

			function rotateUp( angle ) {

				sphericalDelta.phi -= angle;

			}

			const panLeft = function () {

				const v = new Vector3();

				return function panLeft( distance, objectMatrix ) {

					v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
					v.multiplyScalar( - distance );

					panOffset.add( v );

				};

			}();

			const panUp = function () {

				const v = new Vector3();

				return function panUp( distance, objectMatrix ) {

					if ( scope.screenSpacePanning === true ) {

						v.setFromMatrixColumn( objectMatrix, 1 );

					} else {

						v.setFromMatrixColumn( objectMatrix, 0 );
						v.crossVectors( scope.object.up, v );

					}

					v.multiplyScalar( distance );

					panOffset.add( v );

				};

			}();

			// deltaX and deltaY are in pixels; right and down are positive
			const pan = function () {

				const offset = new Vector3();

				return function pan( deltaX, deltaY ) {

					const element = scope.domElement;

					if ( scope.object.isPerspectiveCamera ) {

						// perspective
						const position = scope.object.position;
						offset.copy( position ).sub( scope.target );
						let targetDistance = offset.length();

						// half of the fov is center to top of screen
						targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

						// we use only clientHeight here so aspect ratio does not distort speed
						panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
						panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

					} else if ( scope.object.isOrthographicCamera ) {

						// orthographic
						panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
						panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

					} else {

						// camera neither orthographic nor perspective
						console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
						scope.enablePan = false;

					}

				};

			}();

			function dollyOut( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale /= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function dollyIn( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale *= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function updateZoomParameters( x, y ) {

				if ( ! scope.zoomToCursor ) {

					return;

				}

				performCursorZoom = true;

				const rect = scope.domElement.getBoundingClientRect();
				const dx = x - rect.left;
				const dy = y - rect.top;
				const w = rect.width;
				const h = rect.height;

				mouse.x = ( dx / w ) * 2 - 1;
				mouse.y = - ( dy / h ) * 2 + 1;

				dollyDirection.set( mouse.x, mouse.y, 1 ).unproject( scope.object ).sub( scope.object.position ).normalize();

			}

			function clampDistance( dist ) {

				return Math.max( scope.minDistance, Math.min( scope.maxDistance, dist ) );

			}

			//
			// event callbacks - update the object state
			//

			function handleMouseDownRotate( event ) {

				rotateStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownDolly( event ) {

				updateZoomParameters( event.clientX, event.clientX );
				dollyStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownPan( event ) {

				panStart.set( event.clientX, event.clientY );

			}

			function handleMouseMoveRotate( event ) {

				rotateEnd.set( event.clientX, event.clientY );

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

				scope.update();

			}

			function handleMouseMoveDolly( event ) {

				dollyEnd.set( event.clientX, event.clientY );

				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					dollyOut( getZoomScale( dollyDelta.y ) );

				} else if ( dollyDelta.y < 0 ) {

					dollyIn( getZoomScale( dollyDelta.y ) );

				}

				dollyStart.copy( dollyEnd );

				scope.update();

			}

			function handleMouseMovePan( event ) {

				panEnd.set( event.clientX, event.clientY );

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

				scope.update();

			}

			function handleMouseWheel( event ) {

				updateZoomParameters( event.clientX, event.clientY );

				if ( event.deltaY < 0 ) {

					dollyIn( getZoomScale( event.deltaY ) );

				} else if ( event.deltaY > 0 ) {

					dollyOut( getZoomScale( event.deltaY ) );

				}

				scope.update();

			}

			function handleKeyDown( event ) {

				let needsUpdate = false;

				switch ( event.code ) {

					case scope.keys.UP:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.BOTTOM:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, - scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.LEFT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

					case scope.keys.RIGHT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( - scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

				}

				if ( needsUpdate ) {

					// prevent the browser from scrolling on cursor keys
					event.preventDefault();

					scope.update();

				}


			}

			function handleTouchStartRotate( event ) {

				if ( pointers.length === 1 ) {

					rotateStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateStart.set( x, y );

				}

			}

			function handleTouchStartPan( event ) {

				if ( pointers.length === 1 ) {

					panStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panStart.set( x, y );

				}

			}

			function handleTouchStartDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyStart.set( 0, distance );

			}

			function handleTouchStartDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enablePan ) handleTouchStartPan( event );

			}

			function handleTouchStartDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enableRotate ) handleTouchStartRotate( event );

			}

			function handleTouchMoveRotate( event ) {

				if ( pointers.length == 1 ) {

					rotateEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateEnd.set( x, y );

				}

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

			}

			function handleTouchMovePan( event ) {

				if ( pointers.length === 1 ) {

					panEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panEnd.set( x, y );

				}

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

			}

			function handleTouchMoveDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );

				dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

				dollyOut( dollyDelta.y );

				dollyStart.copy( dollyEnd );

				const centerX = ( event.pageX + position.x ) * 0.5;
				const centerY = ( event.pageY + position.y ) * 0.5;

				updateZoomParameters( centerX, centerY );

			}

			function handleTouchMoveDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enablePan ) handleTouchMovePan( event );

			}

			function handleTouchMoveDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enableRotate ) handleTouchMoveRotate( event );

			}

			//
			// event handlers - FSM: listen for events and reset state
			//

			function onPointerDown( event ) {

				if ( scope.enabled === false ) return;

				if ( pointers.length === 0 ) {

					scope.domElement.setPointerCapture( event.pointerId );

					scope.domElement.addEventListener( 'pointermove', onPointerMove );
					scope.domElement.addEventListener( 'pointerup', onPointerUp );

				}

				//

				addPointer( event );

				if ( event.pointerType === 'touch' ) {

					onTouchStart( event );

				} else {

					onMouseDown( event );

				}

			}

			function onPointerMove( event ) {

				if ( scope.enabled === false ) return;

				if ( event.pointerType === 'touch' ) {

					onTouchMove( event );

				} else {

					onMouseMove( event );

				}

			}

			function onPointerUp( event ) {

				removePointer( event );

				if ( pointers.length === 0 ) {

					scope.domElement.releasePointerCapture( event.pointerId );

					scope.domElement.removeEventListener( 'pointermove', onPointerMove );
					scope.domElement.removeEventListener( 'pointerup', onPointerUp );

				}

				scope.dispatchEvent( _endEvent );

				state = STATE.NONE;

			}

			function onMouseDown( event ) {

				let mouseAction;

				switch ( event.button ) {

					case 0:

						mouseAction = scope.mouseButtons.LEFT;
						break;

					case 1:

						mouseAction = scope.mouseButtons.MIDDLE;
						break;

					case 2:

						mouseAction = scope.mouseButtons.RIGHT;
						break;

					default:

						mouseAction = - 1;

				}

				switch ( mouseAction ) {

					case MOUSE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseDownDolly( event );

						state = STATE.DOLLY;

						break;

					case MOUSE.ROTATE:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						} else {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						}

						break;

					case MOUSE.PAN:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						} else {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onMouseMove( event ) {

				switch ( state ) {

					case STATE.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleMouseMoveRotate( event );

						break;

					case STATE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseMoveDolly( event );

						break;

					case STATE.PAN:

						if ( scope.enablePan === false ) return;

						handleMouseMovePan( event );

						break;

				}

			}

			function onMouseWheel( event ) {

				if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

				event.preventDefault();

				scope.dispatchEvent( _startEvent );

				handleMouseWheel( event );

				scope.dispatchEvent( _endEvent );

			}

			function onKeyDown( event ) {

				if ( scope.enabled === false || scope.enablePan === false ) return;

				handleKeyDown( event );

			}

			function onTouchStart( event ) {

				trackPointer( event );

				switch ( pointers.length ) {

					case 1:

						switch ( scope.touches.ONE ) {

							case TOUCH.ROTATE:

								if ( scope.enableRotate === false ) return;

								handleTouchStartRotate( event );

								state = STATE.TOUCH_ROTATE;

								break;

							case TOUCH.PAN:

								if ( scope.enablePan === false ) return;

								handleTouchStartPan( event );

								state = STATE.TOUCH_PAN;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					case 2:

						switch ( scope.touches.TWO ) {

							case TOUCH.DOLLY_PAN:

								if ( scope.enableZoom === false && scope.enablePan === false ) return;

								handleTouchStartDollyPan( event );

								state = STATE.TOUCH_DOLLY_PAN;

								break;

							case TOUCH.DOLLY_ROTATE:

								if ( scope.enableZoom === false && scope.enableRotate === false ) return;

								handleTouchStartDollyRotate( event );

								state = STATE.TOUCH_DOLLY_ROTATE;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onTouchMove( event ) {

				trackPointer( event );

				switch ( state ) {

					case STATE.TOUCH_ROTATE:

						if ( scope.enableRotate === false ) return;

						handleTouchMoveRotate( event );

						scope.update();

						break;

					case STATE.TOUCH_PAN:

						if ( scope.enablePan === false ) return;

						handleTouchMovePan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_PAN:

						if ( scope.enableZoom === false && scope.enablePan === false ) return;

						handleTouchMoveDollyPan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_ROTATE:

						if ( scope.enableZoom === false && scope.enableRotate === false ) return;

						handleTouchMoveDollyRotate( event );

						scope.update();

						break;

					default:

						state = STATE.NONE;

				}

			}

			function onContextMenu( event ) {

				if ( scope.enabled === false ) return;

				event.preventDefault();

			}

			function addPointer( event ) {

				pointers.push( event.pointerId );

			}

			function removePointer( event ) {

				delete pointerPositions[ event.pointerId ];

				for ( let i = 0; i < pointers.length; i ++ ) {

					if ( pointers[ i ] == event.pointerId ) {

						pointers.splice( i, 1 );
						return;

					}

				}

			}

			function trackPointer( event ) {

				let position = pointerPositions[ event.pointerId ];

				if ( position === undefined ) {

					position = new Vector2();
					pointerPositions[ event.pointerId ] = position;

				}

				position.set( event.pageX, event.pageY );

			}

			function getSecondPointerPosition( event ) {

				const pointerId = ( event.pointerId === pointers[ 0 ] ) ? pointers[ 1 ] : pointers[ 0 ];

				return pointerPositions[ pointerId ];

			}

			//

			scope.domElement.addEventListener( 'contextmenu', onContextMenu );

			scope.domElement.addEventListener( 'pointerdown', onPointerDown );
			scope.domElement.addEventListener( 'pointercancel', onPointerUp );
			scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

			// force an update at start

			this.update();

		}

	}

	// MapControls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
	//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
	//    Pan - left mouse, or arrow keys / touch: one-finger move

	class MapControls extends OrbitControls {

		constructor( object, domElement ) {

			super( object, domElement );

			this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

			this.mouseButtons = { LEFT: MOUSE.PAN, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.ROTATE };

			this.touches = { ONE: TOUCH.PAN, TWO: TOUCH.DOLLY_ROTATE };

		}

	}

	const CANVAS_CLEAR_COLOR = 0x342920;
	const FOG_LENGTH = 5000;

	class AppRenderer {
	  constructor(stats) {
	    this.localReader = undefined;
	    this._threeContext = {};
	    this._mapMeshes = [];
	    this._mapContext = undefined;
	    this._renderOptions = undefined;
	    this.stats = stats;

	    // Defaults
	    this.fog = 25000;
	    this.movementSpeed = 10000;
	    this.lightIntensity = 1.25;
	    this.loadedMapID = undefined;
	    this.controllerType = "fly";

	    this.webGLRendererOptions = {
	      sortObjects: false,
	      logarithmicDepthBuffer: true,
	      stencil: false,
	      premultipliedAlpha: false,
	      antialiasing: true,
	    };
	  }

	  /** PUBLIC methods */
	  createLocalReader(file, callback) {
	    this.localReader = T3D.getLocalReader(file, callback, "./static/t3dworker.js");
	  }

	  getMapList() {
	    return this.localReader.getMapList();
	  }

	  scanArchiveForMaps() {
	    return this.localReader.readFileList();
	  }

	  loadMap(mapId, renderOptions, callback) {
	    if (this.loadedMapID) {
	      this.cleanupMap();
	    }

	    this.loadedMapID = mapId;
	    this._renderOptions = renderOptions;

	    const renderers = [
	      { renderClass: T3D.EnvironmentRenderer, settings: {} },
	      { renderClass: T3D.TerrainRenderer, settings: {} },
	    ];

	    if (renderOptions.zone) {
	      renderers.push({ renderClass: T3D.ZoneRenderer, settings: { visible: true } });
	    }
	    if (renderOptions.props) {
	      renderers.push({ renderClass: T3D.PropertiesRenderer, settings: { visible: true } });
	    }
	    if (renderOptions.collisions) {
	      renderers.push({ renderClass: T3D.HavokRenderer, settings: { visible: true } });
	    }

	    T3D.renderMapContentsAsync(this.localReader, this.loadedMapID, renderers, (context) => {
	      this._loadMapCallback(context, renderOptions, callback);
	    });
	  }

	  setFogDistance(value) {
	    this.fog = value;
	    if (this._threeContext.scene && this._threeContext.scene.fog) {
	      this._threeContext.scene.fog.near = this.fog;
	      this._threeContext.scene.fog.far = this.fog + FOG_LENGTH;
	    }
	    if (this._threeContext.camera) {
	      this._threeContext.camera.far = this.fog + FOG_LENGTH;
	      this._threeContext.camera.updateProjectionMatrix();
	    }
	  }

	  setMovementSpeed(value) {
	    this.movementSpeed = value;
	    if (this._threeContext.controls) {
	      this._threeContext.controls.movementSpeed = value;
	    }
	  }

	  move(x, y, z) {
	    if (x) {
	      this._threeContext.controls.object.position.x = x;
	    }
	    if (y) {
	      this._threeContext.controls.object.position.y = y;
	    }
	    if (z) {
	      this._threeContext.controls.object.position.z = z;
	    }
	  }

	  rotate(rx, ry, rz) {
	    if (rx) {
	      this._threeContext.controls.object.rotation.x = rx;
	    }
	    if (ry) {
	      this._threeContext.controls.object.rotation.y = ry;
	    }
	    if (rz) {
	      this._threeContext.controls.object.rotation.z = rz;
	    }
	  }

	  setLightIntensity(value) {
	    this.lightIntensity = value;
	    if (this._threeContext.sceneLights) {
	      for (const light of this._threeContext.sceneLights) {
	        light.intensity = value;
	      }
	    }
	  }

	  takeScreenShot() {
	    const newWindow = window.open("", "");
	    newWindow.document.title = "T3D Explorer Screenshot";
	    const image = new Image();

	    this._threeContext.renderer.clear();
	    // Render first skyCamera
	    this._threeContext.renderer.render(this._threeContext.skyScene, this._threeContext.skyCamera);
	    this._threeContext.renderer.render(this._threeContext.scene, this._threeContext.camera);
	    image.src = this._threeContext.renderer.domElement.toDataURL();
	    newWindow.document.body.appendChild(image);
	  }

	  setupController(controllerType = "fly") {
	    if (this._threeContext.controls) {
	      this._threeContext.controls.dispose();
	    }

	    if (controllerType === "orbital") {
	      this._threeContext.controls = new MapControls(this._threeContext.camera, this._threeContext.renderer.domElement);
	    } else if (controllerType === "fly") {
	      this._threeContext.controls = new FlyControls(this._threeContext.camera, this._threeContext.renderer.domElement);

	      this._threeContext.controls.movementSpeed = this.movementSpeed;
	      this._threeContext.controls.rollSpeed = Math.PI / 6;
	      this._threeContext.controls.autoForward = false;
	      this._threeContext.controls.dragToLook = true;
	    } else {
	      throw new Error("Invalid controller type");
	    }

	    this.controllerType = controllerType;
	  }

	  cleanupMap() {
	    this._mapContext = undefined;
	    this._renderOptions = undefined;
	    this.loadedMapID = undefined;
	    for (const mesh of this._mapMeshes) {
	      this._threeContext.scene.remove(mesh);
	    }
	    for (const skyBox of this._threeContext.skyScene.children) {
	      this._threeContext.skyScene.remove(skyBox);
	    }
	    this._mapMeshes = [];
	  }

	  setupScene() {
	    const { _threeContext: context } = this;

	    context.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
	    context.skyCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
	    context.scene = new THREE.Scene();
	    context.skyScene = new THREE.Scene();
	    context.clock = new THREE.Clock();

	    context.ambientLight = new THREE.AmbientLight(0x555555);
	    context.scene.add(context.ambientLight);

	    context.sceneLights = [
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	    ];
	    context.sceneLights[0].position.set(0, 0, 1);
	    context.sceneLights[0].position.set(0, 1, 0);
	    context.sceneLights[0].position.set(1, 0, 0);
	    for (const light of context.sceneLights) {
	      context.scene.add(light);
	    }

	    context.scene.fog = new THREE.Fog(0xffffff, this.fog, this.fog + FOG_LENGTH);
	    context.camera.far = this.fog + FOG_LENGTH;
	    context.camera.updateProjectionMatrix();

	    this.setupWebGLRenderer(true);
	    this.setupController();
	    this._render();
	  }

	  onWindowResize() {
	    const { _threeContext: context } = this;
	    if (context.renderer && context.camera && context.skyCamera) {
	      context.camera.aspect = window.innerWidth / window.innerHeight;
	      context.camera.updateProjectionMatrix();
	      context.renderer.setSize(window.innerWidth, window.innerHeight);
	      context.skyCamera.aspect = window.innerWidth / window.innerHeight;
	      context.skyCamera.updateProjectionMatrix();
	    }
	  }

	  // This function is safe to be called whenever the active webgl context is not rendering on screen
	  setupWebGLRenderer(hidden) {
	    const { _threeContext: context } = this;
	    const oldRenderer = context.renderer;
	    context.renderer = new THREE.WebGLRenderer(this.webGLRendererOptions);
	    context.renderer.autoClear = false;
	    context.renderer.setSize(window.innerWidth, window.innerHeight);
	    context.renderer.setClearColor(CANVAS_CLEAR_COLOR);
	    if (hidden) {
	      $(context.renderer.domElement).hide();
	    }
	    if (oldRenderer) {
	      $(oldRenderer.domElement).remove();
	    }
	    $("#explorer").append(context.renderer.domElement);
	  }

	  getUrlData() {
	    const controls = this._threeContext.controls;
	    const pos = controls.object.position;
	    const rot = controls.object.rotation;
	    return {
	      map: this.loadedMapID,
	      x: Math.round(pos.x * 1000) / 1000,
	      y: Math.round(pos.y * 1000) / 1000,
	      z: Math.round(pos.z * 1000) / 1000,
	      rx: Math.round(rot.x * 10000) / 10000,
	      ry: Math.round(rot.y * 10000) / 10000,
	      rz: Math.round(rot.z * 10000) / 10000,
	      cameraType: this.controllerType,
	      loadZone: !!this._renderOptions.zone,
	      loadProp: !!this._renderOptions.props,
	      showHavok: !!this._renderOptions.collisions,
	      fog: this.fog,
	    };
	  }

	  /** PRIVATE methods */
	  _render() {
	    this.stats.update();
	    window.requestAnimationFrame(() => this._render());
	    this._threeContext.controls.update(this._threeContext.clock.getDelta());

	    this._threeContext.renderer.clear();

	    // Render first skyCamera
	    this._threeContext.skyCamera.quaternion.copy(this._threeContext.camera.quaternion);
	    this._threeContext.renderer.render(this._threeContext.skyScene, this._threeContext.skyCamera);

	    this._threeContext.renderer.render(this._threeContext.scene, this._threeContext.camera);
	  }

	  _loadMapCallback(context, renderOptions, externalCallback) {
	    this._mapContext = context;

	    // Add all the data from the context to the threejs scene
	    for (const tile of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
	      this._threeContext.scene.add(tile);
	      this._mapMeshes.push(tile);
	    }
	    const water = T3D.getContextValue(context, T3D.TerrainRenderer, "water");
	    this._threeContext.scene.add(water);
	    this._mapMeshes.push(water);

	    const skyBox = T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox");
	    this._threeContext.skyScene.add(skyBox);
	    const hazeColor = T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor");
	    if (hazeColor) {
	      this._threeContext.renderer.setClearColor(
	        new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255)
	      );
	    }

	    if (renderOptions.zone) {
	      for (const zoneModel of T3D.getContextValue(context, T3D.ZoneRenderer, "meshes")) {
	        this._threeContext.scene.add(zoneModel);
	        this._mapMeshes.push(zoneModel);
	      }
	    }
	    if (renderOptions.props) {
	      for (const propModel of T3D.getContextValue(context, T3D.PropertiesRenderer, "meshes")) {
	        this._threeContext.scene.add(propModel);
	        this._mapMeshes.push(propModel);
	      }
	    }
	    if (renderOptions.collisions) {
	      for (const collModel of T3D.getContextValue(context, T3D.HavokRenderer, "meshes")) {
	        this._threeContext.scene.add(collModel);
	        this._mapMeshes.push(collModel);
	      }
	    }

	    // Move camera
	    const bounds = T3D.getContextValue(context, T3D.TerrainRenderer, "bounds");
	    this._resetCameraLocation(bounds);

	    // If set fog is too small to see the map we increase it
	    if (this.fog < bounds.y2 * 1.5) {
	      this.setFogDistance(bounds.y2 * 2);
	    }

	    return externalCallback();
	  }

	  _resetCameraLocation(bounds) {
	    if (this.controllerType === "fly") {
	      this._threeContext.camera.position.x = 0;
	      this._threeContext.camera.position.y = bounds ? bounds.y2 : 0;
	      this._threeContext.camera.position.z = 0;
	      this._threeContext.camera.rotation.x = (-90 * Math.PI) / 180;
	    } else {
	      this._threeContext.camera.position.x = 0;
	      this._threeContext.camera.position.y = bounds ? bounds.y2 : 0;
	      this._threeContext.camera.position.z = 0;
	    }
	  }
	}

	class UI {
	  constructor(appRenderer) {
	    this.appRenderer = appRenderer;

	    this.showingProgress = false;
	    this.archiveLoaded = false;
	    this.mapFileList = [];
	    this.autoLoad = undefined;
	    this.shouldUpdateUrl = false;

	    this.urlUpdateInterval = setInterval(() => this.updateUrl(), 100);
	    this.lastUrlData = "";
	  }

	  init() {
	    this.appRenderer.setupScene();

	    T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = (name, value) => {
	      console.log(name, value);
	      if (this.showingProgress) {
	        $("#loadingName").text(name);
	        $("#loadingValue").text(`${value}%`);
	      }
	    };

	    T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (error) => {
	      console.error(error);
	      // If we receive an error before the archive is loaded that means that parsing the archive failed
	      if (!this.archiveLoaded) {
	        $("#intro").fadeIn();
	      }
	    };

	    this.setupIntro();
	    this.setupMapChoice();
	    this.setupMapExplorer();

	    this.appRenderer.setMovementSpeed(parseInt($("#mvntSpeedRange").val(), 10));
	    this.appRenderer.setFogDistance(parseInt($("#fogRange").val(), 10));
	    this.appRenderer.renderHook = (data) => this.updateUrl(data);

	    $("canvas").on("wheel", (event) => this.onMouseWheel(event));

	    this.checkAutoLoad();
	  }

	  /*
	   * SETUPS
	   */
	  setupIntro() {
	    $("#filePickerInput").on("change", (event) => this.onFileSelected(event));
	    $("#filePickerButton").on("click", () => $("#filePickerInput").trigger("click"));
	  }
	  setupMapChoice() {
	    $("#categorySelect").on("change", () => this.genMapSelect());
	    $("#mapLoadButton").on("click", () => this.onMapLoadClick());
	    $("#scanMapLink").on("click", () => this.onScanMapClick());
	  }
	  setupMapExplorer() {
	    $("#switchControllerType").on("click", () => {
	      if (this.appRenderer.controllerType === "fly") {
	        this.appRenderer.setupController("orbital");
	      } else {
	        this.appRenderer.setupController("fly");
	      }
	    });
	    $("#goToMapSelectButton").on("click", () => this.onBackToMapSelect());
	    $("#takeScreenshot").on("click", () => this.appRenderer.takeScreenShot());
	    $("#mvntSpeedRange").on("change", (event) => this.appRenderer.setMovementSpeed(event.target.valueAsNumber));
	    $("#fogRange").on("change", (event) => this.appRenderer.setFogDistance(event.target.valueAsNumber));

	    window.addEventListener("resize", () => this.appRenderer.onWindowResize());
	  }

	  /*
	   * HANDLERS
	   */
	  onFileSelected(event) {
	    const file = event.target.files[0];
	    $("#intro").slideUp(() => {
	      this.appRenderer.createLocalReader(file, async () => {
	        this.archiveLoaded = true;
	        this.mapFileList = await this.appRenderer.getMapList();
	        this.fillMapChoiceSelect();
	        // User might enter an non-existant ID so we only trigger autoload if we find the map
	        if (this.autoLoad && this.mapFileList.find((i) => i.baseId === this.autoLoad.map)) {
	          return this.onAutoLoad();
	        }
	        $("#choose-map").fadeIn();
	      });
	    });
	  }

	  onAutoLoad() {
	    const mapId = this.autoLoad.map;
	    const renderOptions = {
	      zone: this.autoLoad.loadZone === undefined ? false : this.autoLoad.loadZone,
	      props: this.autoLoad.loadProp === undefined ? true : this.autoLoad.loadProp,
	      collisions: this.autoLoad.showHavok === undefined ? false : this.autoLoad.showHavok,
	    };
	    this.showingProgress = true;
	    $("#loading-ui").fadeIn();
	    this.appRenderer.loadMap(mapId, renderOptions, () => {
	      this.appRenderer.setupController(this.autoLoad.cameraType || "orbital");
	      this.appRenderer.move(this.autoLoad.x, this.autoLoad.y, this.autoLoad.z);
	      this.appRenderer.rotate(this.autoLoad.rx, this.autoLoad.ry, this.autoLoad.rz);
	      // Don't forget to cleanup autoLoad, if not it might break map choice UI
	      this.autoLoad = undefined;
	      this.onMapLoaded();
	    });
	  }

	  onMapLoadClick() {
	    // Anti aliasing option can only be enabled when creating the webgl context
	    // So we update that first if needed
	    const aaEnabled = $("#enableAA").is(":checked");
	    if (this.appRenderer.webGLRendererOptions.antialiasing !== aaEnabled) {
	      this.appRenderer.webGLRendererOptions.antialiasing = aaEnabled;
	      this.appRenderer.setupWebGLRenderer(true);
	    }

	    const mapId = $("#mapSelect").val();
	    const renderOptions = {
	      zone: $("#loadZone").is(":checked"),
	      props: $("#loadProps").is(":checked"),
	      collisions: $("#loadColl").is(":checked"),
	    };
	    $("#choose-map").slideUp(() => {
	      this.showingProgress = true;
	      $("#loading-ui").fadeIn();
	    });
	    this.appRenderer.loadMap(mapId, renderOptions, () => {
	      // Reset the position of the camera if we already loaded a previous map
	      this.appRenderer.setupController("orbital");
	      this.onMapLoaded();
	    });
	  }

	  onMapLoaded() {
	    this.showingProgress = false;
	    $("#loading-ui").slideUp(() => {
	      $("canvas").fadeIn();
	      $("#controls").fadeIn();
	      $("#loadingName").text("Loading...");
	      $("#loadingValue").text("");
	    });
	    // Sync the input ranges with their value in the appRenderer
	    $("#fogRange").val(this.appRenderer.fog);
	    $("#mvntSpeedRange").val(this.appRenderer.movementSpeed);
	    this.shouldUpdateUrl = true;
	  }

	  onBackToMapSelect() {
	    $("#controls").slideUp(() => {
	      $("canvas").hide(0);
	      $("#choose-map").fadeIn();
	      this.appRenderer.cleanupMap();
	      this.updateUrl(true);
	      this.shouldUpdateUrl = false;
	    });
	  }

	  onFileScanDone() {
	    this.showingProgress = false;
	    $("#loading-ui").slideUp(() => {
	      $("#choose-map").fadeIn();
	      $("#loadingName").text("Loading...");
	      $("#loadingValue").text("");
	    });
	  }

	  onScanMapClick() {
	    $("#choose-map").slideUp(() => {
	      $("#loadingName").text("Scanning...");
	      this.showingProgress = true;
	      $("#loading-ui").fadeIn(async () => {
	        await this.appRenderer.scanArchiveForMaps();
	        this.mapFileList = await this.appRenderer.getMapList();
	        this.fillMapChoiceSelect();
	        this.onFileScanDone();
	      });
	    });
	  }

	  onMouseWheel(event) {
	    const newSpeed =
	      event.originalEvent.deltaY < 0
	        ? Math.min(this.appRenderer.movementSpeed + 100, 10000)
	        : Math.max(this.appRenderer.movementSpeed - 100, 500);

	    this.appRenderer.setMovementSpeed(newSpeed);
	    $("#mvntSpeedRange").val(newSpeed);
	  }

	  /* UTILS */

	  /**
	   * This function generates the content of the map selector
	   * and NOT the category one
	   */
	  genMapSelect() {
	    const category = $("#categorySelect").val();
	    $("#mapSelect").empty();
	    for (const map of this.mapFileList) {
	      if (map.category === category) {
	        const opt = document.createElement("option");
	        opt.value = map.baseId;
	        opt.innerHTML = map.name;
	        $("#mapSelect").append(opt);
	      }
	    }
	  }

	  /**
	   * This function generates the content of the category selector
	   * and NOT the map one
	   */
	  fillMapChoiceSelect() {
	    const categoryList = this.mapFileList
	      .sort((a, b) => a.categoryIndex - b.categoryIndex)
	      .reduce((categories, map) => {
	        if (categories.indexOf(map.category) === -1) {
	          categories.push(map.category);
	        }
	        return categories;
	      }, []);
	    for (const category of categoryList) {
	      const opt = document.createElement("option");
	      opt.value = category;
	      opt.innerHTML = category;
	      $("#categorySelect").append(opt);
	    }
	    this.genMapSelect();
	  }

	  updateUrl(shouldClear = false) {
	    if (this.shouldUpdateUrl) {
	      if (shouldClear) {
	        window.location.hash = "";
	      } else {
	        const urlData = $.param(this.appRenderer.getUrlData());
	        if (this.lastUrlData !== urlData) {
	          window.location.hash = urlData;
	          this.lastUrlData = urlData;
	        }
	      }
	    }
	  }

	  checkAutoLoad() {
	    const urlData = getParsedUrl();
	    if (urlData.map) {
	      this.autoLoad = urlData;
	    }
	  }
	}

	function getParsedUrl() {
	  const data = deparam(window.location.hash.slice(1));
	  data.map = data.map ? parseInt(data.map) : undefined;
	  data.x = data.x ? parseInt(data.x) : undefined;
	  data.y = data.y ? parseInt(data.y) : undefined;
	  data.z = data.z ? parseInt(data.z) : undefined;
	  data.rx = data.rx ? parseFloat(data.rx) : undefined;
	  data.ry = data.ry ? parseFloat(data.ry) : undefined;
	  data.rz = data.rz ? parseFloat(data.rz) : undefined;
	  data.loadZone = data.loadZone ? data.loadZone === "true" : undefined;
	  data.loadProp = data.loadProp ? data.loadProp === "true" : undefined;
	  data.showHavok = data.showHavok ? data.showHavok === "true" : undefined;
	  data.fog = data.fog ? parseInt(data.fog) : undefined;

	  // Backward compatibility with Tyria3DApp
	  if (data.pitch && data.yaw) {
	    const pitch = parseFloat(data.pitch);
	    const yaw = parseFloat(data.yaw);
	    // convert pitch yaw to xyz rotations:
	    data.rx = -Math.cos(yaw) * Math.cos(pitch);
	    data.ry = Math.sin(yaw) * Math.cos(pitch);
	    data.rz = -Math.sin(pitch);
	  }

	  return data;
	}

	function deparam(queryString) {
	  try {
	    const parameters = {};
	    const chunks = queryString.split("&");
	    for (const chunk of chunks) {
	      const [key, value] = chunk.split("=");
	      parameters[decodeURIComponent(key)] = decodeURIComponent(value);
	    }
	    return parameters;
	  } catch (error) {
	    console.error(error);
	    return {};
	  }
	}

	const stats = new Stats();
	$("body").append(stats.domElement);
	$(stats.domElement).hide();
	stats.toggle = () => $(stats.domElement).toggle();

	const appRenderer = new AppRenderer(stats);
	const ui = new UI(appRenderer);

	ui.init();

	// Allow user to access appRenderer
	// This is not used by the app itself
	globalThis.appRenderer = appRenderer;
	globalThis.ui = ui;
	globalThis.stats = stats;

})();
//# sourceMappingURL=index.js.map
