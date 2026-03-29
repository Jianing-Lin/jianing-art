const track = document.querySelector(".slider-track");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount = 0;

rightBtn.onclick = () => {
  scrollAmount += 220;
  track.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
};

leftBtn.onclick = () => {
  scrollAmount -= 220;
  if (scrollAmount < 0) scrollAmount = 0;

  track.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
};