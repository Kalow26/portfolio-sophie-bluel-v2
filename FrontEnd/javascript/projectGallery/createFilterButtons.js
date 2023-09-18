// Module import
import { getCategories } from '../api/api.js'
import { filterGallery } from './filterGallery.js';


// Dom Selectors
const filterButtonsContainer = document.getElementById("filter__btn");

export const createFilterButtons = async () => {
    const categories = await getCategories();
    filterButtonsContainer.innerHTML = "";

    const NoFilterButton = document.createElement("button");
    NoFilterButton.innerText="Tous";
    NoFilterButton.classList.add("btn--filter");
    filterButtonsContainer.appendChild(NoFilterButton);

    categories.forEach((element) => {
      const filterButton = document.createElement("button");
      filterButton.innerText = element.name;
      filterButton.name = element.id;
      filterButton.classList.add("btn--filter");
      filterButtonsContainer.appendChild(filterButton);
    });

    filterGallery();
}

