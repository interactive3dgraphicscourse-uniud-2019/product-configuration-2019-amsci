document.getElementById("case_wood").addEventListener("click", function () {case_mesh.material = wood_mat;});
document.getElementById("case_painted").addEventListener("click", function () {case_mesh.material = paintedMetal_mat;});
document.getElementById("case_rock").addEventListener("click", function () {case_mesh.material = rock_mat;});

document.getElementById("face_1").addEventListener("click", function () {clockFace_mesh.material = clockFace2_mat;});
document.getElementById("face_2").addEventListener("click", function () {clockFace_mesh.material = clockFace1_mat;});
document.getElementById("face_3").addEventListener("click", function () {clockFace_mesh.material = clockFace3_mat;});

document.getElementById("bells_galvanized").addEventListener("click", function () {
    bellR_mesh.material = galvanizedMetal_mat;
    bellL_mesh.material = galvanizedMetal_mat;
});
document.getElementById("bells_steel").addEventListener("click", function () {
    bellR_mesh.material = brushedSteel_mat;
    bellL_mesh.material = brushedSteel_mat;
});
document.getElementById("bells_smooth").addEventListener("click", function () {
    bellR_mesh.material = steel_mat;
    bellL_mesh.material = steel_mat;
});

document.getElementById("hands_1").addEventListener("click", function () {hands_mesh.material = blackMetal_mat;});
document.getElementById("hands_2").addEventListener("click", function () {hands_mesh.material = steel_mat;});
document.getElementById("hands_3").addEventListener("click", function () {hands_mesh.material = wood_mat;});
