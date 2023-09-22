import { handleLogout } from "./logout/handleLogout.js"
import { renderGalleryOnScreen } from "./projectGallery/renderGalleryOnScreen.js";
import { createFilterButtons } from "./projectGallery/createFilterButtons.js";
import { getWorks, getCategories } from "./api/api.js";
import { displayGalleryModal } from './modal/displayGalleryModal.js'
import { addPictureToGalleryModal } from "./modal/addPictureToGalleryModal.js";
import { handleCloseModal } from "./modal/closeModal.js";



const modifyBtn = document.querySelector(".modify__btn");
const filterButtonsContainer = document.getElementById("filter__btn");
const editionBar = document.querySelector(".save__bar");
const modal = document.querySelector(".modal");
const galleryContainer = document.querySelector(".gallery");
const headerLoginButton = document.querySelector("#login-btn");
const modalContentGallery = document.querySelector(".modal__content__container-gallery");
const modalContentSubmitPhotos = document.querySelector(".modal__content__container-addwork");
const arrowLeft = document.querySelector(".fa-arrow-left");




  const AllWorks = await getWorks();
  const AllCategories = await getCategories();


  if (sessionStorage.token && sessionStorage.id) {
    handleLogout("token", "id", headerLoginButton, modifyBtn);
    filterButtonsContainer.style.visibility = "hidden"
    modifyBtn.style.display = "block";
  
    modifyBtn.addEventListener("click", () => {
      editionBar.style.display = "block"
      modal.style.display = "flex"
  
      handleCloseModal(modal, editionBar, modalContentSubmitPhotos, modalContentGallery)
    
  
    displayGalleryModal(AllWorks, modal, editionBar, modalContentGallery, arrowLeft,);
  
    document
    .querySelector(".btn--addphoto")
    .addEventListener("click", () => {
      modalContentGallery.style.display="none";
      addPictureToGalleryModal(modal, editionBar, modalContentGallery, arrowLeft, AllCategories, modalContentSubmitPhotos);
      console.log("click")
      arrowLeft.addEventListener("click", () => {
        modalContentSubmitPhotos.style.display="none";
        displayGalleryModal(AllWorks, modal, editionBar, modalContentGallery, arrowLeft, modalContentSubmitPhotos);
      });
    });
   
    })
  }




  createFilterButtons(AllCategories, AllWorks, filterButtonsContainer, galleryContainer)
  renderGalleryOnScreen(AllWorks, galleryContainer)



  

