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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const pageRef = db.collection('pages').doc('page1');

let timer = 0;
let countView = 0;

// Fungsi untuk memulai timer
function startTimer() {
    timer = setInterval(() => {
        updateTotalTimer();
    }, 1000);
}

// Fungsi untuk mengupdate total timer
function updateTotalTimer() {
    timer++;
    document.getElementById('totalTimer').textContent = timer;
}

// Fungsi untuk mengupdate count view
function updateCountView() {
    countView++;
    document.getElementById('countView').textContent = countView;
}

// Fungsi untuk menyimpan data ke Firebase
function saveDataToFirebase() {
    pageRef.set({
        totalTimer: timer,
        countView: countView
    })
    .then(() => {
        console.log("Data berhasil disimpan!");
    })
    .catch((error) => {
        console.error("Error menyimpan data: ", error);
    });
}

// Event saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Memulai timer saat halaman dimuat
    startTimer();

    // Mengupdate count view saat halaman dimuat
    updateCountView();

    // Menyimpan data ke Firebase saat pengguna meninggalkan halaman
    window.addEventListener('beforeunload', () => {
        clearInterval(timer); // Menghentikan timer
        saveDataToFirebase(); // Menyimpan data ke Firebase
    });

    // Mengambil data dari Firebase dan menampilkan ke halaman
    pageRef.get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('totalTimer').textContent = data.totalTimer;
            document.getElementById('countView').textContent = data.countView;
        } else {
            console.log("Data tidak ditemukan!");
        }
    })
    .catch((error) => {
        console.error("Error mengambil data: ", error);
    });
});
