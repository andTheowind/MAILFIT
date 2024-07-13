window.addEventListener('scroll', function () {
    const button = document.querySelector('.animated-button');
    const scrollPosition = window.scrollY;
    const sectionServices = document.querySelector('.box-wrap');

    if (scrollPosition > 100 && !button.classList.contains('expanded')) {
        button.classList.add('expanded');
    } else if (scrollPosition <= 100) {
        button.classList.remove('expanded');
    }

    if (sectionServices.getBoundingClientRect().top < window.innerHeight && !button.classList.contains('box-wrap')) {
        button.classList.add('box-wrap');
    } else if (sectionServices.getBoundingClientRect().top >= window.innerHeight && button.classList.contains('box-wrap')) {
        button.classList.remove('box-wrap');
    }
});