const menuButton = document.querySelector('.menu-btn')
const nav = document.querySelector('nav')

menuButton.addEventListener('click', () => {
    console.log('menu button clicked');
    nav.classList.add('open-nav')
})