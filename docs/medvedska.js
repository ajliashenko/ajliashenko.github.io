document.addEventListener('DOMContentLoaded', function() {
    const navbarText = document.querySelector('.navbar-text');
    const heroSection = document.getElementById('hero');
    const whatSection = document.getElementById('what');

    // Smooth scrolling for internal navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Check if the link is an internal link
            if (this.getAttribute('href').startsWith('#')) {
                // Prevent default behavior for internal links
                e.preventDefault();
                // Scroll smoothly to the target anchor
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // For external links, allow default behavior (navigation to external page)
        });
    });

    // Function to add slide-in class to elements
    function slideIn(element) {
        element.classList.add("slide-in");
    }

    // Select elements to animate
    var slideElements = document.querySelectorAll(".slide-element");

    function checkSlide() {
        slideElements.forEach(function(element) {
            // Check if the element is within the viewport and has the slide-in class
            if (isElementInViewport(element) && !element.classList.contains("slide-in")) {
                slideIn(element);
            }
        });
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Attach event listener for scrolling
    window.addEventListener("scroll", checkSlide);

    // Initial check
    checkSlide();
});

document.getElementById('applyButton').addEventListener('click', function() {
    const subject = "Put Acronym Here";
    const body = "Put the department acronym you are applying to in the subject line for automatic sorting \n\n OP   -   Operations \n SW   -   Software Development \n LE   -   Legal \n FI   -   Finance \n HR   -   Human Resources \n GD   -   Graphic Design \n CS   -   CyberSecurity \n\n\n Thank you. ";
    const mailtoLink = `mailto:Apply@medvedska.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});

document.addEventListener('DOMContentLoaded', function() {
    // Force reflow
    document.body.style.overflow = 'hidden';
    document.body.offsetHeight; // trigger reflow
    document.body.style.overflow = '';

    // Other existing JavaScript code here...
});
