import { deleteProject } from "../api/api.js";
import { fetchData } from "../main.js";
import { closeModal } from "../modal/closeModal.js";




export const selectProjectstoDelete = (iconsNode) => {
    console.log(iconsNode)
    iconsNode.forEach ((icon) => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
          const projectId = icon.getAttribute("name");
            deleteProject(projectId);
            fetchData()
        })
    })
}