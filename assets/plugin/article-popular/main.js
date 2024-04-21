

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
    document.querySelector(".list-article").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".list-article").innerHTML += `
        <div class="row article-publications-slider">

        <!-- Coming Soon --
            <div class="col-lg-6">
              <div class="article-publications-item">
                <div class="image">
                  <a href="article.html" class="d-block w-100">
                    <img src="assets/img/blog/blog-img-2.jpg" class="img-fluid w-100" alt="andrep13_">
                  </a>
                  <a href="article.html" class="tags">Development</a>
                </div>
                <div class="text">
                  <a href="article.html" class="title">Want To Upgrade Your Brain? Stop Doing These 7
                    Things</a>
                  <ul class="list-unstyled">
                    <li>By andrep13_</li>
                    <li>22 April 2024</li>
                  </ul>
                </div>
              </div>
            </div>
        <!-- Coming Soon -->

        </div>

        <script src="assets/js/script.js"></script>
               `
    }

}