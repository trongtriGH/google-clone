const menu = document.querySelector('.header__navbar-menu');
const profile = document.querySelector('.header__navbar-profile');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

profile.addEventListener('click', () => {
    profile.classList.toggle('active');
});
