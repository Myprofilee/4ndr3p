
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
    document.querySelector(".footer-area").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".footer-area").innerHTML += `
        <footer class="footer-area">
          <div class="container">
            <div class="text text-center">
                <p>&copy; andrep13_ <span id="footerDate"></span>.  All Rights Reserved</p>
            </div>
          </div>
        </footer>
               `
    }

}

/*============================================
        Footer date
    ============================================*/
    var date = new Date().getFullYear();
    $("#footerDate").text(date);