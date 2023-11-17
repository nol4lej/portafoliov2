class Navbar extends HTMLElement{

    connectedCallback(){
        this.render()
        this.handleHeight()
    }

    render(){
        this.innerHTML = `

            <div class="navbar__button__container">
                <button class="material-icons" id="nav-btn">
                    menu
                </button>
            </div>

            <div class="navbar__logo__container">
                <p>NM</p>
            </div>

            <div class="navbar__content__container" id="nav-toggler-content">
                <ul>
                    <li>
                        <a href="">Home</a> 
                    </li>
                    <li>
                        <a href="">Contacto</a> 
                    </li>
                    <li>
                        <a href="">Contacto</a> 
                    </li>
                </ul>
            </div>

        `
        this.handleButton()
    }

    handleButton(){
        this.querySelector("#nav-btn").addEventListener("click", () => {
            this.querySelector("#nav-toggler-content").classList.toggle("show")
        })
    }

    handleHeight(){
        window.addEventListener("scroll", () => {
            this.classList.toggle("active", window.scrollY > 50);
        })
    }


}

customElements.define("nav-bar", Navbar)