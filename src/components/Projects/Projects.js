import ProjectsData from "./ProjectsData.js"

class ProjectsSection extends HTMLElement{

    Projects;

    constructor(){
        super()
        this.Projects = ProjectsData
    }

    connectedCallback(){
        this.render()
        this.renderContent()
    }

    render(){
        this.innerHTML = `
            <h2>Proyectos</h2>
            <div id="projects__content__container"></div>
        `
    }

    renderContent(){
        const container = this.querySelector("#projects__content__container")
        
        container.innerHTML = `
            ${this.Projects.map(p => `
                ${this.cards(p)}
            `)}
        `
    }

    cards({ title, img, tech, text, codeLink, deployedLink }){
        const card = `
            <figure class="projects__card__container">
                <div class="project__card__img__container">
                    <img src="${img}">
                </div>
                <div class="project__card__info__container">
                    <h3>${title}</h3>
                    <div class="project__card__tech__container">
                        ${tech.map(t => `
                            <span>${t}</span>
                        `).join("")}
                    </div>
                    <p>${text}</p>
                </div>
                <div class="project_card__buttons__container">
                    <a href="${codeLink}" target="_blank">
                        Fuente
                        <i class="material-icons">arrow_outward</i>
                    </a>
                    <a href="${deployedLink}" target="_blank">
                        Desplegar
                        <i class="material-icons">arrow_outward</i>
                    </a>
                </div>
            </figure>
        `
        return card
    }





}

customElements.define("projects-section", ProjectsSection)