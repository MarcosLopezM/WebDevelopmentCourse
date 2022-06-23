let links = document.querySelectorAll(".close");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let content = document.querySelector(".content");
        
        content.classList.remove("animate__animated");
        content.classList.remove("animate__zoomIn");

        content.classList.add("animate__animated");
        content.classList.add("animate__rotateOut");
    });
});