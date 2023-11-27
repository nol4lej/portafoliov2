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
        this.recalculateSize()
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
        const prevButton = this.querySelector("#prev-btn");
        const nextButton = this.querySelector("#next-btn");

        nextButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex + 1) % this.getTypes().length;
            this.buttonAction()
        });

        prevButton.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex - 1 + this.getTypes().length) % this.getTypes().length;
            this.buttonAction()
        });
    }

    buttonAction(){
        this.renderContent(this.getTypes()[this.currentIndex]); // 1.- renderizo contenido actual
        this.getCurrentSlider() // 2.- obtiene el slide actual y lo desplaza a la vista
        this.updateActiveButton(); // 3.- añade la clase "active" al botón actual
    }

    getCurrentSlider(){
        const currentSlide = this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex + 1})`);
        currentSlide.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    updateActiveButton(){
        const buttons = this.querySelectorAll("li[data-type-list]");
        buttons.forEach((btn, index) => {
            btn.querySelector("p").classList.toggle("active", index === this.currentIndex);
        });
    };

    recalculateSize(){
        const handler = () => window.innerWidth < 768 && this.getCurrentSlider()
        window.addEventListener('resize', handler);
    }

    


      
    
}

customElements.define("skills-section", SkillsSection)