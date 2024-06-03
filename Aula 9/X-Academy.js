const prompt = require("prompt-sync")();

let users = [];
let option;

function showMenu() {
  console.log("0. Sair do Sistema");
  console.log("1. Cadastro de usuário");
  console.log("2. Pesquisa usuario por CPF");
  console.log("3. Adicionar esporte ao usuario");
  console.log("4. Deletar usuario");
}

function registerUsers() {
  const name = prompt("Entre com o nome do usuário: ");
  const cpf = prompt("Entre com o CPF do usuário: ");

  if (users.find((user) => user.cpf === cpf)) {
    console.log("Erro, usuario já cadastrado");
    return;
  }
  users.push({ name, cpf, sports: [] });
}

function searchUserByDocument() {
  const cpf = prompt("Entre com o CPF a ser pesquisado: ");
  const searchedUser = users.find((user) => user.cpf === cpf);
  if (searchedUser) {
    console.log("Usuário encontrado com os dados");
    console.log(`Nome: ${searchedUser.name}`);
    console.log(`Esportes: ${searchedUser.sports}`);
    return searchedUser;
  }
  console.log("Usuário não cadastrado");
}
function addSportToUser() {
  const foundUser = searchUserByDocument();
  if (!foundUser) {
    return;
  }

  const sport = prompt("Entre com o Esporte a adicionar para o usuátio: ");
  const newUsers = users.map((user) =>
    user.cpf === foundUser.cpf
      ? {
          ...user,
          sports: user.sports.includes(sport) ? user.sports : [...user.sports, sport],
        }
      : user
  );
  users = newUsers;
}

function deleteUser() {
  const foundUser = searchUserByDocument();
  if (!foundUser) {
    return;
  }
  const newUsers = users.filter((user) =>
    user.cpf !== foundUser.cpf
  );
  users = newUsers
}

do {
  showMenu();
  option = parseInt(prompt("Escolha uma opção de 0 a 4: "));
  if (option === 1) {
    registerUsers();
  } else if (option === 2) {
    searchUserByDocument();
  } else if (option === 3) {
    addSportToUser();
  } else if (option === 4) {
    deleteUser();
  }
} while (option !== 0);
