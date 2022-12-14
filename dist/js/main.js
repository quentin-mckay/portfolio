// ====== Hook variables up to DOM ======
const menuButtonBurger = document.querySelector('.menu-btn-burger')
const menuButtonX = document.querySelector('.menu-btn-x')

const nav = document.querySelector('nav')

const header = document.querySelector('header')
const blurLayer = document.querySelector('.blur-layer')

const main = document.querySelector('main')



// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)




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
    // console.log('open button clicked');

    nav.classList.add('open-nav') // adds class which transform: translate(0) to show mobile menu

    menuButtonBurger.style.display = "none"
    // menuButtonBurger.classList.add('menu-btn-hide')
    menuButtonX.style.display = "block" // show the X button

    document.body.classList.add('disable-scroll') // disable scrolling

    blurLayer.classList.add('blur') // add blur effect
})

// close mobile menu if click X button
menuButtonX.addEventListener('click', () => {
    console.log('close button clicked')
    
    closeMenu()
})

// close the mobile menu if click outside the menu
main.addEventListener('click', closeMenu)

// factor out closeMenu as it will be called from multiple places
function closeMenu() {
    nav.classList.remove('open-nav')
    menuButtonX.style.display = "none"

    menuButtonBurger.style.display = "block"
    menuButtonBurger.style.opacity = 1;
    menuButtonBurger.style.animation = "none";
    // menuButtonBurger.classList.add('menu-btn-show')
    console.log('show menu btn')

    document.body.classList.remove('disable-scroll') // enable scrolling
    blurLayer.classList.remove('blur') // remove blur
}

// ======================================================
// add class to all observed elements when they intersect the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log('intersect')
            entry.target.classList.add('fade-in-scroll')
        }
    })
})

// grab all the elements to be observed.
// I'm sure there's a better way to do this.
let projects = document.querySelectorAll('.featured-project, .section-heading, .about__content, .project, .contact')
projects.forEach(project => {
    observer.observe(project)
})
// ======================================================


// document.getElementById("glcanvas").onwheel =function(){
//     window.addEventListener('DOMMouseScroll', wheel, true);
// }

// ==================================
// load cables.gl patch
function patchInitialized(patch) {
    // You can now access the patch object (patch), register variable watchers and so on
}

function patchFinishedLoading(patch) {
    // The patch is ready now, all assets have been loaded
}


// ===================================================
// horrible hacky fix here. to be fixed later
// cables embedded patch is messing with the mobile view body width
// so I'm overriding it until I figure out the issue.
let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log('width: ', width)
document.body.style.width = `${width}px`



document.addEventListener('CABLES.jsLoaded', function (event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        "prefixAssetPath": "",
        "assetPath": "assets/",
        "jsPath": "js/",
        "glCanvasId": "glcanvas",
        "glCanvasResizeToWindow": true,
        "onPatchLoaded": patchInitialized,
        "onFinishedLoading": patchFinishedLoading,
        "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
    });
});





window.addEventListener('resize', () => {
    
    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // console.log('width: ', width)
    
    document.body.style.width = `${width}px`

    // if (width > 800) {
    //     menuButtonBurger.classList.add('menu-btn-hide')
    //     console.log('hiding')
    // }
    // else {
    //     menuButtonBurger.classList.add('menu-btn-show')
    // }
})

let canvas = document.querySelector('canvas')
let name = document.querySelector('.home .name')

document.addEventListener('keydown', (event) => {
    if (event.key === 't') {
        console.log('t pressed')
        canvas.classList.toggle('hide-canvas')
        name.classList.toggle('show-name')
    }
})