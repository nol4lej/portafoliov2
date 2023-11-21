class ProjectsSection extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <h2>Proyectos</h2>
            <div>
                
            </div>
        `
    }



}

customElements.define("projects-section", ProjectsSection)