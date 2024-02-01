// JavaScript для активации скрытого меню
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        menuIcon.classList.toggle('close');

    });
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    this.classList.toggle('close');
});

