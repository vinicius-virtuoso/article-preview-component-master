const main = document.querySelector('main');
const share = document.querySelector('.box-share');
const svgg = document.querySelector('.box-share svg');
const paths = document.querySelector('.box-share svg path');
const popup = document.querySelector('.box-share .popup');

main.addEventListener('click', ({ target }) => {
  if (target === share || target === svgg || target === paths || target === popup) {
    share.classList.add('active')
  } else {
    share.classList.remove('active')
  }
})