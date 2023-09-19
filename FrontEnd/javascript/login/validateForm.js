export const validateForm = (inputElement, alertMessage, errorMessage) => {

    const isValid = inputElement.value !== "";
    alertMessage.style.visibility = isValid ? "hidden" : "visible";
    alertMessage.innerHtml = isValid ? "" : errorMessage;
    inputElement.style.border = isValid ? "none" : "1px solid red";
    return isValid
}