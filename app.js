const footer = document.getElementById('footer');
const share = document.getElementById('share');
const shareBtn = document.querySelector('.share-ctn');
const footerShareBtn = document.querySelector('.footer-share-ctn');

footerShareBtn.addEventListener('click', () => {
   footer.classList.toggle('active');
   share.classList.toggle('active');
})

shareBtn.addEventListener('click', () => {
   share.classList.toggle('active');
   footer.classList.toggle('active');
})

function myFunction(x) {
   if (x.matches) {
      footer.style.display = 'flex';
   } else {
      footer.style.display = '';
   }
}

var x = window.matchMedia('(min-width: 932px)')
myFunction(x)
x.addListener(myFunction);