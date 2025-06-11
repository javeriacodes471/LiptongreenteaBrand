
// Wait until the full DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links inside nav
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop default jump behavior

      // Get the section ID from href (remove the "#")
      const targetId = this.getAttribute("href").substring(1);

      // Find the section with that ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll to that section smoothly
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling nav links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Shop Now button click alert
  const shopButton = document.querySelector("button");
  if (shopButton) {
    shopButton.addEventListener("click", function () {
      alert("Your request is being Processed!🍵");
    });
  }

  // Contact form submit alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop actual submission
      alert("Thank you for contacting us! 📩");
      form.reset(); // Optional: clear form after submission
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll to contact form when "Shop Now" button clicked
  const shopNowBtn = document.getElementById("shopNowBtn");
  const contactSection = document.getElementById("Contact");

  if (shopNowBtn && contactSection) {
    shopNowBtn.addEventListener("click", function () {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Show alert on form submit
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
      form.reset(); // optional
    });
  }
});
