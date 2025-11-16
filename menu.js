const menuButton = document.getElementById('menuButton');
const plusSign = document.getElementById('plusSign');
const menuItems = document.getElementById('menuItems');

const fonts = [
        'Arial',
        'Courier New',
        'Georgia',
        'Times New Roman',
        'Verdana',
        'Impact',
        'Comic Sans MS',
        'Libre Barcode 128 Text'
    ];

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

//changing font n shi 

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('ascii-grid');
    const chars = ['%', '$', '#', '.', '@', '&', '!'];
    
    const columns = Math.floor(window.innerWidth / 60);
    const rows = Math.floor(window.innerHeight / 60);
    const total = columns * rows;

    for (let i = 0; i < total; i++) {
        const span = document.createElement('span');
        span.className = 'ascii-char';
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.dataset.original = span.textContent;
       
        span.addEventListener('mouseenter', () => {
            span.textContent = '*';
        });
        
        span.addEventListener('mouseleave', () => {
                span.textContent = span.dataset.original;
        });
        
        grid.appendChild(span);
    }
});