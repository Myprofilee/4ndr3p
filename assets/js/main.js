/* https://obfuscator.io/ */

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
  
/* Data Replace */
import('/assets/js/data/main.js');

import('/assets/js/loader/main.js');