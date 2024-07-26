document.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector('main');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    // Navigation
    // code goes here

    // animations
    // code goes here

    // Timeline
    // code goes here
    const timeline = document.querySelector('.timeline');
    const timelineArr = [6, 1];

    // dark mode
    function darkMode() {
        main.classList.toggle('dark');
        header.classList.toggle('dark');
        footer.classList.toggle('dark');
    }
});