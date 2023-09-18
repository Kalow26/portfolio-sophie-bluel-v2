import { getCategories, postNewProject } from "../api/api.js";
import { closeModal } from "./closeModal.js";
import { displayGalleryModal } from "./displayGalleryModal.js";
import { previewModalPicture } from "./previewModalPicture.js";

const modalAddPhoto = `	
                                <div class="modal__content__container">
                                  <h2>Ajout Photo</h2>

                                  <form action="#">
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
                                <button type="submit" class="btn--validate">Valider</button>
                            </div>
                            </div>
                       `
                        ;




export const addPictureToGalleryModal = async (modal, savebar, modalContent, arrowLeft) => {
    modalContent.innerHTML = modalAddPhoto;
    arrowLeft.style.visibility = "visible";

    const categories = await getCategories();
    console.log(categories)

    document.querySelector(".fa-arrow-left").addEventListener("click", () => {
        displayGalleryModal(modal, savebar);
      })

    document.getElementById("file").addEventListener("change", (e) => previewModalPicture(e));

    const catList = document.querySelector("#cat");
    categories.forEach((cat) => {
        const option = document.createElement("option");
        option.value = cat.id; // Set the value property
        option.innerText = cat.name; // Set the innerText property
        catList.appendChild(option);
      });

    const validateButton = document.querySelector(".btn--validate");

    validateButton.addEventListener("click", (event) => 
    {
        event.preventDefault();

        const catIndex = catList.value;
        const titleValue = document.querySelector("#title").value.trim(); // Trim the title value
        const imageValue = document.querySelector("#file").files[0];

        const validateInput = (inputValue, inputElement) => {
        const isValid = inputValue !== "" && inputValue!==undefined;
        inputElement.style.border = isValid ? "none" : "1px solid red";
        return isValid;
        }

        const isImageValid = validateInput(imageValue, document.querySelector(".submit__photos"));
        const isTitleValid = validateInput(titleValue, document.querySelector("#title"));
        const isCatIndexValid = validateInput(catIndex, catList);

        if (isImageValid && isCatIndexValid && isTitleValid) 
        {
            postNewProject(catIndex, titleValue, imageValue);
            modal.style.display = "none";
            savebar.style.display ="none";
        } 
        
        else 
        
        {
            console.log("Fill in the fields");
        }

    })


}