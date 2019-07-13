var vertexShader = document.getElementById("vertex").textContent;
var fragmentShader = document.getElementById("fragment").textContent;

materialExtensions = {
    derivatives: true, // set to use derivatives
    shaderTextureLOD: true // set to use shader texture LOD
};

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
    var aoMapObj = loadTexture( "textures/ObjAO/empty_ao.png" );
    if(textureParameters.objName != null){
        aoMapObj = loadTexture( "textures/ObjAO/"+ textureParameters.objName + "_ao.png" );
    }
    var roughnessScale = 0.;
    if(textureParameters.roughnessScale != null){
        roughnessScale = textureParameters.roughnessScale;
    }
    var specularReduction = 0.;
    if(textureParameters.specularReduction != null){
        specularReduction = textureParameters.specularReduction;
    }
    var normalScale = 1.;
    if(textureParameters.normalScale != null){
        normalScale = textureParameters.normalScale;
    }
    var repeatS = 1.;
    if(textureParameters.repeatS != null){
        repeatS = textureParameters.repeatS;
    }
    var repeatT = 1.;
    if(textureParameters.repeatT != null){
        repeatT = textureParameters.repeatT;
    }
    var brightness = 0.;
    if(textureParameters.brightness != null){
        brightness = textureParameters.brightness;
    }
    var uniforms = {
        specularMap: { type: "t", value: specularMap},
        diffuseMap:	{ type: "t", value: diffuseMap},
        roughnessMap:	{ type: "t", value: roughnessMap},
        normalMap:	{ type: "t", value: normalMap},
        aoMap:	{ type: "t", value: aoMap},
        aoMapObj: { type: "t", value: aoMapObj},
        normalScale: {
            type: "v2",
            value: new THREE.Vector2( normalScale, normalScale )
        },
        pointLightPosition:	{ type: "v3", value: lightPosition },
        clight:	{ type: "v3", value: new THREE.Vector3(
            lightParameters.red * lightParameters.intensity,
            lightParameters.green * lightParameters.intensity,
            lightParameters.blue * lightParameters.intensity
        ) },
        ambientLight:	{ type: "v3", value: new THREE.Vector3(
            ambientLightParameters.red * ambientLightParameters.intensity,
            ambientLightParameters.green * ambientLightParameters.intensity,
            ambientLightParameters.blue * ambientLightParameters.intensity
        ).add(new THREE.Vector3(brightness,brightness,brightness)) },
        textureRepeat: { 
            type: "v2", 
            value: new THREE.Vector2( repeatS, repeatT)
        },
        envMap:	{ type: "t", value: textureCube},
        roughnessScale: { type: "f", value: roughnessScale},
        specularReduction: { type: "f", value: specularReduction}
    };
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader, 
        fragmentShader: fragmentShader,
        extensions: materialExtensions
    });
    material.needsUpdate = true;
    return material;
}

var case_wood_mat = MakeMaterial({
    material: "wood",
    repeatS: 4.,
    repeatT: 2.,
    objName: "case",
    roughnessScale: .1,
    normalScale: 2.
});

var case_steel_mat = MakeMaterial({
    material: "brushedSteel",
    repeatS: 3.,
    repeatT: 3.2,
    objName: "case",
    roughnessScale: .1
});

var case_painted_mat = MakeMaterial({
    material: "granite",
    repeatS: 2.0,
    repeatT: 2.1,
    objName: "case",
    roughnessScale: .1,
    normalScale: 2.
});

var case_rock_mat = MakeMaterial({
    material: "rock",
    repeatS: 4.5,
    repeatT: 4.5,
    objName: "case",
    roughnessScale: .6,
    normalScale: 1.5
});

var clockFace1_mat = MakeMaterial({
    material: "clockFace1",
    objName: "face",
    //roughnessScale: .1,
    brightness: .5,
    normalScale: 1.5
});

var clockFace2_mat = MakeMaterial({
    material: "clockFace2",
    objName: "face",
    //roughnessScale: .2,
    brightness: .5
});

var clockFace3_mat = MakeMaterial({
    material: "clockFace3",
    objName: "face",
    //roughnessScale: 0.,
    brightness: .5
});

var standL_mat = MakeMaterial({
    material: "galvanizedMetal",
    repeatS: .3,
    repeatT: .3,
    objName: "stand_l",
});

var standR_mat = MakeMaterial({
    material: "galvanizedMetal",
    repeatS: .3,
    repeatT: .3,
    objName: "stand_r",
});

var base_mat = MakeMaterial({
    material: "wood",
    objName: "base",
    repeatS: 1.,
    repeatT: 1.,
    normalScale: 3.,
    roughnessScale: .7
});

var bellL_galv_mat = MakeMaterial({
    material: "galvanizedMetal",
    normalScale: .3,
    repeatS: 3.,
    repeatT: 3.,
    objName: "bell_l",
});

var bellR_galv_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "bell_r",
    normalScale: .3,
    repeatS: 3.,
    repeatT: 3.,
});

var bellL_brushed_mat = MakeMaterial({
    material: "brushedSteel",
    normalScale: 2.,
    repeatS: 3.,
    repeatT: 3.,
    objName: "bell_l",
});

var bellR_brushed_mat = MakeMaterial({
    material: "brushedSteel",
    objName: "bell_r",
    normalScale: 2.,
    repeatS: 3.,
    repeatT: 3.,
});

var bellL_smooth_mat = MakeMaterial({
    material: "copper",
    normalScale: .0,
    repeatS: 1.,
    repeatT: 1.,
    objName: "bell_l",
});

var bellR_smooth_mat = MakeMaterial({
    material: "copper",
    objName: "bell_r",
    normalScale: .0,
    repeatS: 1.,
    repeatT: 1.,
});

/////

var bellStandL_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "bell_stand_l",
    repeatS: .5,
    repeatT: .5,
});

var bellTopL_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "bell_top_l",
    repeatS: .5,
    repeatT: .5,
});

var bellStandR_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "bell_stand_r",
    repeatS: .5,
    repeatT: .5,
});

var bellTopR_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "bell_top_r",
    repeatS: .5,
    repeatT: .5,
});

var hammer_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "hammer",
    repeatS: .5,
    repeatT: .5,
});

var hands_mat = MakeMaterial({
    material: "blackMetal",
    objName: "hands",
    repeatS: .5,
    repeatT: .5,
});

var knob_mat = MakeMaterial({
    material: "galvanizedMetal",
    objName: "knob",
    repeatS: .5,
    repeatT: .5,
});

var cylinder_mat = MakeMaterial({
    material: "blackMetal",
    objName: "cylinder",
});

