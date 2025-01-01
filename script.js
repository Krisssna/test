// Toggle mobile menu visibility
document.getElementById('menuToggle').addEventListener('click', function () {
    this.classList.toggle('show');
    document.getElementById('mobileMenu').classList.toggle('show');
});

// Prevent dropdown display issues in mobile
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) { // Mobile view only
            e.preventDefault();
            this.classList.toggle('show');
        }
    });
});

// Hide mobile menu when clicking outside
document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');

    if (
        menu.classList.contains('show') &&
        !menu.contains(e.target) &&
        e.target !== toggle
    ) {
        menu.classList.remove('show');
        toggle.classList.remove('show');
    }
});
