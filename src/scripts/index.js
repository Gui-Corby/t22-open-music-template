import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";

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

generateAlbumsList(albumList);