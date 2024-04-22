import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

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

// Konversi waktu dari milidetik menjadi menit
function formatDuration(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);

    return `${minutes} menit`;
}

// Fungsi untuk melacak waktu dan view halaman
function trackPageView(url) {
    let startTime = new Date().getTime();
    let encodedUrl = encodeURL(url); // Enkripsi URL

    // Mendengarkan perubahan pada jumlah views
    onValue(ref(database, 'Portofolio andrep/Blog/' + encodedUrl + '/views'), (snapshot) => {
        let views = snapshot.val() || 0;
        
        // Update tampilan di HTML
        document.getElementById('pageViews').textContent = views + ' View';
    });

    // Mengecek apakah data untuk URL tersebut sudah ada di Realtime Database
    get(ref(database, 'pageViews/' + encodedUrl)).then((snapshot) => {
        let views = 1;
        let duration = 0;
        if (snapshot.exists()) {
            views = snapshot.val().views + 1; // Menambah 1 ke views yang ada
            duration = snapshot.val().duration || 0;
        }

        // Menghitung durasi pengguna membuka halaman
        window.addEventListener('beforeunload', () => {
            let endTime = new Date().getTime();
            duration += endTime - startTime;

            // Menyimpan data ke Realtime Database dengan ID yang telah dienkripsi
            set(ref(database, 'pageViews/' + encodedUrl), {
                url: url,
                views: views,
                duration: duration
            }).then(() => {
                console.log("Data berhasil disimpan!");
            }).catch((error) => {
                console.error("Gagal menyimpan data: ", error);
            });
        });

        // Update tampilan di HTML
        document.getElementById('pageViews').textContent = views + ' View';
        document.getElementById('duration').textContent = formatDuration(duration);
    }).catch((error) => {
        console.error("Error saat mengambil data: ", error);
    });
}

// Memanggil fungsi trackPageView dengan URL halaman sebagai parameter
let currentUrl = window.location.href;
trackPageView(currentUrl);
