# Portfolio-architecte-sophie-bluel

Code du projet 6 d'intégrateur web.

## Information pour le lancer le code

 - Lancer le backend depuis votre terminal en suivant les instruction du fichier ReadMe.
 - Si vous désirez afficher le code du backend et du frontend, faites le dans 2 instances de VSCode différentes pour éviter tout problème
 
let currentWorks, currentCategories


const initialize = async () => {
  let AllWorks = await getWorks();
  let AllCategories = await getCategories();
  currentCategories = AllCategories;
  currentWorks = AllWorks;
  
createFilterButtons(AllCategories, AllWorks, filterButtonsContainer, galleryContainer)
renderGalleryOnScreen(AllWorks, galleryContainer)
}

initialize()