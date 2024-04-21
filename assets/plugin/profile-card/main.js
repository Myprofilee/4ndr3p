
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
    document.querySelector(".profile-card").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".profile-card").innerHTML += `
        <div class="card profile-card">
          <div class="card-body">
            <div class="image text-center">
              <img src="/assets/img/card/andrep.png" alt="andrep13_">
            </div>
            <div class="text">
              <h3 class="card-title">andrep13_ 👋</h3>
              <p>A Passionate <span>Front end Developer</span> 🖥️.</p>
              <div class="common-button-groups">
                <a class="btn btn-call" href="#">
                    <i class="ri-phone-line"></i>
                  Book A call
                </a>
                <button class="btn btn-copy" data-clipboard-text="andrep13.id@gmail.com">
                    <i class="ri-mail-line"></i>
                  Copy Email
                </button>
              </div>
              <div class="social-media-icon">
                <ul class="list-unstyled">
                  <li><a href="https://www.instagram.com/andrep13_/"><i class="ri-instagram-line"></i></a></li>
                  <li><a href="https://www.tiktok.com/@andrep13_"><i class="ri-tiktok-fill"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
               `
    }

}