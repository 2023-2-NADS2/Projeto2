const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = document.querySelector(".icone img");

botao.addEventListener("click", function(event) {
    event.preventDefault();
    linksMenu.classList.toggle("aberto")
    
    if (linksMenu.classList.contains("aberto")) {
        icone.src = "./img/icon-fechar.svg";
    } else {
        icone.src = "./img/icon-menu.svg";
    };

});

