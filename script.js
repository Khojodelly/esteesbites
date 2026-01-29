
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Change icon
    if (navLinks.classList.contains("show")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Auto close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


