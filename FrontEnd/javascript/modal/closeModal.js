export const closeModal= (...allContainers) => {
    console.log("hello")
        for (const elem of allContainers) {
    elem.style.display="none"
}
}


export const handleCloseModalOnClick = (...allContainers) => {
    document
        .querySelector(".fa-xmark").addEventListener("click", () => closeModal(...allContainers))

}


