var vertexShader = document.getElementById("vertex").textContent;
var fragmentShader = document.getElementById("fragment").textContent;

function loadTexture(file) {
    var texture = new THREE.TextureLoader().load( file , function ( texture ) {
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.anisotropy = renderer.getMaxAnisotropy();
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.needsUpdate = true;
    })
    return texture;
}

function MakeMaterial( textureParameters ){
    var diffuseMap = loadTexture( "textures/" + textureParameters.material + "_diffuse.jpg" );
    var specularMap = loadTexture( "textures/" + textureParameters.material + "_specular.jpg" );
    var roughnessMap = loadTexture( "textures/" + textureParameters.material + "_roughness.jpg" );
    var normalMap = loadTexture( "textures/" + textureParameters.material + "_normal.jpg" );
    var aoMap = loadTexture( "textures/" + textureParameters.material + "_ambientOcclusion.jpg" );
    //var displacementMap = loadTexture( "textures/" + textureParameters.material + "_displacement.png" );
    //var shadowMap = loadTexture( "textures/REF_glossy_roughness.jpg");
    var uniforms = {
        specularMap: { type: "t", value: specularMap},
        diffuseMap:	{ type: "t", value: diffuseMap},
        roughnessMap:	{ type: "t", value: roughnessMap},
        normalMap:	{ type: "t", value: normalMap},
        aoMap:	{ type: "t", value: aoMap},
        //displacementMap:	{ type: "t", value: displacementMap},
        normalScale: {
            type: "v2",
            value: new THREE.Vector2( textureParameters.normalScale, textureParameters.normalScale )
        },
        pointLightPosition:	{ type: "v3", value: new THREE.Vector3(7.0, 7.0, 7.0) },
        clight:	{ type: "v3", value: new THREE.Vector3(
            lightParameters.red * lightParameters.intensity,
            lightParameters.green * lightParameters.intensity,
            lightParameters.blue * lightParameters.intensity
        ) },
        ambientLight:	{ type: "v3", value: new THREE.Vector3(
            ambientLightParameters.red * ambientLightParameters.intensity,
            ambientLightParameters.green * ambientLightParameters.intensity,
            ambientLightParameters.blue * ambientLightParameters.intensity
        ) },
        textureRepeat: { 
            type: "v2", 
            value: new THREE.Vector2( textureParameters.repeatS, textureParameters.repeatT)
        },

        // tDiffuse: { type: "t", value: null},
    };
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader, 
        fragmentShader: fragmentShader
    });
    material.needsUpdate = true;
    return material;
}

var clockFace1_mat = MakeMaterial({
    material: "clockFace1",
    normalScale: 1.0,
    repeatS: 1.0,
    repeatT: 1.0,
});

var clockFace2_mat = MakeMaterial({
    material: "clockFace2",
    normalScale: 1.0,
    repeatS: 1.0,
    repeatT: 1.0,
});

var clockFace3_mat = MakeMaterial({
    material: "clockFace3",
    normalScale: 1.0,
    repeatS: 1.0,
    repeatT: 1.0,
});

var wood_mat = MakeMaterial({
    material: "wood",
    normalScale: 1.0,
    repeatS: 5.0,
    repeatT: 3.0,
});

var brushedSteel_mat = MakeMaterial({
    material: "brushedSteel",
    normalScale: 1.0,
    repeatS: 4.0,
    repeatT: 4.0,
});

var steel_mat = MakeMaterial({
    material: "steel",
    normalScale: 1.0,
    repeatS: 4.0,
    repeatT: 4.0,
});

var rock_mat = MakeMaterial({
    material: "rock",
    normalScale: 1.0,
    repeatS: 5.0,
    repeatT: 5.0,
});

var blackMetal_mat = MakeMaterial({
    material: "blackMetal",
    normalScale: 1.0,
    repeatS: 3.0,
    repeatT: 3.0,
});

var galvanizedMetal_mat = MakeMaterial({
    material: "galvanizedMetal",
    normalScale: 1.0,
    repeatS: 5.0,
    repeatT: 5.0,
});

var paintedMetal_mat = MakeMaterial({
    material: "paintedMetal",
    normalScale: 1.0,
    repeatS: 2.0,
    repeatT: 2.0,
});


