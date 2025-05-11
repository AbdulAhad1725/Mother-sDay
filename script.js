let count = 5;
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const countdown = setInterval(() => {
  count--;
  countdownEl.textContent = count;
  if (count === 0) {
    clearInterval(countdown);
    countdownEl.style.display = "none";
    messageEl.style.display = "block";

    // Show the next button *after* the typing animation is done
    setTimeout(() => {
      nextBtn.style.display = "inline-block";
    }, 4000); // match typing animation duration
  }
}, 1000);
