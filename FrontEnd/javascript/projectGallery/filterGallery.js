import { renderGalleryOnScreen } from './renderGalleryOnScreen.js';



export const filterGallery = (allProjects, galleryContainer) => {
    const allFilterButtons = document.querySelectorAll(".btn--filter");

    allFilterButtons.forEach((button) => {
      
      button.addEventListener("click", (e) => {
        const buttonId = e.target.name;
        if (buttonId === "") {
          renderGalleryOnScreen(allProjects, galleryContainer);
        } else {
          const filteredArray = allProjects.filter(
            (project) => project.categoryId == buttonId
          );
          renderGalleryOnScreen(filteredArray, galleryContainer);
        }
      });
    });
}