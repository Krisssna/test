document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('show');
    document.getElementById('mobileMenu').classList.toggle('show');
});

// Handle dropdown for both desktop and mobile
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { // Mobile view
            e.preventDefault();
            this.classList.toggle('show');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    
    if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove('show');
        toggle.classList.remove('show');
    }
});
