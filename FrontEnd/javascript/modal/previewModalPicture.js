export const previewModalPicture = (e) => {
    const image = document.getElementById("preview");
    const [picture] = e.target.files;
    const types = ["image/jpg", "image/jpeg", "image/png"];

    if (types.includes(picture.type)) {
      const reader = new FileReader();

      reader.onload = (e) => {
        image.src = e.target.result
      }

      reader.readAsDataURL(picture)
    }
  }