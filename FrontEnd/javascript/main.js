import {Logout} from "./logout/logout.js"
import { renderGalleryOnScreen } from "./projectGallery/renderGalleryOnScreen.js";
import { createFilterButtons } from "./projectGallery/createFilterButtons.js";
import { getWorks } from "./api/api.js";
import { displayModal } from "./modal/displayModal.js";

export let AllWorks = []

const modifyBtn = document.querySelector(".modify__btn");
const filterButtonsContainer = document.getElementById("filter__btn");

window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.token && sessionStorage.id) {
    Logout("token", "id");
    filterButtonsContainer.style.visibility = "hidden"
    modifyBtn.style.display = "block";
    modifyBtn.addEventListener("click", () => displayModal())
    
  } 
})


export async function fetchData() {
  const data = await getWorks();
  AllWorks = data;
  renderGalleryOnScreen(AllWorks);
}

fetchData();
createFilterButtons()
  
