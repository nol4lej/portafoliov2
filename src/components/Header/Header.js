class HeaderSection extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        
            asd
        
        `
    }

}

customElements.define("header-section", HeaderSection)