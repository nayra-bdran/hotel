let nav = document.querySelector(".navbar")
const icon = document.getElementById("menu-btn")
icon.addEventListener("click", () => {

  nav.classList.toggle("active")

})



document.querySelectorAll('.contact .row .faq .box h3').forEach(eo => {
  eo.onclick = () =>{
     eo.parentElement.classList.toggle('active');
  }
});


const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  slide(slide.length);
});

nextButton.addEventListener("click", () => {
  slide(slide.length);
});

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  const translateX = -currentIndex *100;
  slider.style.transform = `translateX(${translateX}%)`;
}




  
