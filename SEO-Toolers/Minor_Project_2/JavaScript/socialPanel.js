for (let i = 1; i <= 9; i++) {
  const button = document.getElementById(`btn${i}`);
  const box = document.getElementById(`box${i}`);

  button.addEventListener("click", function () {
    hideAllBoxes();
    box.style.display = "block";
  });
}

function hideAllBoxes() {
  for (let i = 1; i <= 9; i++) {
    const box = document.getElementById(`box${i}`);
    box.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const defaultBox = document.getElementById("box1");
  defaultBox.style.display = "block";
});
