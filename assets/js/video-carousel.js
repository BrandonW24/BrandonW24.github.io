let currentVideoIndex = 0;
const dots = document.querySelectorAll('.carousel-dots .dot');
const videoFrame = document.getElementById('video-frame');
const videoCaption = document.getElementById('video-caption');

function updateVideo(index) {
    // Update the iframe src and caption
    const dot = dots[index];
    videoFrame.src = dot.getAttribute('data-video');
    videoCaption.textContent = dot.getAttribute('data-caption');

    // Update the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentVideoIndex = index;
}

function prevVideo() {
    let newIndex = currentVideoIndex - 1;
    if (newIndex < 0) {
        newIndex = dots.length - 1; // Loop to the last video
    }
    updateVideo(newIndex);
}

function nextVideo() {
    let newIndex = currentVideoIndex + 1;
    if (newIndex >= dots.length) {
        newIndex = 0; // Loop to the first video
    }
    updateVideo(newIndex);
}

function setVideo(index) {
    if (index >= 0 && index < dots.length) {
        updateVideo(index);
    }
}

// Initialize the first video
updateVideo(0);