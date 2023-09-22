export const renderGalleryOnScreen = async (works, galleryContainer) => {

        galleryContainer.innerHTML = "";
    
        works.forEach((work) => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
                                <img src="${work.imageUrl}" alt="${work.title}">
                                <figcaption>${work.title}</figcaption>
                                `;
    
        galleryContainer.appendChild(figure);
        })
        
}