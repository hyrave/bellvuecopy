import '../styles/styles.css'

let SlideImages = document.querySelectorAll(".header-logos ul li");
var max = SlideImages.length;
var i = 0;
var list = [0,1,2,3,4];
setInterval(function() {
  if(i>4) { i=0;}  
  SlideImages[i].classList.add("header-logos--is-visible");
  console.log("i:"+i+" classlist:"+SlideImages[i].classList.length);  
  for(var ii=0;ii<list.length;ii++) {    
    if(i != list[ii]) {
      console.log("removing class of index"+list[ii]+" and retain index"+i);
      SlideImages[list[ii]].classList.remove("header-logos--is-visible");
    }
  }
  i++;
},5000);
  

if(module.hot) {
  module.hot.accept()
}