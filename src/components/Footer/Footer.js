import background from "../../assets/footer.gif"

class FooterComponent extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <img src="${background}" class="footer__background">
        `
    }

}

customElements.define("footer-component", FooterComponent)