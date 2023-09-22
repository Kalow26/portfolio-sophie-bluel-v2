// Module import
import { filterGallery } from './filterGallery.js';


export const createFilterButtons =  (AllCategories, AllWorks, filterButtonsContainer, galleryContainer) => {

    filterButtonsContainer.innerHTML = "";

    const NoFilterButton = document.createElement("button");
    NoFilterButton.innerText="Tous";
    NoFilterButton.classList.add("btn--filter");
    filterButtonsContainer.appendChild(NoFilterButton);

    AllCategories.forEach((element) => {
      const filterButton = document.createElement("button");
      filterButton.innerText = element.name;
      filterButton.name = element.id;
      filterButton.classList.add("btn--filter");
      filterButtonsContainer.appendChild(filterButton);
    });

    filterGallery(AllWorks, galleryContainer);
}

