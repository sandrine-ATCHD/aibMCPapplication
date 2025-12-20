// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.getElementById('menuToggle');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);

    // Fermer le menu si un lien est cliqué
    const menuLinks = document.querySelectorAll('.mobile-menu nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
