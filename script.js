document.getElementById('menuToggle').addEventListener('click', function () {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
});

// Close the mobile menu when clicking outside
document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');

    if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove('show');
    }
});
