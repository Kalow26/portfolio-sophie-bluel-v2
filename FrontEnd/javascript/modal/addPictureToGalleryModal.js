import { getCategories, postNewProject } from "../api/api.js";
import { displayGalleryModal } from "./displayGalleryModal.js";
import { previewModalPicture } from "./previewModalPicture.js";

const modalAddPhoto = `	
                                <div class="modal__content__container">
                                  <h2>Ajout Photo</h2>

                                  <form action="#" id="submit-project">
                                  <div class="submit__photos">
                                    <img src="./assets/images/icone.svg" alt="" id="preview">
                                    <label for="file">+ Ajouter photo</label>
                                    <input type="file" name="file" id="file" accept=".jpg, .png">
                                    <span>jpg, png : 4mo max</span>
                                  </div>
                                  <div class="title">
                                    <label for="title">Titre</label>
                                    <input type="text" name="title" id="title" onfocus="this.value=''">
                                  </div>
                                  <div class="title">
                                    <label for="cat">Catégorie</label>
                                        <select name="cat" id="cat">
                                            <option value="">Choisissez une catégorie</option>
                                        </select>
                                  </div>
                                </form>
                                
                                <div><p class="preview__postproject"></p></div>
                                <div class="underline"></div>
                                <button type="submit" class="btn--validate" disabled>Valider</button>
                            </div>
                            </div>
                       `
                        ;



export const addPictureToGalleryModal = async (modal, savebar, modalContent, arrowLeft) => {

  modalContent.innerHTML = modalAddPhoto;
  arrowLeft.style.visibility = "visible";
  
  const categories = await getCategories();
  const submitForm = document.querySelector("#submit-project");
  const validateButton = document.querySelector(".btn--validate");
  const catList = document.querySelector("#cat");


  document.querySelector(".fa-arrow-left").addEventListener("click", () => {
    displayGalleryModal(modal, savebar);
  });
  
  document.querySelector("#file").addEventListener("change", (e) => previewModalPicture(e));
  
  categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat.id;
      option.innerText = cat.name;
      catList.appendChild(option);
  });

      submitForm.addEventListener("change", () => {
          const catIndex = catList.value;
          const titleValue = document.querySelector("#title").value.trim();
          const imageValue = document.querySelector("#file").files[0];
          if (catIndex && titleValue && imageValue) {
              validateButton.removeAttribute("disabled")
              validateButton.addEventListener("click", (event) => {
                event.preventDefault();
                postNewProject(catIndex, titleValue, imageValue);
                modal.style.display = "none";
                savebar.style.display = "none";
              }
      )}
      });


  }
      
