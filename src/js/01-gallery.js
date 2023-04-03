// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
/*
  1.  Додай бібліотеку SimpleLightbox як залежність проекту, 
  використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
  2.  Використовуй свій JavaScript код з попередньої домашньої роботи, 
  але виконай рефакторинг з урахуванням того, 
  що бібліотека була встановлена через npm (синтаксис import/export).
Для того щоб підключити CSS код бібліотеки в проект, 
необхідно додати ще один імпорт, крім того, що описаний в документації.
*/
const bodyElement = document.querySelector("body");
const listEl = document.querySelector(".gallery");

bodyElement.style.backgroundColor = "grey";

listEl.insertAdjacentHTML("beforeend", createListElementsMarkup(galleryItems));

function createListElementsMarkup(data) { 
    return data.map(({ description, preview, original }) => 
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `
    ).join('')
}

new SimpleLightbox(
    '.gallery a', {
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
        enableKeyboard: true,
    }
)
