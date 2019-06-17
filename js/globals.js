var renderer = new THREE.WebGLRenderer( { antialias: true } );
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );
scene.fog = new THREE.Fog( 0xf0f0f0, .5, 100 );

var alarm_clock = new THREE.Object3D();
alarm_clock.rotation.y = -Math.PI/2.;
var obj_controls = new THREE.ObjectControls( camera, renderer.domElement, alarm_clock);