// Wait for the page to fully load before applying scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("E-Portfolio Loaded! 🚀");

    // Fade-in effect for content
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = "1";
    }, 100);

    // Smooth scrolling for all links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            const destination = this.getAttribute("href");
            document.body.style.opacity = "0"; // Fade out

            setTimeout(() => {
                window.location.href = destination; // Navigate after fade
            }, 700);
        });
    });

    // Button hover effects
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.8)";
        });
        button.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
});
