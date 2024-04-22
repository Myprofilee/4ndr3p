let filterarray = [];

let galleryarray1 = [
    {
        id: 1,
    },
    // ... tambahkan item lain jika diperlukan
];

let galleryarray2 = [
    {
        id: 2,
    },
    // ... tambahkan item lain jika diperlukan
];

showgallery(galleryarray1, document.querySelector(".work-together-slider1"));
showgallery(galleryarray2, document.querySelector(".work-together-slider2"));

function showgallery(curarra, sliderElement) {
    for (var i = 0; i < curarra.length; i++) {
        sliderElement.innerHTML += `
        <div class="slider-item">
          <a href="javascript:void()">Front End Developer</a>
          <a href="contact.html">Let's 👋 Work Together</a>
        </div>
        `;
    }
}
