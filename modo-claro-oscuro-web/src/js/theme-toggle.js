// Archivo que contiene la lógica para alternar entre el modo claro y oscuro

document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});