var v=Object.defineProperty;var u=(i,s,e)=>s in i?v(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var d=(i,s,e)=>(u(i,typeof s!="symbol"?s+"":s,e),e);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();class g extends HTMLElement{connectedCallback(){this.render(),this.handleHeight()}render(){this.innerHTML=`

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

        `,this.handleButton()}handleButton(){this.querySelector("#nav-btn").addEventListener("click",()=>{this.querySelector("#nav-toggler-content").classList.toggle("show")})}handleHeight(){window.addEventListener("scroll",()=>{const s=window.scrollY>50;this.classList.toggle("active",s),this.querySelector("#nav-toggler-content").classList.toggle("active",s)})}}customElements.define("nav-bar",g);const p="/assets/heroimg-fbd8b5ee.jpg";class m extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
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
                <img src="${p}">
            </div>
        `}}customElements.define("header-section",m);const f="/assets/html-c62bf88b.svg",b="/assets/css-8e01670c.svg",y="/assets/js-9a935d73.svg",_="/assets/react-f2cadfd0.svg",S="/assets/tailwindcss-7c29d970.svg",L="/assets/vite-17e50649.svg",w="/assets/webpack-07240acb.svg",x="/assets/php-bf8b7e48.svg",k="/assets/firebase-21cda531.svg",C="/assets/sqlserver-a4426a62.svg",q="/assets/mysql-12ffac41.svg",E="/assets/git-ee37b0c2.svg",T="/assets/aws-1f52a1d5.svg",M={Frontend:{text:"esto es frontend",detail:[{title:"HTML",img:f},{title:"CSS",img:b},{title:"JavaScript",img:y},{title:"React",img:_},{title:"Vite",img:L},{title:"Tailwind CSS",img:S},{title:"Webpack",img:w}]},Backend:{text:"esto es backend",detail:[{title:"PHP",img:x},{title:"MySQL",img:q},{title:"SQL Server",img:C},{title:"Firebase",img:k}]},"Control de versiones":{text:"esto es backend",detail:[{title:"Git",img:E},{title:"AWS CodeCommit",img:T}]}};class H extends HTMLElement{constructor(){super();d(this,"skills");d(this,"currentIndex",0);this.skills=M}connectedCallback(){this.render(),this.openSkill(),this.handleSlider()}render(){this.innerHTML=`
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
        `}getTypes(){return Object.keys(this.skills)}openSkill(){const e=this.querySelectorAll("li[data-type-list]");e.forEach((r,t)=>{e[0].querySelector("p").classList.add("active"),r.addEventListener("click",()=>{e.forEach(n=>n.id===r.id?r.querySelector("p").classList.add("active"):n.querySelector("p").classList.remove("active")),this.renderContent(r.id),this.currentIndex=t})}),this.renderContent(e[this.currentIndex].id)}renderContent(e){const r=this.querySelector("#navtab-content");r.innerHTML=`
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
        `}handleSlider(){const e=this.querySelector("#typeList"),r=this.querySelector("li[data-type-list]"),t=this.querySelector("#prev-btn"),n=this.querySelector("#next-btn"),c=()=>{const o=r.clientWidth,l=e.clientWidth,a=Math.floor(o/2-l/2);e.scrollLeft=a,this.renderContent(this.currentIndex)};window.addEventListener("load",c),window.addEventListener("resize",c);const h=()=>{this.querySelectorAll("li[data-type-list]").forEach((l,a)=>{l.querySelector("p").classList.toggle("active",a===this.currentIndex)})};n.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.getTypes().length,this.renderContent(this.getTypes()[this.currentIndex]),this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex+1})`).scrollIntoView({behavior:"smooth",block:"center"}),h()}),t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.getTypes().length)%this.getTypes().length,this.renderContent(this.getTypes()[this.currentIndex]),this.querySelector(`li[data-type-list]:nth-child(${this.currentIndex+1})`).scrollIntoView({behavior:"smooth",block:"center"}),h()})}}customElements.define("skills-section",H);class I extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
            <h2>Proyectos</h2>
            <div>
                
            </div>
        `}}customElements.define("projects-section",I);window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("root");i.innerHTML=`
        <nav-bar></nav-bar>
        <header-section></header-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
    `});
