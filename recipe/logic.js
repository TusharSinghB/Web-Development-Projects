const bannerImage = document.getElementById("banner");
const rightButton = document.getElementById("right-button");
const leftButton = document.getElementById("left-button");

let currentImageIndex = 0;
const images = ["photo.jpg", "photo2.jpg"];

function right() {
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  bannerImage.src = images[currentImageIndex];
  console.log(currentImageIndex);
}
function left() {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  bannerImage.src = images[currentImageIndex];
}

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);

setInterval(right, 5000);
