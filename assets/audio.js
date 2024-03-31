const video = document.getElementById('video-bg');
const enterButton = document.getElementById('enter');

function playVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.currentTime = 0;
    }
}

enterButton.addEventListener('click', function () {
    console.log('click');
    const element = document.getElementById('enter-remove') || document.getElementById('enter');
    element.style.opacity = '0';
    element.addEventListener('transitionend', () => element.remove());
    typeof window.orientation == 'undefined' && playVideo(); 
});

video.onended = function () {
    playVideo(); 
};
