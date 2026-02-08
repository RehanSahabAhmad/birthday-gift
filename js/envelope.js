function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
}

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const backBtn = document.querySelector(".back-btn");

  let current = 0;

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[current].classList.add("active");

    backBtn.style.visibility = current === 0 ? "hidden" : "visible";

    if (current === slides.length - 1) {
      nextBtn.innerText = "Forever ❤️";
    } else {
      nextBtn.innerText = "Next →";
    }
  }

  nextBtn.addEventListener("click", function () {
    if (current < slides.length - 1) {
      current++;
      updateSlides();
    }
  });

  backBtn.addEventListener("click", function () {
    if (current > 0) {
      current--;
      updateSlides();
    }
  });

  updateSlides();
});
