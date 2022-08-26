/**
 * Quy doi tien
 */

document.getElementById("btnDoiTien").onclick = function () {
    //Dau vao so USD
    var soUSD = document.getElementById("soUSD").value * 1;
    const TI_GIA = 23500;
    //Xu Ly
    var quyDoi = soUSD * TI_GIA;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    //Dau ra
    var ketQuaQD = "<br><p class='alert alert-success'>👉 Tiền sau quy đổi: " + currentFormat.format(quyDoi) + " VNĐ</p>";
    document.getElementById("showSoTien").innerHTML = ketQuaQD;
}