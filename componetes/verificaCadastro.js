const BotaoVerifica = () => {
  const botaoVerifica = document.createElement("button");

  botaoVerifica.classList.add("check-button");
  botaoVerifica.innerText = "verificado";
  botaoVerifica.addEventListener("click", verificarCadastro);
  return botaoVerifica;
};

const verificarCadastro = evento => {
  const botaoVerifica = evento.target; // Captura qual elemento foi clicado
  const cadastroCompleto = botaoVerifica.parentElement;

  cadastroCompleto.classList.toggle("done");
};

export default BotaoVerifica;
