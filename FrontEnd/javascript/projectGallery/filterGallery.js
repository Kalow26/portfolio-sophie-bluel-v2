import { renderGalleryOnScreen } from './renderGalleryOnScreen.js';



export const filterGallery = (AllWorks, galleryContainer) => {
    const allFilterButtons = document.querySelectorAll(".btn--filter");

    allFilterButtons.forEach((button) => {
      
      button.addEventListener("click", (e) => {
        const buttonId = e.target.name;
        if (buttonId === "") {
          renderGalleryOnScreen(AllWorks, galleryContainer);
        } else {
          const filteredArray = AllWorks.filter(
            (work) => work.categoryId == buttonId
          );
          console.log(filteredArray)
          renderGalleryOnScreen(filteredArray, galleryContainer);
        }
      });
    });
}