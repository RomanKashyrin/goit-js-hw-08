// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');
const imageMarkup = createItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', imageMarkup);

function createItemsMarkup(image) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            </a>
        </div>
        `;
        })
        .join("");
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionType: 'alt',
    captionDelay: 250,
});
