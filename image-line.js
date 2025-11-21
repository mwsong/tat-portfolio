const imageWrappers = document.querySelectorAll('.image-wrapper');
const imageStates = Array(imageWrappers.length).fill(false);

imageWrappers.forEach((wrapper, index) => {
    wrapper.addEventListener('mouseenter', () => {
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