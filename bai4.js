/**
 * Tinh Chu vi dien tich
 */

document.getElementById("btnTinhHH").onclick = function () {
    //Đầu vào: Dai, Rong
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    //Xử Lý
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    //Dau ra
    var ketQuaHH = "<br><p class='alert alert-success'>👉Diện tích là: " + dienTich + "<br>";
    ketQuaHH += "👉Chu vi là: " + chuVi + "</p>";
    document.getElementById("showCVDT").innerHTML = ketQuaHH;
}