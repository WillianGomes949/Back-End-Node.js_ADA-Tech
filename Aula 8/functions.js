function climaAtual () {
    const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
    const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)]
    return `Hoje está ${climaSorteado}`
}
const climaAtual2 = ()  => {
    const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
    const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)]
    return climaSorteado
}

console.log(climaAtual())
console.log(`Ahhh, o dia esta ${climaAtual2()}`)
