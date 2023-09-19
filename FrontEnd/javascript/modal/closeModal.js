export const closeModal = (modal, savebar, modalContent) => {
    document
        .querySelector(".fa-xmark")
        .addEventListener("click", () => {
            savebar.style.display = "none"
            modalContent.innerHTML = "";
            modal.style.display = "none"
        })

   if (!modal) {
    document.RemoveEventListener("click", () => {
            savebar.style.display = "none"
            modalContent.innerHTML = "";
            modal.style.display = "none"
        })
   }     
}