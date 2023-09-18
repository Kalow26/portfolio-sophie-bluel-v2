import { renderGalleryOnScreen } from './renderGalleryOnScreen.js';
import { AllWorks } from '../main.js';


export const filterGallery = () => {
    const allFilterButtons = document.querySelectorAll(".btn--filter");

    allFilterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const buttonId = e.target.name;
        if (buttonId === "") {
          renderGalleryOnScreen(AllWorks);
        } else {
          const filteredArray = AllWorks.filter(
            (work) => work.categoryId == buttonId
          );
          console.log(filteredArray)
          renderGalleryOnScreen(filteredArray);
        }
      });
    });
}