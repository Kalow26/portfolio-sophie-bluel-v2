import { handleLogout } from "./logout/handleLogout.js";
import { renderGalleryOnScreen } from "./projectGallery/renderGalleryOnScreen.js";
import { createFilterButtons } from "./projectGallery/createFilterButtons.js";
import { getProjects, getCategories } from "./api/api.js";
import { displayGalleryModal } from "./modal/displayGalleryModal.js";
import { addProjectModal } from "./modal/addProjectModal.js";
import { handleCloseModalOnClick } from "./modal/closeModal.js";

const modifyBtn = document.querySelector(".modify__btn");
const filterButtonsContainer = document.getElementById("filter__btn");
const editionBar = document.querySelector(".save__bar");
const modal = document.querySelector(".modal");
const galleryContainer = document.querySelector(".gallery");
const headerLoginButton = document.querySelector("#login-btn");
const modalContentGallery = document.querySelector(".modal__content__container-gallery");
const modalContentSubmitPhotos = document.querySelector(".modal__content__container-addwork");
const arrowLeft = document.querySelector(".fa-arrow-left");
const addPhotoButton = document.querySelector(".btn--addphoto");

let allProjects = [];
let AllCategories = [];

export const initializeApp = {
  getProjects: async function () {
    try {
      allProjects = await getProjects();
    } catch (error) {
      console.error("Erreur lors de la récupération des travaux :", error);
    }
  },
  
  getCategories: async function () {
    try {
      AllCategories = await getCategories();
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  },

  renderOnScreen: function () {
    renderGalleryOnScreen(allProjects, galleryContainer);
  },
  
  createFilterButtons: function () {
    createFilterButtons(
      AllCategories,
      allProjects,
      filterButtonsContainer,
      galleryContainer
    );
  },
};

export const modalManagement = {
  modalGallery: function () {
    displayGalleryModal(
      allProjects,
      modalContentGallery,
      arrowLeft,
      modalContentSubmitPhotos
    );
  },

  modalAddProject: function () {
    addProjectModal(AllCategories, arrowLeft, modalContentSubmitPhotos);
  },

  handleCloseModal: function () {
    handleCloseModalOnClick(
      modal,
      editionBar,
      modalContentSubmitPhotos,
      modalContentGallery
    );
  },
};

initializeApp
  .getProjects()
  .then(() => initializeApp.getCategories())
  .then(() => {
    initializeApp.renderOnScreen();
    initializeApp.createFilterButtons();
  });

if (sessionStorage.token && sessionStorage.id) {
  handleLogout("token", "id", headerLoginButton, modifyBtn);
  filterButtonsContainer.style.visibility = "hidden";
  modifyBtn.style.display = "block";

  modifyBtn.addEventListener("click", () => {
    editionBar.style.display = "block";
    modal.style.display = "flex";
    modalManagement.handleCloseModal();
    modalManagement.modalGallery();
  });

  addPhotoButton.addEventListener("click", () => {
    modalContentGallery.style.display = "none";
    modalManagement.modalAddProject();

    arrowLeft.addEventListener(
      "click",
      () => {
        modalContentSubmitPhotos.style.display = "none";
        modalManagement.modalGallery();
      },
      { once: true }
    );
  });
}
