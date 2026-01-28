const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {
    const phoneNumber = "233552820935";
    const message = "Hello ESTEESBITES, I would like to place an order.";

    const whatsappLink = 
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

const form = document.getElementById("orderForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();
    const message1 = document.getElementById("message").value.trim();

    if (name === ""|| phone === ""||location ===""|| message1 === "") {
        alert("Please fill in all fields");
        return;
    }

    const fullMessage =
        "Name: " + name +
        "\nPhone: " + phone +
        "\nLocation: "+ location +
        "\nOrder: " + message;

    const whatsappNumber = "233552820935";
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(fullMessage);

    window.open(whatsappURL, "_blank");
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
