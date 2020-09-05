const carousel = document.querySelector(".carouselbox");
const next = carousel.querySelector(".next");
const prev = carousel.querySelector(".prev");
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
const images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

let index = 0;

let currentImage;

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

next.onclick= function(event) {
  event.stopPropagation();

  navigate(1);
};

prev.addEventListener("click", function(event) {
  event.stopPropagation();

  navigate(-1);
});

navigate(0);