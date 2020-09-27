const burgerButton = document.querySelector('.burger-button'),
  mobMenu = document.querySelector('.mob-menu'),
  closeMenu = document.querySelector('.mob-menu .close'),
  mobEnter = document.querySelector('.mob-menu .link.enter'),
  mobRegister = document.querySelector('.mob-menu .link.register')

burgerButton.addEventListener('click', () => {
  mobMenu.classList.add('show')
})

closeMenu.addEventListener('click', () => {
  mobMenu.classList.remove('show')
})

document.addEventListener('click', (e) => {
  if (
    !e.target.closest('.mob-menu.show')
    &&
    !e.target.closest('.burger-button')
    &&
    !e.target.closest('.modal')
  ) {
    mobMenu.classList.remove('show')
  }
})