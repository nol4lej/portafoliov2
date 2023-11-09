import "./src/components/Navbar/Navbar.js"
import "./src/components/Header/Header.js"


window.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root")

    root.innerHTML = `
        <nav-bar></nav-bar>
        <header-section></header-section>
    `

})