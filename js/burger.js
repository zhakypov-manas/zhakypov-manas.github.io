window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar'),
    menuItem = document.querySelectorAll('.link'),
    hamburger = document.querySelector('.men_u');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('.men_u');
        menu.classList.toggle('_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.toggle('.men_ux');
            menu.classList.toggle('__active');
        })
    })
})