self.addEventListener('sync', function(event) {
    if (event.tag === 'cronSync') {
      event.waitUntil(syncCronData());
    }
  });
  
  function syncCronData() {
    return fetch('https://bluehomeid.my.id/system/andrep-cron.php')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(function(data) {
        // Simpan data ke local storage atau lakukan logika lainnya
        console.log('cron.php loaded successfully.');
      })
      .catch(function(error) {
        console.error('Error loading cron.php:', error);
        // Handle error
      });
  }