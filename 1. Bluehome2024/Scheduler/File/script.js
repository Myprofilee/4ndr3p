// Mendapatkan nilai failedLoadCount dari localStorage saat halaman dimuat
var failedLoadCount = localStorage.getItem('failedLoadCount') ? parseInt(localStorage.getItem('failedLoadCount')) : 0;

// Fungsi untuk menampilkan loader
function showLoader() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000); // Hapus notifikasi setelah 3 detik
}

// Fungsi untuk memperbarui halaman cron setiap 5 detik
function autoRefreshCron() {
    showLoader(); // Menampilkan loader
    setTimeout(function () {
        loadCronData(); // Memuat ulang data cron
        updateCountTable();
        autoRefreshCron(); // Memanggil kembali fungsi ini untuk memperbarui secara terus-menerus
    }, 5000);
}

// Fungsi untuk memuat konten dari cron.php
function loadCronData() {
    fetch('https://bluehomeid.my.id/system/andrep-cron.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('cronData').innerHTML = data;
            console.log('cron.php loaded successfully.');
            showNotification('Konten berhasil dimuat!');
            hideLoader(); // Menyembunyikan loader setelah memuat berhasil
        })
        .catch(error => {
            console.error('Error loading cron.php:', error);
            var currentTime = new Date().toLocaleString();
            localStorage.setItem('failureTime' + failedLoadCount, currentTime);
            failedLoadCount++;
            localStorage.setItem('failedLoadCount', failedLoadCount);
            showNotification('Gagal memuat konten: ' + error.message);
            hideLoader(); // Menyembunyikan loader setelah memuat gagal
        });
}

// Fungsi untuk menyembunyikan loader
function hideLoader() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

// Fungsi untuk memperbarui tabel dengan 10 data terakhir
function updateCountTable() {
    var countTable = document.getElementById('countTable');
    countTable.innerHTML = ''; // Kosongkan tabel sebelum memasukkan data baru
    var counts = [];
    for (var i = failedLoadCount; i >= 1; i--) { // Iterasi dari nomor terbaru ke nomor 1
        counts.push({
            count: i,
            time: localStorage.getItem('failureTime' + i) || '-'
        });
    }

    counts.forEach(function (item) {
        var row = countTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = item.count;
        cell2.textContent = item.time;
    });
    if (failedLoadCount > 10) {
        countTable.parentElement.style.overflowY = 'scroll';
        countTable.parentElement.style.maxHeight = '300px';
    } else {
        countTable.parentElement.style.overflowY = 'auto';
        countTable.parentElement.style.maxHeight = 'none';
    }
}

// Fungsi untuk memeriksa apakah storage dihapus
function checkLocalStorage() {
    if (!localStorage.getItem('failedLoadCount')) {
        failedLoadCount = 0;
        localStorage.setItem('failedLoadCount', failedLoadCount);
    }
}

// Panggil fungsi checkLocalStorage saat halaman dimuat
window.onload = function () {
    checkLocalStorage();
    autoRefreshCron(); // Panggil fungsi untuk memulai pembaruan otomatis
    loadCronData(); // Memuat data cron saat halaman dimuat
    updateCountTable(); // Panggil fungsi untuk memperbarui tabel dengan data terakhir
    // Panggil fungsi resetCountDaily setiap detik untuk memeriksa apakah harus mereset nilai count
    displayResetTime();
    setInterval(resetCountDaily, 1000);
};

// Event listener untuk memeriksa perubahan storage
window.addEventListener('storage', function (e) {
    if (!localStorage.getItem('failedLoadCount')) {
        failedLoadCount = 0;
        localStorage.setItem('failedLoadCount', failedLoadCount);
    }
});

// Inisialisasi resetTime di luar fungsi agar dapat diakses oleh fungsi lainnya
var resetTime = new Date();
resetTime.setHours(13); // Set waktu reset ke 9 malam
resetTime.setMinutes(25);
resetTime.setSeconds(0);

// Fungsi untuk menampilkan waktu reset local storage
function displayResetTime() {
    var now = new Date();

    // Jika waktu reset sudah lewat, tambahkan 1 hari ke resetTime
    if (now > resetTime) {
        resetTime.setDate(resetTime.getDate() + 1);
    }

    var timeDiff = resetTime - now;
    var secondsRemaining = Math.floor((timeDiff / 1000) % 60);
    var minutesRemaining = Math.floor((timeDiff / 1000 / 60) % 60);
    var hoursRemaining = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    var timeString = hoursRemaining.toString().padStart(2, '0') + ":" +
                     minutesRemaining.toString().padStart(2, '0') + ":" +
                     secondsRemaining.toString().padStart(2, '0');

    document.getElementById('resetTime').textContent = "Waktu reset data: " + timeString;
}

// Mendapatkan nilai failedLoadCount dari localStorage saat halaman dimuat
var failedLoadCount = localStorage.getItem('failedLoadCount') ? parseInt(localStorage.getItem('failedLoadCount')) : 0;

// Fungsi untuk menampilkan loader
function showLoader() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000); // Hapus notifikasi setelah 3 detik
}

