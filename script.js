document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('show');
    document.getElementById('mobileMenu').classList.toggle('show');
});

// Handle submenu for Apps
document.querySelectorAll('.mobile-nav > ul > li').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && this.querySelector('.submenu')) {
            e.preventDefault();
            this.classList.toggle('show');
        }
    });
});
