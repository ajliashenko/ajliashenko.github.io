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
                if (isElementInViewport(element) && !element.classList.contains("slide-in")) {
                    slideIn(element);
                }
            });
        }

        // Check if an element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            var elementHeight = rect.bottom - rect.top;
            var elementInView = rect.top >= 0 &&
                                rect.left >= 0 &&
                                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                                rect.right <= (window.innerWidth || document.documentElement.clientWidth);
            var majorityInView = (rect.top + elementHeight / 2) <= (window.innerHeight || document.documentElement.clientHeight);
            return elementInView && majorityInView;
        }

        // Attach event listener for scrolling
        window.addEventListener("scroll", checkSlide);

        // Initial check
        checkSlide();
    });


