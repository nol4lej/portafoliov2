var d=Object.defineProperty;var p=(o,n,e)=>n in o?d(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var a=(o,n,e)=>(p(o,typeof n!="symbol"?n+"":n,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();class h extends HTMLElement{connectedCallback(){this.render(),this.handleHeight()}render(){this.innerHTML=`

            <div class="navbar__button__container">
                <button class="material-icons" id="nav-btn">
                    menu
                </button>
            </div>

            <div class="navbar__logo__container">
                <p>Nolasco Medina</p>
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

        `,this.handleButton()}handleButton(){this.querySelector("#nav-btn").addEventListener("click",()=>{this.querySelector("#nav-toggler-content").classList.toggle("show")})}handleHeight(){window.addEventListener("scroll",()=>{const n=window.scrollY>50;this.classList.toggle("active",n),this.querySelector("#nav-toggler-content").classList.toggle("active",n)})}}customElements.define("nav-bar",h);const u="/assets/heroimg-fbd8b5ee.jpg";class v extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
            ${this.text()}
        `}text(){return`
            <div class="header__text__container">
                <div class="text__container">
                    <h1>Desarrollador Web <br> Full Stack</h1>
                    <p>Me llamo Nolasco Medina. Transformo conceptos en experiencias interactivas. Apasionado por el diseño limpio y la eficiencia del código.</p>
                </div>
                <div class="links__container">
                    <a href="https://www.linkedin.com/in/nolascomedina/" target="_blank">
                        <p>Linkedin</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/nol4lej/" target="_blank">
                        <p>GitHub</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `}image(){return`
            <div class="header__image__container">
                <img src="${u}">
            </div>
        `}}customElements.define("header-section",v);const g="/assets/html-c62bf88b.svg",m="/assets/css-8e01670c.svg",_="/assets/js-9a935d73.svg",b="/assets/react-f2cadfd0.svg",f="/assets/tailwindcss-7c29d970.svg",y="/assets/vite-17e50649.svg",S="/assets/webpack-07240acb.svg",L="/assets/php-bf8b7e48.svg",w="/assets/firebase-21cda531.svg",k="/assets/sqlserver-a4426a62.svg",x="/assets/mysql-12ffac41.svg",C="/assets/git-ee37b0c2.svg",j="/assets/aws-1f52a1d5.svg",E="/assets/postman-2f2ccaee.svg",T={Frontend:{text:"Single Page Applications (SPA) - Web components",detail:[{title:"HTML",img:g},{title:"CSS",img:m},{title:"JavaScript",img:_},{title:"React",img:b},{title:"Vite",img:y},{title:"Tailwind CSS",img:f},{title:"Webpack",img:S}]},Backend:{text:"esto es backend",detail:[{title:"PHP",img:L},{title:"MySQL",img:x},{title:"SQL Server",img:k},{title:"Firebase",img:w},{title:"Postman",img:E}]},"Control de versiones":{text:"esto es backend",detail:[{title:"Git",img:C},{title:"AWS CodeCommit",img:j}]}};class H extends HTMLElement{constructor(){super();a(this,"skills");a(this,"currentIndex",0);this.skills=T}connectedCallback(){this.render(),this.openSkill(),this.handleSlider(),this.recalculateSize()}render(){this.innerHTML=`
            <h2>Tecnologías y habilidades</h2>
            <div class="skills__content__container">
                <nav class="navtab__types__container">
                    <ul id="typeList">
                        ${this.getTypes().map(e=>`
                            <li id="${e}" role="button" data-type-list><p>${e}</p></li>
                        `).join("")}
                    </ul>
                    <i class="material-icons" role="button" id="prev-btn">chevron_left</i>
                    <i class="material-icons" role="button" id="next-btn">chevron_right</i>
                </nav>
                <section id="navtab-content" class="navtab__content__container"></section>
            </div>
        `}getTypes(){return Object.keys(this.skills)}openSkill(){const e=this.querySelectorAll("li[data-type-list]");e.forEach((s,t)=>{e[0].querySelector("p").classList.add("active"),s.addEventListener("click",()=>{e.forEach(i=>i.id===s.id?s.querySelector("p").classList.add("active"):i.querySelector("p").classList.remove("active")),this.renderContent(s.id),this.currentIndex=t})}),this.renderContent(e[this.currentIndex].id)}renderContent(e){const s=this.querySelector("#navtab-content");s.innerHTML=`
            <div class="fade-in">
                <p>${this.skills[e].text}</p>
                <div class="navtab__content__figure__container ">
                    ${this.skills[e].detail.map(t=>`
                        <figure>
                            <img src="${t.img}">
                            <p>${t.title}</p>
                        </figure>
                    `).join("")}
                </div>
            </div>
        `}handleSlider(){const e=this.querySelector("#prev-btn");this.querySelector("#next-btn").addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.getTypes().length,this.buttonAction()}),e.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.getTypes().length)%this.getTypes().length,this.buttonAction()})}buttonAction(){this.renderContent(this.getTypes()[this.currentIndex]),this.getCurrentSlider(),this.updateActiveButton()}getCurrentSlider(){this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex+1})`).scrollIntoView({behavior:"smooth",block:"nearest"})}updateActiveButton(){this.querySelectorAll("li[data-type-list]").forEach((s,t)=>{s.querySelector("p").classList.toggle("active",t===this.currentIndex)})}recalculateSize(){const e=()=>window.innerWidth<768&&this.getCurrentSlider();window.addEventListener("resize",e)}}customElements.define("skills-section",H);const M="/assets/loginfirebase-6186ac9e.png",q=[{title:"Login con Firebase",img:M,tech:["Firebase","Webpack","Express","Vercel","JavaScript","CSS","HTML"],text:"Arquitectura basada en SPA (Single Page Application) junto con Web Components y autenticación a través de Firebase. Programación basada en eventos y orientada a objetos, modularidad, manejo asíncrono y patrón observador.",codeLink:"https://github.com/nol4lej/login-firebase",deployedLink:"https://login-firebase-omega.vercel.app/"}];class P extends HTMLElement{constructor(){super();a(this,"Projects");this.Projects=q}connectedCallback(){this.render(),this.renderContent()}render(){this.innerHTML=`
            <h2>Proyectos</h2>
            <div id="projects__content__container"></div>
        `}renderContent(){const e=this.querySelector("#projects__content__container");e.innerHTML=`
            ${this.Projects.map(s=>`
                ${this.cards(s)}
            `)}
        `}cards({title:e,img:s,tech:t,text:i,codeLink:r,deployedLink:c}){return`
            <figure class="projects__card__container">
                <div class="project__card__img__container">
                    <img src="${s}">
                </div>
                <div class="project__card__info__container">
                    <h3>${e}</h3>
                    <div class="project__card__tech__container">
                        ${t.map(l=>`
                            <span>${l}</span>
                        `).join("")}
                    </div>
                    <p>${i}</p>
                </div>
                <div class="project_card__buttons__container">
                    <a href="${r}" target="_blank">
                        Fuente
                        <i class="material-icons">arrow_outward</i>
                    </a>
                    <a href="${c}" target="_blank">
                        Desplegar
                        <i class="material-icons">arrow_outward</i>
                    </a>
                </div>
            </figure>
        `}}customElements.define("projects-section",P);class $ extends HTMLElement{connectedCallback(){this.render(),this.handleCloseBtn()}render(){this.innerHTML=`
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
        `}handleCloseBtn(){this.querySelector("#close-initialpopup").addEventListener("click",()=>this.classList.remove("active"))}}customElements.define("initial-popup",$);const A="/assets/footer-85c2f476.gif";class I extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
            <img src="${A}" class="footer__background">
        `}}customElements.define("footer-component",I);const B=document.getElementById("root");window.addEventListener("DOMContentLoaded",()=>{B.innerHTML=`
        <nav-bar></nav-bar>
        <header-section></header-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
        <footer-component></footer-component>
        <initial-popup></initial-popup>
    `});window.addEventListener("load",()=>{document.querySelector("initial-popup").classList.add("active")});
