const openSwitchButton1 = document.querySelector("#radio-one");
const cardsCachorro = document.querySelectorAll(".card.cachorro");

const toggleSwitch1 = () => {
  cardsCachorro.forEach((Switch) => {
    Switch.classList.toggle("hide", false);
  });

  const cardsGato = document.querySelectorAll(".card.gato");
  cardsGato.forEach((Switch) => {
    Switch.classList.toggle("hide", true);
  });
};

[openSwitchButton1].forEach((el) => {
  el.addEventListener("click", () => toggleSwitch1());
});


const openSwitchButton2 = document.querySelector("#radio-two");
const cardsGato = document.querySelectorAll(".card.gato");

const toggleSwitch2 = () => {
  const cardsCachorro = document.querySelectorAll(".card.cachorro");
  cardsCachorro.forEach((Switch) => {
    Switch.classList.toggle("hide", true);
  });

  cardsGato.forEach((Switch) => {
    Switch.classList.toggle("hide", false);
  });
};

[openSwitchButton2].forEach((el) => {
  el.addEventListener("click", () => toggleSwitch2());
});
