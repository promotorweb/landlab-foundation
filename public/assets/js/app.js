/* 
Filippi Santos — App Logic
*/

document.addEventListener("DOMContentLoaded", () => {

const grid = document.querySelector(".templates-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

if(!grid) return;

renderTemplates("all");

filterButtons.forEach(btn => {
btn.addEventListener("click", () => {

const category = btn.getAttribute("data-filter");

filterButtons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

renderTemplates(category);

});
});

function renderTemplates(category){

grid.innerHTML = "";

const filtered =
category === "all"
? templates
: templates.filter(t => t.category === category);

filtered.forEach(template => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<div class="card-image">
<img src="${template.image}" alt="${template.name}">
</div>

<div class="card-content">

<span class="card-category">${template.category}</span>

<h3 class="card-title">${template.name}</h3>

<p class="card-badge">${template.badge}</p>

<div class="card-buttons">

<a href="${template.demo}" class="btn-demo" target="_blank">
Ver Demo
</a>

<a 
href="https://wa.me/5513981404884?text=${encodeURIComponent("Olá, quero o modelo " + template.name)}"
class="btn-use"
target="_blank"
>
Pedir Site ⚡
</a>

</div>

<p class="card-delivery">
Entrega em até 24h
</p>

</div>
`;

grid.appendChild(card);

});

}

});

// MOBILE MENU

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if(!menuToggle || !navLinks) return;

  // abrir / fechar menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
  });

  // fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click", ()=>{
      navLinks.classList.remove("mobile-active");
    });
  });

});
