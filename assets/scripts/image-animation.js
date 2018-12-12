const image = document.querySelector('.image-animation-image')

window.addEventListener('scroll', () =>{
  let x = ((image.offsetTop-window.scrollY)-900)/10;
  let y = x/3;
  image.style.transform = `translateX(${x}px)`;

})
