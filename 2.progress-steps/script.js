const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    progress.style.width = `${
        (100 / (circles.length - 1)) * (currentActive - 1)
    }%`;

    circles.forEach((circle, index) => {
        if (index >= currentActive) {
            circle.classList.remove('active');
        } else {
            circle.classList.add('active');
        }
    });
    prev.disabled = currentActive <= 1;
    next.disabled = currentActive >= circles.length;
}
