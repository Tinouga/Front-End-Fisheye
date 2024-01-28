const carousel = document.getElementById("carousel");
const closeCarouselBtn = document.getElementById("closeCarouselBtn");

function displayCarousel(id) {
    mainWrapper.setAttribute("aria-hidden", "true");
    carousel.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    carousel.style.display = "flex";
    closeCarouselBtn.focus()
}

function closeCarousel() {
    mainWrapper.setAttribute("aria-hidden", "false");
    carousel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    carousel.style.display = "none";
    // todo focus the last element opened in the carousel?
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

document.querySelector(".carousel__controls-left").addEventListener("click", () => navigateCarousel(-1));
document.querySelector(".carousel__controls-right").addEventListener("click", () => navigateCarousel(1));

function navigateCarousel(direction) {
    console.log(direction);
    // const currentSlideIndex = getCurrentSlideIndex();
}

function showSlide(id) {
    const media = medias.find(media => media.id === id);

}