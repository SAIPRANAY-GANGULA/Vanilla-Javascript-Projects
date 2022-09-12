const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
    // if (clickTime === 0) {
    //     clickTime = new Date().getTime();
    // } else {
    //     if ((new Date().getTime() - clickTime) < 800) {
    //         createHeart(e);
    //         clickTime = 0;
    //     } else {
    //         clickTime = new Date().getTime();
    //     }
    // }

    createHeart(e);
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    /* to show heart on the click point */
    // const x = e.clientX;
    // const y = e.clientY;
    // const leftOffset = e.target.offsetLeft;
    // const topOffset = e.target.offsetTop;
    // const xInside = x - leftOffset;
    // const yInside = y - topOffset;
    // heart.style.top = `${yInside}px`;
    // heart.style.left = `${xInside}px`;


    /* to show heart on the center */
    heart.style.top = `${e.target.clientHeight / 2}px`;
    heart.style.left = `${e.target.clientWidth / 2}px`;
    // heart.style.top = `50%`;
    // heart.style.left = `50%`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
};