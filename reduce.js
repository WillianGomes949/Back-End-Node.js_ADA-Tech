// Solução 1 com for-of

const provasDeMatemaicasDaJosefine = [7, 8, 9, 4, 6, 8.5]

let media = 0
let soma = 0

for (const prova of provasDeMatemaicasDaJosefine) {
  soma += prova
}

media = soma / provasDeMatemaicasDaJosefine.length

console.log(media.toFixed(2))

//Solução 2 com reduce
const somaDasProvas = provasDeMatemaicasDaJosefine.reduce((acc, prova) => {
  return acc + prova
}, 0)

const mediaDasProvas = somaDasProvas / provasDeMatemaicasDaJosefine.length

console.log(somaDasProvas)
console.log(mediaDasProvas.toFixed(2))