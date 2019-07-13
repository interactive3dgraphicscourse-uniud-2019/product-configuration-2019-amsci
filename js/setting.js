// object lighting



// // ground
// var plane_geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
// var plane_mat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
// var plane = new THREE.Mesh(plane_geo, plane_mat);
// plane.rotation.x = -Math.PI/2.;
// plane.position.y = -3.1;
// plane.receiveShadow = true;
// alarm_clock.add(plane);

// ground lighting and shadows
// var light = new THREE.HemisphereLight( 0xffffff, 0xdddddd, .6);
// light.position.set( 0, 200, 0 );
// scene.add( light );
// light = new THREE.PointLight( 0xffffff, .4);
// light.position.set( 10., 10., 10. );
// scene.add( light );
// var light = new THREE.PointLight( 0xffffff, .15);
// light.position.set( 10., 10., 10. );
// light.castShadow = true;
// light.shadow.mapSize.width = 1024;  
// light.shadow.mapSize.height = 1024;
// light.shadow.radius = 9;
// scene.add( light );

// renderer.shadowMap.enabled = true;

// dirLight = new THREE.DirectionalLight( 0xffffff, 0 );
// dirLight.position.set( 7., 7., 7. );
// dirLight.castShadow = true;
// dirLight.shadow.camera.near = 3;
// dirLight.shadow.camera.far = 15;
// dirLight.shadow.camera.right = 10;
// dirLight.shadow.camera.left = - 10;
// dirLight.shadow.camera.top	= 10;
// dirLight.shadow.camera.bottom = - 10;
// dirLight.shadow.mapSize.width = 1024;
// dirLight.shadow.mapSize.height = 1024;
// scene.add( dirLight );
