# my-website
My personal website
# Personal Website

A beginner-friendly personal portfolio built with **HTML**, **CSS**, and **JavaScript** only. There is no React or other UI framework.

Replace the sample name **Alex Rivera** and the placeholder bio, projects, and education with your own details.

## How to run it

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal (this project uses port `43180`).

You can also open `index.html` directly in a browser. The look and the form still work that way.

## File structure

```
index.html   page structure (headings, sections, form)
style.css    colors, layout, spacing, and hover effects
script.js    mobile menu, form message, and scroll fade-in
```

## What each file does

### `index.html`

This is the skeleton of the site.

- `<header>` and `<nav>` are the top bar and the links to each section.
- `href="#about"` jumps to the element with `id="about"`.
- `<main>` holds the page sections: Home, About, Skills, Projects, Education, Contact.
- `<footer>` is the bottom of the page.
- `<link rel="stylesheet" href="style.css">` connects the CSS file.
- `<script src="script.js" defer></script>` loads the JavaScript after the HTML is ready.

### `style.css`

This file controls how the site looks.

- `body` sets the font, background, and text color.
- `.container` keeps content from stretching too wide.
- `.hero-grid` and other `grid` rules place items side by side on desktop.
- `@media (max-width: 800px)` stacks those layouts on phones and shows the menu button.

Smooth scrolling and hover effects are done in CSS, not JavaScript.

### `script.js`

JavaScript adds behavior that HTML and CSS cannot do as clearly on their own:

1. **Mobile menu** — when you click the button with `id="nav-toggle"`, the script adds or removes the `open` class on the nav.
2. **Contact form** — `event.preventDefault()` stops the page from reloading. Then the script checks the fields and shows a thank-you message.
3. **Scroll fade-in** — cards become visible as they enter the screen.

Important ideas in the script:

- `document` is the web page.
- `document.getElementById("nav-toggle")` finds the element whose `id` is `nav-toggle`.
- HTML, CSS, and JavaScript talk through **ids**, **classes**, and **events**. HTML provides the elements, CSS styles classes like `.open` and `.success`, and JavaScript adds or removes those classes when something happens.

The contact form does not send real email yet. It is a front-end demo so you can practice forms without a server.
