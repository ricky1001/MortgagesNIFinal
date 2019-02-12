var scr = document.querySelector(".scrolling-footer");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
   console.log(scrolled);
   console.log(scr);
  if(scrolled > 80){
   scr.className = "scrolling-footer-scrolled";
  }else{
      scr.className = "scrolling-footer";
  }
})