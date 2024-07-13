const texto = document.getElementById("textoConverter");
const converterBtn = document.getElementById("converterBtn");

converterBtn.addEventListener("click", function () {
  const fala = window.speechSynthesis;
  const textoInserido = texto.value;
  const erro = document.querySelector(".erro");

  if (!fala.speaking && !textoInserido.trim().length) {
    erro.textContent = `Nada para ser convertido... Insira um texto para continuar.`;
  }

  if (!fala.speaking && textoInserido.trim().length) {
    erro.textContent = "";
    const novaUtterance = new SpeechSynthesisUtterance(textoInserido);
    fala.speak(novaUtterance);
    converterBtn.textContent = "Tocando...";
  }

  setTimeout(() => {
    converterBtn.textContent = "Tocar texto convertido";
  }, 5000);
});
