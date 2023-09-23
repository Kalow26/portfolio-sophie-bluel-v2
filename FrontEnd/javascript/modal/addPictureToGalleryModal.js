import { getCategories, postNewProject } from "../api/api.js";
import { displayGalleryModal } from "./displayGalleryModal.js";
import { previewModalPicture } from "./previewModalPicture.js";

const newFormData = []
export const addPictureToGalleryModal = (
  modal,
  editionBar,
  modalContentGallery,
  arrowLeft,
  AllCategories,
  modalContentSubmitPhotos
) => {
  
  modalContentSubmitPhotos.style.display="flex"
  
  arrowLeft.style.visibility = "visible";
  
  const submitForm = document.querySelector("#submit-project");
  const validateButton = document.querySelector(".btn--validate");
  const catList = document.querySelector("#cat");
  catList.innerHTML="";
  
  validateButton.removeEventListener("click", handleValidationClick);

  document
    .querySelector("#file")
    .addEventListener("change", (e) => previewModalPicture(e));

  AllCategories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.innerText = cat.name;
    catList.appendChild(option);
  });

  submitForm.addEventListener("change", () =>
    handleFormChange(catList, validateButton, modal, editionBar)
  );

  

  function handleFormChange(catList, validateButton, modal, editionBar) {
    const catIndex = catList.value;
    const titleValue = document.querySelector("#title").value.trim();
    const imageValue = document.querySelector("#file").files[0];

    if (catIndex && titleValue && imageValue) {
     newFormData.push({cat :catIndex, title: titleValue, img: imageValue})

      validateButton.removeAttribute("disabled"); 
      validateButton.addEventListener("click", handleValidationClick);
      
    }
  }
  
}

export const handleValidationClick = (event) => {
  event.preventDefault();
  console.log(newFormData[0].cat, newFormData[0].title, newFormData[0].img)
  postNewProject(newFormData[0].cat, newFormData[0].title, newFormData[0].img);
};



