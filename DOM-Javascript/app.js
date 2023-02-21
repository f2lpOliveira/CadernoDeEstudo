import BotaoVerifica from "./componetes/verificaCadastro.js";
import BotaoDeleta from "./componetes/deletaCadastro.js";

function criarCadastro(evento) {
  evento.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoVerifica());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
  input.value = " ";
}

const novoCadastro = document.querySelector("[data-form-button]");

novoCadastro.addEventListener("click", criarCadastro);
