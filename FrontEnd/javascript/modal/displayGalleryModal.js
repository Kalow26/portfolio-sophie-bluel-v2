import { deleteProject } from "../api/api.js";
import { initializeApp } from "../main.js";



export const displayGalleryModal = (AllWorks, modalContentGallery, arrowLeft) => {
  modalContentGallery.style.display="flex";
  const picturesContainer = document.querySelector(".pictures__container");
  console.log(AllWorks.length)
  arrowLeft.style.visibility = "hidden";
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
          
      
          initializeApp.getworks().then(() => {
          initializeApp.renderOnScreen();
          })
        })
        
      } catch (error) {
        console.log(error)
      }
    })
  });

  
  
}