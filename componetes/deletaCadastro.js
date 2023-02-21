const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", deletarCadastro);
  return botaoDeleta;
};

const deletarCadastro = evento => {
  const botaoDeleta = evento.target;

  const cadastroCompleto = botaoDeleta.parentElement;

  cadastroCompleto.remove();

  return botaoDeleta;
};

export default BotaoDeleta;
