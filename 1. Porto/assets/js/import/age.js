document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan tahun sekarang
    var tahunSekarang = new Date().getFullYear();

    // Tahun kelahiran
    var tahunLahir = 2004;

    // Menghitung umur
    var umur = tahunSekarang - tahunLahir;

    // Menampilkan umur di dalam elemen HTML dengan id "umur"
    document.getElementById("umur").textContent = umur;
});
