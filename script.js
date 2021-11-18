document.addEventListener('DOMContentLoaded', () => {
    let dark = document.querySelector('.dark-mode-btn');

    dark.addEventListener('click', () => {
        pages = document.querySelectorAll('body');
        pages.forEach(darkModeToggle);
    });
    
    function darkModeToggle(page) {
        page.classList.toggle('dark-mode');  
    };
});
