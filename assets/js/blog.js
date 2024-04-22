function pageTimer() {
    // Mendapatkan URL saat ini
    let currentURL = window.location.href;

    // Fetch data JSON dari server
    fetch('/pageData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(pageData => {
            // Inisialisasi data untuk URL saat ini jika belum ada
            if (!pageData[currentURL]) {
                pageData[currentURL] = {
                    timeSpent: 0,
                    viewCount: 0
                };
            }

            // Mulai timer
            let startTime = new Date().getTime();

            // Update waktu setiap detik
            setInterval(function() {
                let currentTime = new Date().getTime();
                let elapsedTime = currentTime - startTime;
                
                // Update waktu total
                pageData[currentURL].timeSpent += elapsedTime / 1000; // konversi ke detik

                // Tambahkan view
                pageData[currentURL].viewCount++;

                // Mengkonversi waktu total menjadi format menit
                let minutes = Math.floor(pageData[currentURL].timeSpent / 60);

                // Tampilkan waktu total dan jumlah view di HTML
                document.getElementById("totalTime").innerText = `${minutes} menit`;
                document.getElementById("viewCount").innerText = pageData[currentURL].viewCount + " kali";

                // Reset waktu awal
                startTime = currentTime;

                // Simpan data kembali ke file JSON
                fetch('/pageData.json', {
                    method: 'PUT', // atau 'POST' tergantung kebutuhan Anda
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pageData)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to save data');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }, 1000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Panggil fungsi pageTimer saat halaman dimuat
pageTimer();
