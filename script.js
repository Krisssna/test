document.addEventListener('DOMContentLoaded', function() {
    // Toggle Mobile Menu
    document.getElementById('menuToggle').addEventListener('click', function() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('show');
        if (menu.classList.contains('show')) {
            menu.querySelector('a').focus(); // Focus on the first link inside the menu
        } else {
            this.focus(); // Return focus to toggle button
        }
    });

    // Toggle Mobile Dropdowns
    document.querySelectorAll('.mobile-nav .dropdown > a').forEach(function(dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Desktop Dropdowns
    document.querySelectorAll('.desktop-nav .dropdown > a').forEach(function(dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            document.querySelectorAll('.desktop-nav .dropdown-content').forEach(function(content) {
                if (content !== dropdownContent) {
                    content.classList.remove('show');
                }
            });
            dropdownContent.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown > a') && !e.target.closest('.dropdown-content')) {
            document.querySelectorAll('.dropdown-content.show').forEach(function(dropdown) {
                dropdown.classList.remove('show');
            });

            if (!e.target.matches('#menuToggle') && !e.target.closest('#mobileMenu')) {
                document.getElementById('mobileMenu').classList.remove('show');
            }
        }
    });
});