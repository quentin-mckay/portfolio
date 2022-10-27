// ====== Hook variables up to DOM ======
const menuButtonBurger = document.querySelector('.menu-btn-burger')
const menuButtonX = document.querySelector('.menu-btn-x')
const nav = document.querySelector('nav')

const header = document.querySelector('header')
const blurLayer = document.querySelector('.blur-layer')

// window.pageYOffset starts at 0 and increases as you scroll down
let prevScrollPos = window.pageYOffset

window.addEventListener('scroll', () => {

    const currentScrollPos = window.pageYOffset
    
    // if scrolling down
    if (currentScrollPos > prevScrollPos) {
        // header.style.top = "-50px"
        // header.style.transform = "translateY(-100%)"
        header.classList.add('hide-header')
        // console.log('down')
    }
    // if scrolling up
    else {
        // header.style.top = "0"
        // header.style.transform = "initial"
        header.classList.remove('hide-header')
        // console.log('up')
    }
    
    prevScrollPos = currentScrollPos
})


// on mobile menu open
menuButtonBurger.addEventListener('click', () => {
    console.log('open button clicked');

    // add class which transform: translate(0) which shows mobile menu
    nav.classList.add('open-nav')


    // menuButtonX.classList.add('menu-btn-x-show')
    menuButtonX.style.display = "block"

    // disable scrolling
    document.body.classList.add('disable-scroll')

    blurLayer.classList.add('blur')
})

// on mobile menu close
menuButtonX.addEventListener('click', () => {
    console.log('close button clicked')

    nav.classList.remove('open-nav')
    // menuButtonX.classList.remove('menu-btn-show')
    menuButtonX.style.display = "none"

    // enable scrolling
    document.body.classList.remove('disable-scroll')


    blurLayer.classList.remove('blur')
})