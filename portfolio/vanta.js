 
    document.addEventListener("DOMContentLoaded", () => {
      VANTA.NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x993fff,
        backgroundColor: 0x0,
        points: 20.00,
        maxDistance: 24.00,
        spacing: 20.00
      });
    });
  


 
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); 
    });
 