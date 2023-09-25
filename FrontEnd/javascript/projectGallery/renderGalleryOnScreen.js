export const renderGalleryOnScreen = async (projects, galleryContainer) => {

        galleryContainer.innerHTML = "";
    
        projects.forEach((image) => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
                                <img src="${image.imageUrl}" alt="${image.title}">
                                <figcaption>${image.title}</figcaption>
                                `;
    
        galleryContainer.appendChild(figure);
        })
        
}