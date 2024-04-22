
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
    document.querySelector(".available-btn").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".available-btn").innerHTML += `
        <span><i class="ri-checkbox-blank-circle-fill"></i> Not Available For Hire</span>
               `
    }

}