import skills from "./skillsData.js";

class SkillsSection extends HTMLElement{

    skills;
    currentIndex = 0;

    constructor() {
        super();
        this.skills = skills;
    }
    
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <nav class="navtab__types__container">
                <ul id="typeList">
                    ${this.getTypes().map(t => `
                        <li id="${t}" role="button" data-type-list>${t}</li>
                    `).join("")}
                </ul>
                <i class="material-icons" role="button" id="prev-btn">chevron_left</i>
                <i class="material-icons" role="button" id="next-btn">chevron_right</i>
            </nav>
            <section class="navtab__content__container">
                <article id="navtab-content"></article>
            </section>
        `
        this.openSkill()
        this.handleSlider()
    }

    openSkill() {
        const buttons = this.querySelectorAll("li[data-type-list]");
      
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.renderContent(btn.id);
                this.currentIndex = index;
            });
        });
      
        // Llama a renderContent con el tipo actual al cargar la página
        this.renderContent(buttons[this.currentIndex].id);
    }

    getTypes(){
        const types = Object.keys(this.skills)
        return types
    }

    getCurrentIndex() {
        return this.currentIndex;
      }


    renderContent(id){
        const container = this.querySelector("#navtab-content")
        container.innerHTML = `
            ${this.skills[id].map(skill => `
                <figure>
                    <img src="${skill.img}">
                    <p>${skill.title}</p>
                </figure>
            `).join("")}
        `
    }

    handleSlider() {
        const slidesContainer = document.getElementById("typeList");
        const slide = document.querySelector("li[data-type-list]");
        const prevButton = document.getElementById("prev-btn");
        const nextButton = document.getElementById("next-btn");
      
        const recalculateSizes = () => {
            const slideWidth = slide.clientWidth + 10; // Considera el espacio entre elementos
            const containerWidth = slidesContainer.clientWidth;
            const initialScroll = Math.floor((slideWidth / 2) - (containerWidth / 2));
        
            slidesContainer.scrollLeft = initialScroll;
        };
      
        // Recalcular los tamaños al cargar la página y al cambiar el tamaño de la ventana
        window.addEventListener('load', recalculateSizes);
        window.addEventListener('resize', recalculateSizes);
      
        nextButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex + 1) % this.getTypes().length;
            this.renderContent(this.getTypes()[this.currentIndex]);
            slidesContainer.scrollLeft += slide.clientWidth + 10; // Considera el espacio entre elementos
        
            // Verifica si estás en el último slide y vuelve al primer slide
            if (this.currentIndex === 0) {
              // Ajusta el desplazamiento al principio del contenedor
              slidesContainer.scrollLeft = 0;
            }
        });
      
        prevButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex - 1 + this.getTypes().length) % this.getTypes().length;
            this.renderContent(this.getTypes()[this.currentIndex]);
            slidesContainer.scrollLeft -= slide.clientWidth + 10; // Considera el espacio entre elementos
        
            // Verifica si estás en el primer slide y vuelve al último slide
            if (this.currentIndex === this.getTypes().length - 1) {
              // Ajusta el desplazamiento al final del contenedor
              slidesContainer.scrollLeft = slidesContainer.scrollWidth;
            }
        });
    }
      
    
}

customElements.define("skills-section", SkillsSection)