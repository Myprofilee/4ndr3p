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

showgallery(galleryarray1, document.querySelector(".list-experiance1"));
showgallery(galleryarray2, document.querySelector(".list-experiance2"));

function showgallery(curarra, sliderElement) {
    for (var i = 0; i < curarra.length; i++) {
        sliderElement.innerHTML += `
        <li>
            <div class="date">
                <p>2022-2024</p>
            </div>
            <div class="info">
                <div class="icon">
                    <img src="/assets/img/card/andrep.png" alt="andrep13_">
                </div>
                <div class="text">
                    <h4 class="title">Design andrep13_</h4>
                    <h6 class="subtitle">By Koraa</h6>
                </div>
            </div>
        </li>

        <li>
            <div class="date">
                <p>2021-2023</p>
            </div>
            <div class="info">
                <div class="icon">
                    <img src="https://www.koraa.my.id/assets/img/logo/koraa.png"
                        alt="andrep13_">
                </div>
                <div class="text">
                    <h4 class="title">Koraa</h4>
                    <h6 class="subtitle">Owner | koraa.my.id</h6>
                </div>
            </div>
        </li>

        <li>
            <div class="date">
                <p>2022-2023</p>
            </div>
            <div class="info">
                <div class="icon">
                    <img src="https://www.hola.web.id/assets/img/favicon.png"
                        alt="andrep13_">
                </div>
                <div class="text">
                    <h4 class="title">Holaa</h4>
                    <h6 class="subtitle">Owner | hola.web.id</h6>
                </div>
            </div>
        </li>

        <li>
            <div class="date">
                <p>2022-2024</p>
            </div>
            <div class="info">
                <div class="icon">
                    <img src="/assets/img/card/andrep.png" alt="andrep13_">
                </div>
                <div class="text">
                    <h4 class="title">Maca</h4>
                    <h6 class="subtitle">Owner | maca.andrep.my.id</h6>
                </div>
            </div>
        </li>
        `;
    }
}
