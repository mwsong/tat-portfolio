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