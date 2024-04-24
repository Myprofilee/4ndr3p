

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

        <!-- Coming Soon -->
          <div class="col-lg-6">
              <div class="article-publications-item">
                <div class="image">
                  <a href="/v/projects/2024/onofy" class="d-block w-100">
                    <img src="/assets/img/project/onofy/onofy.png" class="img-fluid w-100" alt="andrep13_">
                  </a>
                  <a href="/v/projects/2024/onofy" class="tags">New Project</a>
                </div>
                <div class="text">
                  <a href="/v/projects/2024/onofy" class="title">
                    Onofy - Custom Alert, Confirm, and Prompt
                  </a>
                  <ul class="list-unstyled">
                    <li>andrep13_</li>
                    <li>24 April 2024</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="article-publications-item">
                <div class="image">
                  <a href="/v/blog/2024/pembauran-portofolio-andrep" class="d-block w-100">
                    <img src="/assets/img/blog/2024/pembauran-portofolio-andrep/andrep.png" class="img-fluid w-100" alt="andrep13_">
                  </a>
                  <a href="/v/blog/2024/pembauran-portofolio-andrep" class="tags">Update</a>
                </div>
                <div class="text">
                  <a href="/v/blog/2024/pembauran-portofolio-andrep" class="title">
                    Pembaruan tampilan website andrep
                  </a>
                  <ul class="list-unstyled">
                    <li>andrep13_</li>
                    <li>22 April 2024</li>
                  </ul>
                </div>
              </div>
            </div>
        <!-- Coming Soon -->

        </div>
               `
    }

}