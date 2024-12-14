let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;  // Loop back to the last slide
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;  // Loop back to the first slide
  }
  
  updateSlider();
}

function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateSlider() {
  // Move slider to the current slide
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Automatically transition every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// Initialize the slider
updateSlider();
