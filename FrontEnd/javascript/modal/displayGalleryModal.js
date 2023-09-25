import { deleteProject } from "../api/api.js";
import { initializeApp } from "../main.js";



export const displayGalleryModal = (allProjects, modalContentGallery, arrowLeft, modalContentSubmitPhotos) => {
  modalContentSubmitPhotos.style.display = "none";
  modalContentGallery.style.display= "flex";
  const picturesContainer = document.querySelector(".pictures__container");
  arrowLeft.style.visibility = "hidden";
  picturesContainer.innerHTML = "";

  allProjects.forEach((image) => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
                        <img src="${image.imageUrl}" alt="${image.title} class="gallery__image__caption" name="${image.id}">
                        <div class="pictures__container__icons">
                            <i class="fa-solid fa-trash-can" name="${image.id}"></i>
                        </div>
                       `;
    picturesContainer.appendChild(figure);
  })
  handleDeleteProject()
}


const handleDeleteProject = () => {
  const deleteIcon = document.querySelectorAll(".fa-trash-can");

  deleteIcon.forEach ((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault()
      const projectId = icon.getAttribute("name");
      try {
        deleteProject(projectId).then (() => {
          const figure = icon.closest("figure");
          if (figure) {
            figure.remove();
          }
          
      
          initializeApp.getProjects().then(() => {
          initializeApp.renderOnScreen();
          })
        })
        
      } catch (error) {
        console.log(error)
      }
    })
  });

  
  
}