const barra = document.getElementById("barra");
const toggle = document.getElementById("toggle");
const icone = toggle.querySelector("i");

toggle.addEventListener("click", function () {
  barra.classList.toggle("aberta");

  if (barra.classList.contains("aberta")) {
    // Aberta: mostra o X (fechar)
    icone.className = "fa-solid fa-xmark";
    toggle.title = "Fechar";
  } else {
    // Fechada: mostra o + (abrir)
    icone.className = "fa-solid fa-plus";
    toggle.title = "Abrir";
  }
});
