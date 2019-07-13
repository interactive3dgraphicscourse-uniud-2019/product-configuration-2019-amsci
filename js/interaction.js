document.getElementById("case_steel").addEventListener("click", function () {case_mesh.material = case_steel_mat;});
document.getElementById("case_wood").addEventListener("click", function () {case_mesh.material = case_wood_mat;});
document.getElementById("case_painted").addEventListener("click", function () {case_mesh.material = case_painted_mat;});
document.getElementById("case_rock").addEventListener("click", function () {case_mesh.material = case_rock_mat;});

document.getElementById("face_1").addEventListener("click", function () {clockFace_mesh.material = clockFace2_mat;});
document.getElementById("face_2").addEventListener("click", function () {clockFace_mesh.material = clockFace1_mat;});
document.getElementById("face_3").addEventListener("click", function () {clockFace_mesh.material = clockFace3_mat;});

document.getElementById("bells_galvanized").addEventListener("click", function () {
    bellR_mesh.material = bellR_galv_mat;
    bellL_mesh.material = bellL_galv_mat;
});
document.getElementById("bells_steel").addEventListener("click", function () {
    bellR_mesh.material = bellR_brushed_mat;
    bellL_mesh.material = bellL_brushed_mat;
});
document.getElementById("bells_smooth").addEventListener("click", function () {
    bellR_mesh.material = bellR_smooth_mat;
    bellL_mesh.material = bellL_smooth_mat;
});

// document.getElementById("hands_1").addEventListener("click", function () {hands_mesh.material = blackMetal_mat;});
// document.getElementById("hands_2").addEventListener("click", function () {hands_mesh.material = steel_mat;});
// document.getElementById("hands_3").addEventListener("click", function () {hands_mesh.material = wood_mat;});
