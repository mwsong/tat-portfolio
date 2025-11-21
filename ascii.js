//ascii 

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
