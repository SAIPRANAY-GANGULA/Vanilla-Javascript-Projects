const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight);

    window.scrollY > nav.offsetHeight ?
        nav.classList.add('active') : nav.classList.remove('active');
}
  