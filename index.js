import "./src/components/Navbar/Navbar.js"
import "./src/components/Header/Header.js"
import "./src/components/Skills/Skills.js"
import "./src/components/Projects/Projects.js"
import "./src/components/InitialPopup/InitialPopup.js"
import "./src/components/Footer/Footer.js"

const root = document.getElementById("root")

window.addEventListener("DOMContentLoaded", () => {
    root.innerHTML = `
        <nav-bar></nav-bar>
        <header-section></header-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
        <footer-component></footer-component>
        <initial-popup></initial-popup>
    `
})

window.addEventListener("load", () => {
    // const initialPopup = document.createElement("initial-popup");
    // document.body.appendChild(initialPopup);
    const initialPopup = document.querySelector("initial-popup");
    initialPopup.classList.add("active");
});