function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
}

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const kissInput = document.getElementById("kissInput");
  const kissLabel = document.getElementById("kissLabel");

  let current = 0;
  let kissCount = 0;

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[current].classList.add("active");

    if (current === slides.length - 1) {
      nextBtn.innerText = "Proceed ❤️";
    } else {
      nextBtn.innerText = "Next →";
    }
  }

  nextBtn.addEventListener("click", function () {

    if (current === slides.length - 1) {

      let value = kissInput.value.trim();

      if (value !== "Umaah") {
        kissLabel.innerHTML = "Pehle kissi fir proceed";
        return;
      }

      kissCount++;

      if (kissCount === 1) {
        kissLabel.innerHTML = "One more time : <b>Umaah</b>";
        kissInput.value = "";
        return;
      }

      if (kissCount === 2) {
        kissLabel.innerHTML = "Last time waise nahi deti ho : <b>Umaah</b>";
        kissInput.value = "";
        return;
      }

      if (kissCount === 3) {
        // REDIRECT INSTEAD OF ALERT
        window.location.href = "cards.html";
      }

    } else {
      current++;
      updateSlides();
    }

  });

  updateSlides();
});