window.addEventListener("load", function() {
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");

    setTimeout(() => {
        loader.style.opacity = "0"; // Se desvanece
        setTimeout(() => {
            loader.style.display = "none"; // Se oculta completamente
            content.classList.remove("hidden"); // Muestra el contenido
        }, 500); // 500ms después de desaparecer, lo oculta
    }, 2000); // 2 segundos de espera
});
