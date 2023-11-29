class InitialPopup extends HTMLElement{

    connectedCallback(){
        this.render()
        this.handleCloseBtn()
    }

    render(){
        this.innerHTML = `
            <div class="initialpopup__content__container">
                <div class="initialpopup__text__content">
                    <p>Te invito a profundizar en el código de este portafolio. </p>
                    <a href="https://github.com/nol4lej/portafoliov2/tree/main/src" target="_blank">
                        <p>Visita el repositorio</p>
                        <span class="material-icons">arrow_outward</span>
                    </a>
                </div>
                <button id="close-initialpopup">X</button>
            </div>
        `
    }

    handleCloseBtn(){
        const btn = this.querySelector("#close-initialpopup")
        btn.addEventListener("click", () => this.classList.remove("active"))
    }
    

}

customElements.define('initial-popup', InitialPopup)