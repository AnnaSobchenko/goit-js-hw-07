import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
  galleryEl: document.querySelector(".gallery"),
  divImage: document.querySelector(".gallery__image"),
//   btnClose: document.querySelector(".lightbox__button"),
  overlayEl: document.querySelector(".lightbox__overlay")
};

const galleryMarkUp = galleryItems.map(({preview, original, description})=> {
  return `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
      data-lightbox="lbox"
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

refs.galleryEl.insertAdjacentHTML("afterbegin", galleryMarkUp);

refs.galleryEl.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") return false
    const dataSource = e.target.dataset.source;
    console.log(dataSource);

  refs.galleryEl.classList.add("is-open");
  refs.divImage.src = dataSource;
  document.addEventListener("keydown", closeModalEscape);
}

// refs.btnClose.addEventListener("click", closeModal);
function closeModal(e) {
  refs.galleryEl.classList.remove("is-open");
  refs.divImage.src = "";
  document.removeEventListener("keydown", closeModalEscape);
}

refs.overlayEl.addEventListener('click', closeModal);

function closeModalEscape(e) {
  // console.log();
  if (e.code === "Escape") {
    closeModal();
  }
}