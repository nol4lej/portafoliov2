import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import php from "../../assets/php.svg"

class SkillsSection extends HTMLElement{

    skills = {
        Frontend: [
            { 
                title: "HTML",
                img: html
            },
            { 
                title: "CSS",
                img: css
            }
        ],
        Backend: [
            { 
                title: "PHP",
                img: php
            }
        ],
        Tools: [
            { 
                title: "PHP",
                img: php
            }
        ]
    }
    
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <nav class="navtab__types__container">
                <i class="material-icons">chevron_left</i>
                <ul>
                    ${this.getTypes().map(t => `
                        <li id="${t}" role="button" data-type-list>${t}</li>
                    `).join("")}
                </ul>
                <i class="material-icons">chevron_right</i>
            </nav>
            <section>
                <article id="navtab-content"></article>
            </section>
        `
        this.openSkill()
    }

    getTypes(){
        const types = Object.keys(this.skills)
        return types
    }

    openSkill(){
        const buttons = this.querySelectorAll("li[data-type-list]")

        buttons.forEach(btn => {

            // activo la primera tab
            buttons[0].classList.add("active")
            this.renderContent(buttons[0].id)

            btn.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.renderContent(btn.id)
            })
        })
    }

    renderContent(id){
        const container = document.getElementById("navtab-content")
        container.innerHTML = `
            ${this.skills[id].map(skill => `
                <figure>
                    <img src="${skill.img}">
                    <p>${skill.title}</p>
                </figure>
            `).join("")}
        `
    }

    
}

customElements.define("skills-section", SkillsSection)