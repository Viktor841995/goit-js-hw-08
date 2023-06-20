// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from '/node_modules/simplelightbox';
// Change code below this line

console.log(galleryItems);

const galleryList= document.querySelector(".gallery");
const imgCard = createImgCard (galleryItems);
galleryList.insertAdjacentHTML ("beforeend", imgCard);
galleryList.addEventListener("click", onImgCardClick);
function createImgCard (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
        </a>
        </li>
        `;
    }).join(" ");
    }
    function onImgCardClick(evt) {
        evt.preventDefault();    
        // if (!evt.target.classlist.contains("gallery__image")) {
        //     return;
        // }
        console.log (evt.target)
    }
const lightbox = new SimpleLightbox(".gallery__link",
{ captionsData: "alt", captionDelay: "250" })
