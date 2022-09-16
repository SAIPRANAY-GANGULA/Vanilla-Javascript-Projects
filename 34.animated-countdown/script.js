const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
    nums.forEach((num, index) => {
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && index !== nums.length - 1) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if (e.animationName === 'goOut') {
                num.classList.add('hide');
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        });
    });
}

function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    nums.forEach((num) => {
        num.classList.value = '';
    });

    nums[0].classList.add('in');
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
});

