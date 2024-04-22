import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBe7G6rFovAklTKNTmFb1TSogsiYDy_WO4",
    authDomain: "andrepid.firebaseapp.com",
    databaseURL: "https://andrepid-default-rtdb.firebaseio.com",
    projectId: "andrepid",
    storageBucket: "andrepid.appspot.com",
    messagingSenderId: "475106414273",
    appId: "1:475106414273:web:5921db06c2580738724e40",
    measurementId: "G-HTMHQWX8B6"
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Enkripsi URL menjadi base64
function encodeURL(url) {
    return btoa(url);
}

// Konversi waktu dari milidetik menjadi format detik, menit, atau jam
function formatDuration(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    
    if (seconds < 60) {
        return `${seconds} detik`;
    } else if (seconds < 3600) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${minutes} menit ${remainingSeconds} detik`;
    } else {
        let hours = Math.floor(seconds / 3600);
        let remainingMinutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;
        return `${hours} jam ${remainingMinutes} menit ${remainingSeconds} detik`;
    }
}

// Fungsi untuk melacak durasi penggunaan halaman
function trackPageDuration(url) {
    let startTime = new Date().getTime();
    let encodedUrl = encodeURL(url); // Enkripsi URL

    // Menghitung durasi pengguna membuka halaman
    window.addEventListener('beforeunload', () => {
        let endTime = new Date().getTime();
        let duration = endTime - startTime;

        // Mengambil durasi sebelumnya dari Firebase
        get(ref(database, 'Portofolio andrep/Blog/' + encodedUrl)).then((snapshot) => {
            let previousDuration = 0;
            if (snapshot.exists()) {
                previousDuration = snapshot.val().duration || 0;
            }

            duration += previousDuration;

            // Menyimpan data ke Realtime Database dengan ID yang telah dienkripsi
            set(ref(database, 'Portofolio andrep/Blog/' + encodedUrl), {
                url: url,
                duration: duration
            }).then(() => {
                console.log("Durasi berhasil disimpan!");
            }).catch((error) => {
                console.error("Gagal menyimpan durasi: ", error);
            });
        }).catch((error) => {
            console.error("Error saat mengambil data: ", error);
        });
    });

    // Tambahkan listener untuk mendapatkan data dari Firebase
    get(ref(database, 'Portofolio andrep/Blog/' + encodedUrl)).then((snapshot) => {
        let duration = 0;
        if (snapshot.exists()) {
            duration = snapshot.val().duration || 0;
        }

        // Update tampilan di HTML
        document.getElementById('duration').textContent = formatDuration(duration);
    }).catch((error) => {
        console.error("Error saat mengambil data: ", error);
    });
}

// Memanggil fungsi trackPageDuration dengan URL halaman sebagai parameter
let currentUrl = window.location.href;
trackPageDuration(currentUrl);
