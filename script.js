document.addEventListener('DOMContentLoaded', () => {
    let dark = document.querySelector('.dark-mode-btn');

    dark.addEventListener('click', () => {
        pages = document.querySelectorAll('body');
        pages.forEach(darkModeToggle);
    });
    
    function darkModeToggle(page) {
        page.classList.toggle('dark-mode');  
    };
    
    let images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            let that = this;
            window.open(that.src, '_blank');
        });
    });
});
