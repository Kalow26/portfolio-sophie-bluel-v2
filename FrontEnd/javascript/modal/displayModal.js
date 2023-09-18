import { displayGalleryModal } from "./displayGalleryModal.js";

const saveBar = document.querySelector(".save__bar");
const modal = document.querySelector(".modal");


export const displayModal = () => {
    saveBar.style.display = "block"
    modal.style.display = "flex"

    displayGalleryModal(modal, saveBar);
}