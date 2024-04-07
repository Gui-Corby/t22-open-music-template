import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { themeChange, themeAnalasys } from "./theme.js";
import { getData } from "./api.js";

function routine() {
    applyInputRangeStyle();
}

routine();

function generateAlbumsList(albums) {
    const albumListContainer = document.querySelector('.album-list');

    albums.forEach(album => {
        const listItem = document.createElement('li');
        listItem.classList.add('album-item');

        listItem.innerHTML = `
        <img src="${album.img}">
        <h2 class="item_title"> ${album.title} </h2>

        <div class="item_description">
            <p>${album.band}</p>
            <p>${album.genre}</p>
        </div>

        <div class="item_price-buy">
           <p>R$ ${album.price}</p>
           <button>Comprar</button>
        </div>

        `;

        albumListContainer.appendChild(listItem)
    });
}
// generateAlbumsList(albumList);

getData()
    // .then(response => {
    //     console.log('API response:', response);
    //     return response.json();
    // })
    .then(apiData => {
        generateAlbumsList(apiData);
    })
    .catch(error => {
        console.log('Error fetching data from the API:', error);
    });



const inputRange = document.querySelector('.range-selection--input');
const priceDisplay = document.querySelector('.range-selection--price_display span');

inputRange.addEventListener("input", (event) => {
    event.preventDefault();
    const minPrice = parseInt(inputRange.value);
    priceDisplay.textContent = `R$ ${minPrice}`;
    const filteredAlbums = inputRange.value ? apiData.filter(apiDataAlbum => parseFloat(apiDataAlbum.price) <= minPrice)
    : apiData; 
    generateAlbumsList(filteredAlbums);
})

themeAnalasys();
