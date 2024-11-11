function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (name === "") {
        errorMessage.textContent = "Por favor, ingresa tu nombre.";
        return false;
    }

    if (email === "") {
        errorMessage.textContent = "Por favor, ingresa tu email.";
        return false;
    }

    if (message === "") {
        errorMessage.textContent = "Por favor, escribe un mensaje.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Formulario enviado exitosamente!");
    return true;
}







