/*  abrir e fechar menu quando o usuário clicar no menu de ícones */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicado no item de menu, menu oculto */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* alterar o cabeçalho ao rolar a página */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    // rolar maior que a altura do cabeçalho
    header.classList.add('scroll')
  } else {
    // menor que a altura do cabeçalho
    header.classList.remove('scroll')
  }
}

/* animação de deslizador */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  // reprodução automática mesmo após uma interação
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
})

/* mostrar elementos ao rolar a página com scrollreveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 680,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials, 
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// ao rolar

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 570) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