// Fungsi untuk memperbarui halaman cron setiap 5 detik
function autoRefreshCron() {
    showLoader(); // Menampilkan loader
    setTimeout(function () {
        loadCronData(); // Memuat ulang data cron
        updateCountTable();
        autoRefreshCron(); // Memanggil kembali fungsi ini untuk memperbarui secara terus-menerus
    }, 5000);
}

// Fungsi untuk memuat konten dari cron.php
function loadCronData() {
    fetch('https://bluehomeid.my.id/system/andrep-cron.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('cronData').innerHTML = data;
            console.log('cron.php loaded successfully.');
            showNotification('Konten berhasil dimuat!');
            hideLoader(); // Menyembunyikan loader setelah memuat berhasil
        })
        .catch(error => {
            console.error('Error loading cron.php:', error);
            var currentTime = new Date().toLocaleString();
            localStorage.setItem('failureTime' + failedLoadCount, currentTime);
            failedLoadCount++;
            localStorage.setItem('failedLoadCount', failedLoadCount);
            showNotification('Gagal memuat konten: ' + error.message);
            hideLoader(); // Menyembunyikan loader setelah memuat gagal
        });
}

// Fungsi untuk menyembunyikan loader
function hideLoader() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

// Fungsi untuk memperbarui tabel dengan 10 data terakhir
function updateCountTable() {
    var countTable = document.getElementById('countTable');
    countTable.innerHTML = ''; // Kosongkan tabel sebelum memasukkan data baru
    var counts = [];
    for (var i = failedLoadCount; i >= 1; i--) { // Iterasi dari nomor terbaru ke nomor 1
        counts.push({
            count: i,
            time: localStorage.getItem('failureTime' + i) || '-'
        });
    }

    counts.forEach(function (item) {
        var row = countTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = item.count;
        cell2.textContent = item.time;
    });
    if (failedLoadCount > 10) {
        countTable.parentElement.style.overflowY = 'scroll';
        countTable.parentElement.style.maxHeight = '300px';
    } else {
        countTable.parentElement.style.overflowY = 'auto';
        countTable.parentElement.style.maxHeight = 'none';
    }
}

// Fungsi untuk memeriksa apakah storage dihapus
function checkLocalStorage() {
    if (!localStorage.getItem('failedLoadCount')) {
        failedLoadCount = 0;
        localStorage.setItem('failedLoadCount', failedLoadCount);
    }
}

// Panggil fungsi checkLocalStorage saat halaman dimuat
window.onload = function () {
    checkLocalStorage();
    autoRefreshCron(); // Panggil fungsi untuk memulai pembaruan otomatis
    loadCronData(); // Memuat data cron saat halaman dimuat
    updateCountTable(); // Panggil fungsi untuk memperbarui tabel dengan data terakhir
    // Panggil fungsi resetCountDaily setiap detik untuk memeriksa apakah harus mereset nilai count
    displayResetTime();
    setInterval(resetCountDaily, 1000);
};

// Event listener untuk memeriksa perubahan storage
window.addEventListener('storage', function (e) {
    if (!localStorage.getItem('failedLoadCount')) {
        failedLoadCount = 0;
        localStorage.setItem('failedLoadCount', failedLoadCount);
    }
});

// Inisialisasi resetTime di luar fungsi agar dapat diakses oleh fungsi lainnya
var resetTime = new Date();
resetTime.setHours(14); // Set waktu reset ke 9 malam
resetTime.setMinutes(0);
resetTime.setSeconds(0);

// Fungsi untuk menampilkan waktu reset local storage dan reset local storage jika waktu sudah lewat
function displayResetTime() {
    var now = new Date();

    // Jika waktu reset sudah lewat, reset local storage dan atur ulang waktu reset
    if (now > resetTime) {
        resetTime.setDate(resetTime.getDate() + 1); // Atur ulang waktu reset ke hari berikutnya
        failedLoadCount = 0; // Reset failedLoadCount ke 0
        localStorage.setItem('failedLoadCount', failedLoadCount); // Simpan perubahan ke local storage
        localStorage.clear(); // Paksa reset local storage
    }

    var timeDiff = resetTime - now;
    var secondsRemaining = Math.floor((timeDiff / 1000) % 60);
    var minutesRemaining = Math.floor((timeDiff / 1000 / 60) % 60);
    var hoursRemaining = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    var timeString = hoursRemaining.toString().padStart(2, '0') + ":" +
                     minutesRemaining.toString().padStart(2, '0') + ":" +
                     secondsRemaining.toString().padStart(2, '0');

    document.getElementById('resetTime').textContent = "Waktu reset data: " + timeString;
}


// Fungsi untuk mereset nilai count ke 0 setiap hari pukul 9 malam
function resetCountDaily() {
    var now = new Date();
    var resetHour = resetTime.getHours();
    var resetMinute = resetTime.getMinutes();
    var resetSecond = resetTime.getSeconds();

    if (now.getHours() === resetHour && now.getMinutes() === resetMinute && now.getSeconds() === resetSecond) {
        failedLoadCount = 0;
        localStorage.setItem('failedLoadCount', failedLoadCount);
        localStorage.clear(); // Panggil fungsi autoRefreshCron() ketika waktu reset sudah sesuai
    }
    displayResetTime(); // Panggil fungsi untuk menampilkan waktu reset
}

resetCountDaily(); // Memanggil fungsi resetCountDaily() agar dicek setiap saat
