document.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translate3d(0, ' + (scrolled * 3) + 'px, 0)'; // Ajusta el factor de desplazamiento
});
