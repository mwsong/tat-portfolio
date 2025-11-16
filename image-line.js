const container = document.getElementById('imageContainer');
const imageWrappers = document.querySelectorAll('.image-wrapper');
let lastScrollY = 0;
let isSpread = false;

const imageStates = Array(imageWrappers.length).fill(false); // false = main, true = alt

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY > windowHeight * 0.3 && !isSpread) {
        container.classList.remove('stacked');
        container.classList.add('spread');
        isSpread = true;
    } 
    else if (scrollY < windowHeight * 0.3 && isSpread) {
        container.classList.remove('spread');
        container.classList.add('stacked');
        isSpread = false;
    }

    lastScrollY = scrollY;
});

imageWrappers.forEach((wrapper, index) => {
    wrapper.addEventListener('mouseenter', () => {
        if (!isSpread) return; 

        const mainImg = wrapper.querySelector('.main-image');
        const altImg = wrapper.querySelector('.alt-image');
        
        wrapper.classList.add('pixelating');

        if (!imageStates[index]) {
         
            setTimeout(() => {
                mainImg.style.opacity = '0';
                altImg.style.opacity = '1';
                imageStates[index] = true;
            }, 250);
        } else {
            setTimeout(() => {
                mainImg.style.opacity = '1';
                altImg.style.opacity = '0';
                imageStates[index] = false;
            }, 250);
        }

        setTimeout(() => {
            wrapper.classList.remove('pixelating');
        }, 500);
    });
});