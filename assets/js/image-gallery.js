let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item");

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Initialize gallery
showImage(currentIndex);
