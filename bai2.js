/**
 * Tính trung binh 5 so
 */
// document.getElementById("btnTinhTB").onclick = function
var btnTinhTB = document.getElementById("btnTinhTB");
btnTinhTB.onclick = function () {
    //Đầu vào nhập giá trị
    var giaTri1 = document.getElementById("giaTri1").value * 1;
    var giaTri2 = document.getElementById("giaTri2").value * 1;
    var giaTri3 = document.getElementById("giaTri3").value * 1;
    var giaTri4 = document.getElementById("giaTri4").value * 1;
    var giaTri5 = document.getElementById("giaTri5").value * 1;

    //Xử lý
    var tinhGiaTri = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5;
    //Đầu ra
    var ketQuaTinh = "<br><p class='alert alert-success'>👉 Giá trị TB là: " + tinhGiaTri + "</p>"
    document.getElementById("showGiaTriTB").innerHTML = ketQuaTinh;
}