# Frontend Mentor - Newsletter Sign-Up with Success Message Solution

This is my solution to the **Newsletter Sign-Up with Success Message** challenge on Frontend Mentor. This project focuses on building a fully responsive newsletter subscription component with real-time email validation, dynamic UI states, and a success confirmation screen using HTML, CSS, and vanilla JavaScript.

The challenge was a great opportunity to practice semantic HTML structure, modern CSS architecture, responsive design techniques, and DOM manipulation without relying on frameworks or external libraries.

---

## Table of contents
- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview
This project is a responsive newsletter subscription component that validates user input and displays a success message upon submission. It adapts across mobile and desktop devices using a mobile-first approach.

The interface includes a subscription form with real-time email validation, dynamic error handling, interactive button states, and a success confirmation screen that replaces the form upon valid submission.

All layout styling is handled with modern CSS techniques, and form validation and UI state management are implemented using vanilla JavaScript.

---

## The challenge
Users should be able to:

- View the optimal layout depending on their device’s screen size.
- Experience a mobile-first responsive design.
- Enter their email and receive validation feedback.
- See error messages when submitting an invalid email.
- Experience real-time validation while typing.
- See hover and focus states for interactive elements.
- Submit the form and view a success confirmation message.
- Dismiss the success message and return to the form.
- Experience smooth transitions and clean visual hierarchy.

---

## Design

- Desktop Design  

<img src="./design/desktop-design.jpg" alt="Desktop preview" width="600">

- Active States  

<img src="./design/active-states.jpg" alt="Active states preview" width="400">

- Desktop Success  

<img src="./design/desktop-success.jpg" alt="Active success preview" width="400">

- Desktop Success  Active

<img src="./design/desktop-success-active.jpg" alt="Active success active preview" width="400">

- Error States

<img src="./design/error-states.jpg" alt="Error states preview" width="400">

- Mobile Design  

<img src="./design/mobile-design.jpg" alt="Mobile preview" width="200">

- Mobile Success

<img src="./design/mobile-success.jpg" alt="Mobile success message preview" width="200">

---

## Links
- Solution URL: [GitHub Repository](https://github.com/mlopezl/newsletter-sign-up-with-success-message)
- Live Site URL: [Live Demo](https://mlopezl.github.io/newsletter-sign-up-with-success-message/)

---

## My process
- Structured the layout using **semantic HTML5** elements such as `section`, `form`, `label`, and `button`.
- Followed a **mobile-first approach**, progressively enhancing the layout using media queries.
- Built layouts primarily using **Flexbox** for alignment, spacing, and responsiveness.
- Used **CSS custom properties (variables)** to create a consistent color system.
- Applied the **BEM naming convention** to maintain modular, scalable, and readable CSS.
- Implemented layered button hover effects using pseudo-elements (`::before`) and `z-index`.
- Used `position: relative` and `position: absolute` to control layered visual effects.
- Managed responsive breakpoints to switch between mobile and desktop illustrations.
- Implemented real-time email validation using **regular expressions (RegEx)**.
- Controlled UI visibility by dynamically adding and removing CSS classes.
- Prevented default form submission behavior using `event.preventDefault()`.
- Separated structure (HTML), styling (CSS), and logic (JavaScript) clearly.

---

## Built with
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- CSS custom properties (variables)
- Mobile-first workflow
- Responsive design principles
- BEM naming methodology
- DOM manipulation
- Event listeners
- Regular expressions (RegEx)
- Media queries

---

## What I learned
- Structuring responsive components using **semantic HTML**.
- Building flexible layouts using **Flexbox**.
- Organizing scalable styles with **BEM methodology**.
- Creating a reusable design system using **CSS variables**.
- Implementing advanced hover effects using pseudo-elements and layered gradients.
- Writing and applying **regular expressions** for custom form validation.
- Managing UI state dynamically through class manipulation.
- Improving user experience with real-time validation feedback.
- Handling form behavior using `preventDefault()` and custom logic.
- Writing clean, maintainable, and modular frontend code without frameworks.