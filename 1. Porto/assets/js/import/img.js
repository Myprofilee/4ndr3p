// Buat elemen img baru dengan kelas 'gambar'
var imgs = document.getElementsByClassName('gambar');

// Tentukan URL gambar yang ingin Anda tampilkan
var urlGambar = "https://minfotailwind.netlify.app/assets/img/user-sidebar-thumb-light.png";

// Loop melalui setiap elemen img dan atur URL gambar untuk masing-masing
for (var i = 0; i < imgs.length; i++) {
    imgs[i].src = urlGambar;
}
