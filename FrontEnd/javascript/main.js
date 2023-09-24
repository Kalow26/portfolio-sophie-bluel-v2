import { handleLogout } from "./logout/handleLogout.js";
import { renderGalleryOnScreen } from "./projectGallery/renderGalleryOnScreen.js";
import { createFilterButtons } from "./projectGallery/createFilterButtons.js";
import { getWorks, getCategories } from "./api/api.js";
import { displayGalleryModal } from "./modal/displayGalleryModal.js";
import {
  addPictureToGalleryModal,
  handleValidationClick,
} from "./modal/addPictureToGalleryModal.js";
import { handleCloseModal } from "./modal/closeModal.js";

const modifyBtn = document.querySelector(".modify__btn");
const filterButtonsContainer = document.getElementById("filter__btn");
const editionBar = document.querySelector(".save__bar");
const modal = document.querySelector(".modal");
const galleryContainer = document.querySelector(".gallery");
const headerLoginButton = document.querySelector("#login-btn");
const modalContentGallery = document.querySelector(
  ".modal__content__container-gallery"
);
const modalContentSubmitPhotos = document.querySelector(
  ".modal__content__container-addwork"
);
const arrowLeft = document.querySelector(".fa-arrow-left");
const validateButton = document.querySelector(".btn--validate");
const addPhotoButton = document.querySelector(".btn--addphoto");




const AllWorks = await getWorks();
const AllCategories = await getCategories();


createFilterButtons(
  AllCategories,
  AllWorks,
  filterButtonsContainer,
  galleryContainer
);
renderGalleryOnScreen(AllWorks, galleryContainer);

if (sessionStorage.token && sessionStorage.id) {
  handleLogout("token", "id", headerLoginButton, modifyBtn);
  filterButtonsContainer.style.visibility = "hidden";
  modifyBtn.style.display = "block";

  modifyBtn.addEventListener("click", () => {
    editionBar.style.display = "block";
    modal.style.display = "flex";
    handleCloseModal(
      modal,
      editionBar,
      modalContentSubmitPhotos,
      modalContentGallery
    );
    displayGalleryModal(
      AllWorks,
      modalContentGallery,
      arrowLeft
    );
  });

  addPhotoButton.addEventListener("click", () => {

    modalContentGallery.style.display = "none";
    addPictureToGalleryModal(
      arrowLeft,
      AllCategories,
      modalContentSubmitPhotos
    );

    
    arrowLeft.addEventListener("click", () => {
      let isGalleryModalVisible = true;
      modalContentSubmitPhotos.style.display = "none";
      modalContentGallery.style.display = isGalleryModalVisible ? "flex" : "none";
      arrowLeft.style.visibility = "hidden";
      isGalleryModalVisible = !isGalleryModalVisible;
      validateButton.removeEventListener("click", handleValidationClick);
    });
  });
}
