

const enter = document.querySelector('.nav-button.enter'),
  register = document.querySelector('.nav-button.register'),
  modalEnter = document.querySelector('.modal-enter.hide'),
  modalRegister = document.querySelector('.modal-register.hide'),
  howWeWork = document.querySelector('.second-block .h1'),
  stepsBlock = document.querySelector('.steps-block'),
  burgerButton = document.querySelector('.burger-button'),
  mobMenu = document.querySelector('.mob-menu'),
  closeMenu = document.querySelector('.mob-menu .close'),
  mobEnter = document.querySelector('.mob-menu .link.enter'),
  mobRegister = document.querySelector('.mob-menu .link.register')

enter.addEventListener('click', (event) => {
  event.preventDefault();
  modalEnter.classList.remove('hide')
})

mobEnter.addEventListener('click', (event) => {
  event.preventDefault();
  modalEnter.classList.remove('hide')
})

register.addEventListener('click', (event) => {
  event.preventDefault();
  modalRegister.classList.remove('hide')
})

mobRegister.addEventListener('click', (event) => {
  event.preventDefault();
  modalRegister.classList.remove('hide')
})

modalEnter.addEventListener("click", (event) => {

  if (
    event.target.closest(".cansel") ||
    event.target.classList.contains("modal-enter")
  ) {
    document.body.style.overflow = "";
    modalEnter.classList.add("hide");
  }
});

modalRegister.addEventListener("click", (event) => {

  if (
    event.target.closest(".cansel") ||
    event.target.classList.contains("modal-register")
  ) {
    document.body.style.overflow = "";
    modalRegister.classList.add("hide");
  }
});

howWeWork.addEventListener('click', (e) => {
  stepsBlock.classList.toggle('show-hw')
  document.querySelector('.second-block .h1 img').classList.toggle('transform')
})

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