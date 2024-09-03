window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax1').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    document.querySelector('.parallax2').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});