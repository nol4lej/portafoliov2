import "./src/components/Navbar/Navbar.js"
import "./src/components/Header/Header.js"
import "./src/components/Skills/Skills.js"
import "./src/components/Projects/Projects.js"

window.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root")

    root.innerHTML = `
        <nav-bar></nav-bar>
        <header-section></header-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
    `

})