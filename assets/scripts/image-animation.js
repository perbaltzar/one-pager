const image = document.querySelector('.image-animation-image')

window.addEventListener('scroll', () =>{
  let x = ((image.offsetTop-window.scrollY)-900)/10;
  console.log(x);
  let y = x/3;
  image.style.transform = `translateX(${x}px)`;
  // image.style.transform = `translateY(${y}px)`;

})
