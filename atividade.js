let contatos = [
  { nome: "João Silva", telefone: "11999999999", email: "joao@email.com" },
  { nome: "Maria Souza", telefone: "11888888888", email: "maria@email.com" },
  { nome: "Carlos Lima", telefone: "11777777777", email: "carlos@email.com" }
];

// adiciona o contato pedido
contatos.push({
  nome: "Maisie Haley",
  telefone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

function atualizarTela() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  contatos.forEach(c => {
    let li = document.createElement("li");
    li.textContent = `${c.nome} / ${c.telefone} / ${c.email}`;
    lista.appendChild(li);
  });

  // primeiro
  let primeiro = contatos[0];
  document.getElementById("primeiro").textContent =
    `${primeiro.nome} / ${primeiro.telefone} / ${primeiro.email}`;

  // último
  let ultimo = contatos[contatos.length - 1];
  document.getElementById("ultimo").textContent =
    `${ultimo.nome} / ${ultimo.telefone} / ${ultimo.email}`;
}

function adicionarContato() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;

  if (!nome || !telefone || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  contatos.push({ nome, telefone, email });

  // limpa campos
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";

  atualizarTela();
}

// inicializa
atualizarTela();