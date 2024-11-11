function toggleMode() {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Comprobar la preferencia guardada del usuario
window.onload = function() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
};









