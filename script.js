function toggleButton(element) {
    if (!element.classList.contains('is-toggled')) {
        turnOffPreviousButton();
        element.classList.add('is-toggled');
    } else {
        element.classList.remove('is-toggled');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});