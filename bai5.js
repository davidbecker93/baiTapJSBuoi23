/**
 * Tinh tong 2 ky so
 */

document.getElementById("btnTinhKySo").onclick = function () {
    //Dau vào:
    var kySo = document.getElementById("kySo").value * 1;
    //Xu Ly:
    var donVi = kySo % 10;
    var hangChuc = Math.floor(kySo / 10);
    var tongKySo = donVi + hangChuc;
    //dau ra
    ketQuaKySo = "<br><p class='alert alert-success'>👉 Tổng 2 ký số: " + tongKySo + "</p>";
    document.getElementById("showKySo").innerHTML = ketQuaKySo;
}