const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerWidth / 5) * 4.5;
  // console.log((window.innerWidth / 5) * 4);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}
