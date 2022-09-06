const smallCups = document.querySelectorAll(".cup.small");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const goal = document.getElementById("goal");
const totalLiters = 5;

liters.innerText = `${totalLiters} L`;
goal.innerText = `Goal: ${totalLiters} Liters`;
smallCups.forEach((cup, index) => {
  cup.innerHTML = `${(totalLiters * 1000) / smallCups.length} ml`;
  cup.addEventListener("click", () => fillSmallCups(index));
});

function fillSmallCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling?.classList.contains("full")
  )
    index--;

  if (
    smallCups[index]?.classList.contains("full") &&
    index === smallCups.length - 1
  )
    index--;

  smallCups.forEach((cup, i) =>
    i <= index ? cup.classList.add("full") : cup.classList.remove("full")
  );

  fillBigJar();
}

function fillBigJar() {
  const fullGlasses = document.querySelectorAll(".full");
  percentage.innerText = `${(fullGlasses.length * 100) / smallCups.length}%`;
  percentage.style.height = `${(fullGlasses.length * 100) / smallCups.length}%`;
  liters.innerText = `${
    totalLiters - (fullGlasses.length * totalLiters) / smallCups.length
  }L`;
  if (fullGlasses.length === smallCups.length) remained.style.height = "0";
  percentage.style.opacity = fullGlasses.length ? "1" : "0";
}
