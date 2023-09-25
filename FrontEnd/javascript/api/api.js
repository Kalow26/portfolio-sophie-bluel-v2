const serverUrl = "http://localhost:5678/api";
const token = sessionStorage.getItem("token");

export const login = async (user) => {
    try {
        const userInfo = await fetch (`${serverUrl}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(user),
        });
        const response = await userInfo.json();
        if (response) {
            return (response)
        }
    } catch (error) {
      console.error(error)
    }
}

export const deleteProject = async (id) => {
    try {
      const url =`${serverUrl}/works/${id}`
       await fetch(url, {
        method: 'DELETE',
        headers: {
          'accept':'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
    } catch (error) {
      console.log("error", error);
    }
}

export const getWorks = async () => {
    try {
        const works = await fetch (`${serverUrl}/works`)
        const response = await works.json();
        if (response) {
            return (response)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCategories = async () => {
    try {
        const categories = await fetch (`${serverUrl}/categories`)
        const response = await categories.json();
        if (response) {
            return (response)
        }
    } catch (error) {
        console.log(error)
    }

}

export const postNewProject = async (index, title, imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile, imageFile.name);
    formData.append("title", title);
    formData.append("category", index);
    try { 
       await fetch(`${serverUrl}/works`, {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      } catch (e) {
        console.error("error", e);
      }
}