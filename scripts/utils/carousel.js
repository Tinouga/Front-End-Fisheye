const carousel = document.getElementById("lightbox");
const slidesContainer = carousel.querySelector(".carousel__content");
const closeCarouselBtn = document.getElementById("closeCarouselBtn");

let currentIndex = 0;

function displayCarousel(id) {
    generateSlides();
    currentIndex = medias.findIndex(media => media.id === id);
    updateSlideDisplay();
    mainWrapper.setAttribute("aria-hidden", "true");
    carousel.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    carousel.style.display = "flex";
    closeCarouselBtn.focus();
}

function closeCarousel() {
    mainWrapper.setAttribute("aria-hidden", "false");
    carousel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    carousel.style.display = "none";
    currentIndex = 0;
}

document.addEventListener("keydown", e => {
   const keyCode = e.key || e.keyCode || e.which;

   switch(keyCode) {
       case "Escape":
       case 27:
           closeCarousel();
           break;
       case "ArrowLeft":
       case 37:
           navigateCarousel(-1);
           break;
       case "ArrowRight":
       case 39:
           navigateCarousel(1);
           break;
   }
});

closeCarouselBtn.addEventListener("click", closeCarousel);

document.querySelector(".carousel__controls-left").addEventListener("click", () => navigateCarousel(-1));
document.querySelector(".carousel__controls-right").addEventListener("click", () => navigateCarousel(1));

function navigateCarousel(direction) {
    switch(true) {
        case currentIndex + direction >= medias.length:
            currentIndex = 0;
            break;
        case currentIndex + direction < 0:
            currentIndex = medias.length - 1;
            break;
        default:
            currentIndex += direction;
    }

    updateSlideDisplay();

}

function generateSlides() {
    const fragment = document.createDocumentFragment();

    medias.forEach(media => {
        const slide = mediaTemplate(media).generateSlide();
        fragment.appendChild(slide);
    });

    slidesContainer.appendChild(fragment);
}

function updateSlideDisplay() {
    const slides = slidesContainer.querySelectorAll(".carousel__item");
    // hide all slides
    slides.forEach(slide => {
        slide.setAttribute("aria-hidden", "true");
        slide.style.display = "none";
    });
    // show the current slide
    const currentSlide = slides[currentIndex];
    currentSlide.setAttribute("aria-hidden", "false");
    currentSlide.style.display = "flex";
}