
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
    document.querySelector(".services-offered").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".services-offered").innerHTML += `
        <div class="col-md-3 col-sm-6 col-6">
          <div class="services-item text-center">
            <div class="image">
              <img src="/assets/img/icons/web-development.svg" alt="andrep13_">
            </div>
            <div class="text">
              <h3 class="title">Web Development</h3>
            </div>
          </div>
        </div>
               `
    }

}