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
        this.openSkill()
        this.handleSlider()
    }

    render(){
        this.innerHTML = `
            <h2>Tecnologías y habilidades</h2>
            <div class="skills__content__container">
                <nav class="navtab__types__container">
                    <ul id="typeList">
                        ${this.getTypes().map(t => `
                            <li id="${t}" role="button" data-type-list><p>${t}</p></li>
                        `).join("")}
                    </ul>
                    <i class="material-icons" role="button" id="prev-btn">chevron_left</i>
                    <i class="material-icons" role="button" id="next-btn">chevron_right</i>
                </nav>
                <section id="navtab-content" class="navtab__content__container"></section>
            </div>
        `
    }

    getTypes(){
        const types = Object.keys(this.skills)
        return types
    }

    openSkill() {
        const buttons = this.querySelectorAll("li[data-type-list]");

        buttons.forEach((btn, index) => {
            buttons[0].querySelector("p").classList.add("active");
            btn.addEventListener("click", () => {
                buttons.forEach(b => b.id === btn.id ? btn.querySelector("p").classList.add("active") : b.querySelector("p").classList.remove("active"));
                this.renderContent(btn.id);
                this.currentIndex = index;
            });
        });        
      
        // Llama a renderContent con el tipo actual al cargar la página
        this.renderContent(buttons[this.currentIndex].id);
    }

    renderContent(id){
        const container = this.querySelector("#navtab-content")
        container.innerHTML = `
            <div class="fade-in">
                <p>${this.skills[id].text}</p>
                <div class="navtab__content__figure__container ">
                    ${this.skills[id].detail.map(skill => `
                        <figure>
                            <img src="${skill.img}">
                            <p>${skill.title}</p>
                        </figure>
                    `).join("")}
                </div>
            </div>
        `
    }

    handleSlider() {
        const slidesContainer = this.querySelector("#typeList");
        const slide = this.querySelector("li[data-type-list]");
        const prevButton = this.querySelector("#prev-btn");
        const nextButton = this.querySelector("#next-btn");
      
        const recalculateSizes = () => {
            const slideWidth = slide.clientWidth // obtengo el ancho de cada slide
            const containerWidth = slidesContainer.clientWidth; //  obtengo el ancho del contenedor de los slides
            const initialScroll = Math.floor((slideWidth / 2) - (containerWidth / 2)); // calcula cuanto debe desplazarse el contenido del contenedo
        
            slidesContainer.scrollLeft = initialScroll;
            this.renderContent(this.currentIndex); // cuando se ejecuta el evento resize, mantengo el contenido del navtab seleccionado
        };
      
        // Recalcular los tamaños al cargar la página y al cambiar el tamaño de la ventana
        window.addEventListener('load', recalculateSizes);
        window.addEventListener('resize', recalculateSizes);
        
        const updateActiveButton = () => {
            // Añade la clase "active" al botón correspondiente
            const buttons = this.querySelectorAll("li[data-type-list]");
            buttons.forEach((btn, index) => {
                btn.querySelector("p").classList.toggle("active", index === this.currentIndex);
            });
            
        };
      
        nextButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex + 1) % this.getTypes().length;
            this.renderContent(this.getTypes()[this.currentIndex]);
        
            // Obtiene el slide actual
            const currentSlide = this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex + 1})`);
            
            // Hace que el slide actual esté centrado en el contenedor
            currentSlide.scrollIntoView({ behavior: "smooth", block: "center" });
        
            updateActiveButton();
        });
        
        prevButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex - 1 + this.getTypes().length) % this.getTypes().length;
            this.renderContent(this.getTypes()[this.currentIndex]);
        
            // Obtiene el slide actual
            const currentSlide = this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex + 1})`);
            
            // Hace que el slide actual esté centrado en el contenedor
            currentSlide.scrollIntoView({ behavior: "smooth", block: "center" });
        
            updateActiveButton();
        });
        
    }
      
    
}

customElements.define("skills-section", SkillsSection)