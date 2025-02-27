const videos = [
    { src : "https://www.youtube.com/watch?v=ekydofPcQHk", caption: "From Feb. 27th, 2025"},
    { src: "https://www.youtube.com/watch?v=F_ZlCs3QVNY", caption: "From Feb. 24th, 2025" },
    { src: "https://www.youtube.com/embed/3-vVpFSisxE", caption: "From Feb. 19th, 2025" },
    { src: "https://www.youtube.com/embed/Hgjjfns1nXw", caption: "From Feb. 7, 2025" },
    { src: "https://www.youtube.com/embed/dnzlw88Q8FI", caption: "From Dec. 31, 2024" }
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
