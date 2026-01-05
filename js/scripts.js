document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // This toggles the 'nav-active' class defined in your CSS
            navLinks.classList.toggle('nav-active');
            
            // Optional: Toggle an animation on the icon itself (if you want to add it later)
            hamburger.classList.toggle('toggle');
        });
    }

    // --- 2. CLOSE MENU WHEN LINK IS CLICKED ---
    // On mobile, when a user clicks "Projects", the menu should close automatically.
    const navItems = document.querySelectorAll('.nav-links li a');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
            }
        });
    });

    // --- 3. DYNAMIC GREETING (Professional Touch) ---
    // Changes "Hello" to "Good Morning" / "Good Afternoon" based on time
    const greetingElement = document.querySelector('.greeting');
    const hour = new Date().getHours();
    let greetingText = "Hello, I'm";

    if (hour < 12) {
        greetingText = "Good Morning, I'm";
    } else if (hour < 18) {
        greetingText = "Good Afternoon, I'm";
    } else {
        greetingText = "Good Evening, I'm";
    }

    if (greetingElement) {
        greetingElement.textContent = greetingText;
    }

});