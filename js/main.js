const btnPop = document.querySelector('.btn-pop');
const pop = document.querySelector('.pop');

btnPop.addEventListener('click', () => {
  btnPop.classList.toggle('active')
  pop.classList.toggle('active')
})


