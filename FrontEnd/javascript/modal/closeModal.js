export const closeModal = (modal, savebar) => {
    document
        .querySelector(".fa-xmark")
        .addEventListener("click", () => {
            savebar.style.display = "none"
            modal.style.display = "none"
        })

   if (!modal) {
    document.RemoveEventListener("click", () => {
            savebar.style.display = "none"
            modal.style.display = "none"
        })
   }     
}