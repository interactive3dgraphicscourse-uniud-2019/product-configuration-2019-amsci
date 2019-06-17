var loader = new THREE.OBJLoader();
var v3_centre = new THREE.Vector3(2,1.2,.7);

var case_mesh;
loader.load( "models/clock_4.obj", function ( object ) {
    var geometry = object.children[ 8 ].geometry;
    case_mesh = new THREE.Mesh( geometry, wood_mat );
    case_mesh.scale.multiplyScalar( 0.05 );
    case_mesh.position.add(v3_centre);
    case_mesh.castShadow = true;
    case_mesh.receiveShadow = true;
    alarm_clock.add( case_mesh );
} );

var bellR_mesh;
loader.load( "models/clock_4.obj", function ( object ) {
	var geometry = object.children[ 13 ].geometry;
	bellR_mesh = new THREE.Mesh( geometry, galvanizedMetal_mat );
	bellR_mesh.scale.multiplyScalar( 0.05 );
    bellR_mesh.position.add(v3_centre);
    bellR_mesh.castShadow = true;
    bellR_mesh.receiveShadow = true;
	alarm_clock.add( bellR_mesh );
} );

var bellL_mesh;
loader.load( "models/clock_4.obj", function ( object ) {
	var geometry = object.children[ 7 ].geometry;
	bellL_mesh = new THREE.Mesh( geometry, galvanizedMetal_mat );
	bellL_mesh.scale.multiplyScalar( 0.05 );
    bellL_mesh.position.add(v3_centre);
    bellL_mesh.castShadow = true;
    bellL_mesh.receiveShadow = true;
	alarm_clock.add( bellL_mesh );
} );

var clockFace_mesh;
loader.load( "models/clock_4.obj", function ( object ) {
    var geometry = object.children[ 11 ].geometry;
    clockFace_mesh = new THREE.Mesh( geometry, clockFace2_mat );
    clockFace_mesh.scale.multiplyScalar( 0.05 );
    clockFace_mesh.position.add(v3_centre);
    clockFace_mesh.castShadow = true;
    clockFace_mesh.receiveShadow = true;
    alarm_clock.add( clockFace_mesh );
} );

var hands_mesh;
loader.load( "models/clock_4.obj", function ( object ) {
    var geometry = object.children[ 10 ].geometry;
    hands_mesh = new THREE.Mesh( geometry, blackMetal_mat );
    hands_mesh.scale.multiplyScalar( 0.05 );
    hands_mesh.position.add(v3_centre);
    hands_mesh.castShadow = true;
    hands_mesh.receiveShadow = true;
    alarm_clock.add( hands_mesh );
} );


function LoadComponent(material, n) {
    var mesh;
    loader.load( "models/clock_4.obj", function ( object ) {
        var geometry = object.children[ n ].geometry;
        mesh = new THREE.Mesh( geometry, material );
        mesh.scale.multiplyScalar( 0.05 );
        mesh.position.add(v3_centre);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        alarm_clock.add( mesh );
    } );
    //return mesh;
}
LoadComponent(blackMetal_mat, 14); // hands pivot
LoadComponent(galvanizedMetal_mat, 9); // left stand
LoadComponent(galvanizedMetal_mat, 1); // right stand
LoadComponent(galvanizedMetal_mat, 5); // knob
LoadComponent(galvanizedMetal_mat, 4); // hammer
LoadComponent(galvanizedMetal_mat, 2); // left bell top
LoadComponent(galvanizedMetal_mat, 3); // right bell stand
LoadComponent(galvanizedMetal_mat, 6); // right bell top
LoadComponent(galvanizedMetal_mat, 0); // 