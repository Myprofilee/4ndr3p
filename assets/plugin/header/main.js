
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
  document.querySelector(".header").innerText = "";
  let currentPage = window.location.pathname.replace(/\/$/, ""); // Menghapus trailing slash

    for (var i = 0; i < curarra.length; i++) {
        document.querySelector(".header").innerHTML += `
        <nav class="navbar">
            <div class="container">
              <div class="menu-container">
                <div class="logo">
                  <a class="navbar-brand me-0" href="/">
                    <i class="ri-heart-2-line logo-icon"></i>
                    <span>andre<span class="primary">p13_</span></span>
                  </a>
                </div>
                <div class="navbar-main d-flex flex-grow-1">
                  <div class="logo inner-logo d-block d-xl-none">
                    <a class="navbar-brand me-0" href="index.html">
                      <i class="ri-heart-2-line logo-icon"></i>
                      <span>andre<span class="primary">p13_</span></span>
                    </a>
                  </div>
                  <ul class="navbar-info mx-auto">

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "" && i === 0 ? 'active' : ''}" aria-current="page" href="/">
                        <i class="ri-home-3-line nav-icon"></i>
                        <span>Home</span>
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/p/about-us" ? 'active' : ''}" href="/p/about-us">
                         <i class="ri-user-smile-fill nav-icon"></i>
                        About
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/p/services" ? 'active' : ''}" href="/p/services">
                        <i class="ri-article-line nav-icon"></i>
                        Services
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/p/projects" ? 'active' : ''}" href="/p/projects">
                        <i class="ri-macbook-line nav-icon"></i>
                        Projects
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/p/blog" ? 'active' : ''}" href="/p/blog">
                        <i class="ri-blogger-line nav-icon"></i>
                        Blog
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/error" ? 'active' : ''}" href="/error">
                        <i class="ri-movie-2-line nav-icon"></i>
                        Video
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link ${currentPage === "/error" ? 'active' : ''}" href="/error">
                        <i class="ri-chat-smile-2-line nav-icon"></i>
                        Contact
                      </a>
                    </li>

                  </ul>

                  <div class="header-right-info d-flex align-items-center">
                    <button class="theme-control-btn">
                      <span class="dark">
                        <i class="ri-moon-line"></i>
                        <small class="theme-text d-block d-xl-none">Change appearance</small>
                      </span>
                      <span class="light">
                        <i class="ri-sun-fill" style="color: #FFCC33;"></i>
                        <small class="theme-text d-block d-xl-none">Change appearance</small>
                      </span>
                    </button>
                    <a href="contact.html" class="lets-talk-btn">
                      Let's Talk
                      <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="mobile-menu-overlay d-block d-lg-none"></div>
                <div class="mobile-menu-control-bar d-block d-xl-none">
                  <button class="mobile-menu-control-bar">
                    <i class="ri-menu-3-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>
               `;
    }
}
