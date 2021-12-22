import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = galleryItems.map(({preview, original, description})=> {
  return `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"      
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
   </a>
   </div>
`;
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkUp);
galleryEl.addEventListener("click", openModal);

function openModal(e) {  
  e.preventDefault();
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800px" height="600px">`)
  instance.show();  
}