const videos = [
    { src: "https://www.youtube.com/embed/3-vVpFSisxE", caption: "From Feb. 19th, 2025" },
    { src: "https://www.youtube.com/embed/Hgjjfns1nXw", caption: "From Feb. 7, 2025" },
    { src: "https://www.youtube.com/embed/dnzlw88Q8FI", caption: "From Dec. 31, 2024" },
    { src: "https://www.youtube.com/embed/DRTKVYvbR9w", caption: "Runtime Ragdoll Overview" },
    { src: "https://www.youtube.com/embed/iqv8YVANCNg?si=yGqixcs8vqKHBs-O", caption: "Softbody Vehicle Damage" },
    { src: "https://www.youtube.com/embed/qMM47nZQPXQ?si=S9XCplKsN6yyuARC", caption: "Procedural Mesh Fracturing" }
];

let currentIndex = 0;

function updateVideo() {
    document.getElementById("video-frame").src = videos[currentIndex].src;
    document.getElementById("video-caption").textContent = videos[currentIndex].caption;
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    updateVideo();
}

function setVideo(index) {
    currentIndex = index;
    updateVideo();
}
