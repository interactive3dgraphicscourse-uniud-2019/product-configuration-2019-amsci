var renderer = new THREE.WebGLRenderer( { antialias: true } );
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );
scene.fog = new THREE.Fog( 0xf0f0f0, .5, 100 );

var alarm_clock = new THREE.Object3D();
alarm_clock.rotation.y = .3;
//var obj_controls = new THREE.ObjectControls( camera, renderer.domElement, alarm_clock);
var controls = new THREE.OrbitControls( camera, renderer.domElement );

var loader = new THREE.CubeTextureLoader();
    loader.setPath( 'textures/MarriottMadisonWest/' );

    var textureCube = loader.load( [
        'posx.jpg', 'negx.jpg',
        'posy.jpg', 'negy.jpg',
        'posz.jpg', 'negz.jpg',
    ] );

scene.background = textureCube;
textureCube.minFilter = THREE.LinearMipMapLinearFilter;

var loader = new THREE.OBJLoader();
var v3_centre = new THREE.Vector3(2,1.2,.7);

function LoadMesh(geometry, material){
    var mesh = new THREE.Mesh( geometry, material );
    mesh.scale.multiplyScalar( 0.05 );
    mesh.position.add(v3_centre);
    alarm_clock.add( mesh );
    return mesh;
}

var case_mesh, bellR_mesh, bellL_mesh, clockFace_mesh;
loader.load( "models/clock_10.obj", function ( object ) {
    object.traverse( function ( child ) {
        if ( child instanceof THREE.Object3D  ) { //perché lo switch non funziona?
            if ( child.name=='case' ) case_mesh = LoadMesh( child.geometry, case_steel_mat );
            else if ( child.name=='bellR' ) bellR_mesh = LoadMesh( child.geometry, bellR_galv_mat );
            else if ( child.name=='bellL' ) bellL_mesh = LoadMesh( child.geometry, bellL_galv_mat );
            else if ( child.name=='face' ) clockFace_mesh = LoadMesh( child.geometry, clockFace2_mat );
            else if ( child.name=='hands' ) LoadMesh( child.geometry, hands_mat );
            else if ( child.name=='cylinder' ) LoadMesh( child.geometry, cylinder_mat );
            else if ( child.name=='standL' ) LoadMesh( child.geometry, standL_mat );
            else if ( child.name=='standR' ) LoadMesh( child.geometry, standR_mat );
            else if ( child.name=='knob' ) LoadMesh( child.geometry, knob_mat );
            else if ( child.name=='hammer' ) LoadMesh( child.geometry, hammer_mat );
            else if ( child.name=='bellStandL' ) LoadMesh( child.geometry, bellStandL_mat );
            else if ( child.name=='bellStandR' ) LoadMesh( child.geometry, bellStandR_mat );
            else if ( child.name=='bellTopL' ) LoadMesh( child.geometry, bellTopL_mat );
            else if ( child.name=='bellTopR' ) LoadMesh( child.geometry, bellTopR_mat );
            else if ( child.name=='base' ) LoadMesh( child.geometry, base_mat );
        }
    } );
} );

var lightPosition = new THREE.Vector3(20.0, 20.0, 10.0);

var lightParameters = {
    red: 1.0,
    green: 1.0,
    blue: 1.0,
    intensity: .5,
}

var ambientLightParameters = {
    red: 1.,
    green: 1.,
    blue: 1.,
    intensity: .1,
}
