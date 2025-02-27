document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navbar Toggle
    const menuToggle = document.querySelector("nav button");
    const navLinks = document.querySelector("nav div > div");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Change Navbar Background on Scroll
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Smooth Scrolling for Anchor Links
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Validation (if applicable)
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            alert("Form submitted successfully!");
            contactForm.reset();
        });
    }
});
