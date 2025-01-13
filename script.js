const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

// Check sessionStorage for menu state
if (sessionStorage.getItem('menuState') === 'active') {
    nav.classList.add('active');
}

// Toggle menu state on button click
mobileMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        sessionStorage.setItem('menuState', 'active');
    } else {
        sessionStorage.removeItem('menuState');
    }
});

// Close menu if clicking outside of it
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !mobileMenu.contains(event.target)) {
        nav.classList.remove('active');
        sessionStorage.removeItem('menuState');
    }
});