/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')


if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')


if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', ()=>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY  >= 50 ? header.classList.add('shadow-header')
                      : header.classList.classList('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
      
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperReview = new Swiper('.review-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
      
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
        const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetHeight - 50,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) { 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
   }

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home-data, .featured-container, .new-container, .join-data, .review-container, .footer')
sr.reveal('.home-images', {delay: 600})
sr.reveal('.service-card', {interval: 100})
sr.reveal('.discount-data', {origin: 'left'})
sr.reveal('.discount-images', {origin: 'right'})