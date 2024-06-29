const deuCerto = !!Math.round(Math.random()*3);
console.log({ deuCerto });

const resultado = new Promise((resolve, reject) => {
  if (deuCerto) {
    resolve(2 + 1);
  }
  reject(new Error("Nao foi possível calcular a operação."));
})
  .then((retorno) => console.log(`O calculo deu ${retorno}`))
  .catch((error) => console.log("Ocoreu um erro!"));

console.log(resultado);
console.log("seguir o fluxo do programa sem quebrar");
