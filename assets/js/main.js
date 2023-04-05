/* https://obfuscator.io/ */
window.addEventListener('load', () => {
  registerSW();
});

// Register the Service Worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator
            .serviceWorker
            .register('serviceworker.js');
    }
    catch (e) {
      console.log('SW registration failed');
    }
  }
}

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
  
/* Data Replace */
import('/assets/js/data/main.js');

import('/assets/js/loader/main.js');