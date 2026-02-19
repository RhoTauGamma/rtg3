const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".gallery img").forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

document.querySelectorAll("nav li > a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            let parent = this.parentElement;
            if (parent.querySelector("ul")) {
                e.preventDefault();
                parent.classList.toggle("open");
            }
        }
    });
});
