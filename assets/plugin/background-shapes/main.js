
// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
    },

];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.querySelector(".background-shapes").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".background-shapes").innerHTML += `
        <div class="shape-1 common-shape">
          <img src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1">
        </div>
        <div class="shape-2 common-shape">
          <img src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1">
        </div>
        <div class="threed-shape-1 move-with-cursor" data-value="1">
          <img src="/assets/img/bg/object-3d-1.png" alt="object-3d-1">
        </div>
        <div class="threed-shape-2 move-with-cursor" data-value="1">
          <img src="/assets/img/bg/object-3d-2.png" alt="object-3d-2">
        </div>
               `
    }

}