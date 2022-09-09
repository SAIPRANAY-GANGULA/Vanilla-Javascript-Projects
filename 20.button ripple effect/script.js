const rippleBtns = document.querySelectorAll(".ripple");

rippleBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = button.offsetLeft;
    const buttonTop = button.offsetTop;
    
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${y - buttonTop}px`;
    circle.style.left = `${x - buttonLeft}px`;

    console.error(x, y, buttonLeft, buttonTop);
    console.error(x - buttonLeft, y - buttonTop);

    button.appendChild(circle);

    setTimeout(() => button.removeChild(circle), 500);
  });
});
