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
