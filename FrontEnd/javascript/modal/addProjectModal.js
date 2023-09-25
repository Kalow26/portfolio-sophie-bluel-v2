import { postNewProject } from "../api/api.js";
import { initializeApp, modalManagement } from "../main.js";
import { previewModalPicture } from "./previewModalPicture.js";

const submitForm = document.querySelector("#submit-project");
const validateButton = document.querySelector(".btn--validate");
const projectCategoriesList = document.querySelector("#cat");
const projectFile = document.querySelector("#file")
const projectTitle = document.querySelector("#title")
const projectImage = document.getElementById("preview");

let newProjectData = {}
export const addProjectModal = (AllCategories, arrowLeft, modalContentSubmitPhotos) => {

  modalContentSubmitPhotos.style.display = "flex";
  arrowLeft.style.visibility = "visible";

  projectCategoriesList.innerHTML = "";
  
  projectFile.addEventListener("change", (e) => previewModalPicture(e));

  AllCategories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.innerText = cat.name;
    projectCategoriesList.appendChild(option);
  });

  submitForm.addEventListener("change", () =>
    handleFormChange(projectCategoriesList, validateButton)
  );

};


const handleFormChange = (projectCategoriesList, validateButton) =>  {
  const catIndex = projectCategoriesList.value;
  const titleValue = projectTitle.value.trim();
  const imageValue = projectFile.files[0];

  if (catIndex && titleValue && imageValue) {

     newProjectData = { cat: catIndex, title: titleValue, img: imageValue };

    validateButton.removeAttribute("disabled");
    validateButton.addEventListener("click", handleValidationClick, {once: true});
  }
}

const handleValidationClick = (event) => {
  event.preventDefault();
  const {cat, title, img} = newProjectData
  try {
    postNewProject(cat, title, img).then (() => {
      initializeApp.getProjects().then (() => {
        initializeApp.renderOnScreen()
        projectCategoriesList.value = "";
        projectTitle.value = "";
        projectFile.value = "";
        projectImage.src = "./assets/images/icone.svg";
        projectImage.alt = "";
        validateButton.setAttribute("disabled", "true");
        modalManagement.modalGallery()
      })
    })
  } catch (error) {
    console.log(error)
  }
};



