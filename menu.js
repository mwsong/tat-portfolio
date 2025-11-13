const menuButton = document.getElementById('menuButton');
const plusSign = document.getElementById('plusSign');
const menuItems = document.getElementById('menuItems');

const fonts = ['Arial', 'Courier New', 'Georgia'];

let currentFontIndex = 0;

setInterval(() => {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    plusSign.style.fontFamily = fonts[currentFontIndex];
}, 2000);

menuButton.addEventListener('mouseenter', ()=>{
    menuButton.classList.add('expanded');
    plusSign.classList.add('hidden');
    menuItems.classList.add('visible');
})

menuButton.addEventListener('mouseleave', () => {
    menuButton.classList.remove('expanded');
    plusSign.classList.remove('hidden');
    menuItems.classList.remove('visible');
});

//video!!! 

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1.play();
video2.play();

// Keep videos in sync
video1.addEventListener('timeupdate', () => {
    if (Math.abs(video1.currentTime - video2.currentTime) > 0.1) {
        video2.currentTime = video1.currentTime;
    }
});