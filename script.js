//homeTextImage animations begin when page onload
const p1 = document.querySelector("#homeImageText p:nth-child(1)");
 const p2 = document.querySelector("#homeImageText p:nth-child(2)");
  const p3 = document.querySelector("#homeImageText p:nth-child(3)");
 const p4 = document.querySelector("#homeImageText p:nth-child(4)");

window.addEventListener('load',function(){
  p1.classList.add("animation1");
  p2.classList.add("animation2");
  p3.classList.add("animation3");
  p4.classList.add("animation4");
})
console.log('fsdf')

