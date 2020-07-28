

const butt = document.querySelector('.btn'),
  primary = document.querySelector('#primaryCode'),
  format = document.querySelector('#edited');
butt.addEventListener('click', event => {
  event.preventDefault()
  const ed = primary.value.replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;')
  format.value = ed
  format.style.color = "green"
})
