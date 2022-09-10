const toggleButtons = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', () => {
        faqs[index].classList.toggle('active');
    });
});

// Another Solution
// toggleButtons.forEach((toggleButton) => {
//     toggleButton.addEventListener('click', () => {
//         toggleButton.parentNode.classList.toggle('active');
//     })
// })
