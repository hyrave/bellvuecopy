class HeaderSlideShow {
  constructor() {
      this.dots = document.querySelectorAll('.dot')
      this.slides = document.querySelectorAll(".mySlides");
      this.prev = document.querySelector(".prev")
      this.next = document.querySelector(".next")
      this.slideIndex = 1           
      this.showSlides(this.slideIndex);
      this.events()
      
    }

  events () {
    this.dots.forEach(box => box.addEventListener('click', () => this.currentSlide(box))
    )
    this.prev.addEventListener('click', () => this.plusSlides(this.slideIndex-1))
    this.next.addEventListener('click', () => this.plusSlides(this.slideIndex+1))    
  }
  
  plusSlides(n) {
    this.showSlides(this.slideIndex = n);
    console.log("index:",this.slideIndex);
  }

  currentSlide(n) {    
    this.showSlides(this.slideIndex = parseInt(n.getAttribute("value")));
    console.log("index:",this.slideIndex);
  }

  showSlides(n) {
    var i;        
    if (n > this.slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = this.slides.length}
    console.log("n:"+n+" thislider:"+this.slideIndex);
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";  
    }
    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }
    this.slides[this.slideIndex-1].style.display = "block";  
    this.dots[this.slideIndex-1].className += " active";
  }
}

export default HeaderSlideShow;