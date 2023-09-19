import { deleteProject } from "../api/api.js";
import { AllWorks } from "../main.js";
import { addPictureToGalleryModal } from "./addPictureToGalleryModal.js";
import { closeModal } from "./closeModal.js";


const modalContent = document.querySelector(".modal__content__container");
const arrowLeft = document.querySelector(".fa-arrow-left");

const modalGallery = `
                          <h2>Galerie Photo</h2>
                          <div class="pictures__container"></div>
                          <div class="underline"></div>
                          <button class="btn--addphoto">Ajouter une photo</button>
                
                      `;

export const displayGalleryModal = (modal, savebar) => {
  arrowLeft.style.visibility = "hidden";
  modalContent.innerHTML = modalGallery;
  const picturesContainer = document.querySelector(".pictures__container");
  picturesContainer.innerHTML = "";

  AllWorks.forEach((work) => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
                        <img src="${work.imageUrl}" alt="${work.title} class="gallery__image__caption" name="${work.id}">
                        <div class="pictures__container__icons">
                            <i class="fa-solid fa-trash-can" name="${work.id}"></i>
                        </div>
                       `;
    picturesContainer.appendChild(figure);
   
  })

  const deleteIcon = document.querySelectorAll(".fa-trash-can");

  deleteIcon.forEach ((icon) => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();
      const projectId = icon.getAttribute("name");
        deleteProject(projectId);
    })
});
  closeModal(modal, savebar, modalContent);

  document
  .querySelector(".btn--addphoto")
  .addEventListener("click", () => {
    addPictureToGalleryModal(modal, savebar, modalContent, arrowLeft);

  });
};
