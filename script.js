/*
  SCRIPT.JS
  ---------
  HTML is the structure.
  CSS is the look.
  JavaScript is the behavior: what happens when someone clicks or types.

  The "document" is the web page itself. JavaScript can look inside it
  to find buttons, forms, and other elements.

  getElementById("nav-toggle") means:
  "Find the HTML element whose id is nav-toggle."
*/

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function closeMenu() {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
}

function openMenu() {
  mainNav.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close menu");
}

/* Mobile menu: click the button to show or hide the links */
navToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.contains("open");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

/* After tapping a nav link on a phone, close the menu */
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

/* Contact form: stop the page from reloading, then show a thank-you note */
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in your name, email, and message.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent = "Thanks, " + name + ". Your message is ready (this demo does not send email yet).";
  formStatus.className = "form-status success";
  contactForm.reset();
});

/* Fade sections in as they enter the screen */
const revealItems = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .timeline-item, .contact-form"
);

revealItems.forEach(function (item) {
  item.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
} else {
  revealItems.forEach(function (item) {
    item.classList.add("visible");
  });
}
