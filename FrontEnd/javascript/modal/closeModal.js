export const handleCloseModal = (...allContainers) => {
   
    document
        .querySelector(".fa-xmark").addEventListener("click", () => {

            for (const elem of allContainers) {
                elem.style.display="none"
            }
        })

}