function comprimenta() {
  console.log('ola usuario!')
}

function pontosDoUsuario() {
  console.log('voce tem 1000 pontos!')
}

function saldoDaCarteira() {
  console.log('Seu saldo é 10 reais')
}

function retornarInformacaoDoUsuario(callback) {
  console.log(comprimenta())
  callback()
}

retornarInformacaoDoUsuario(pontosDoUsuario)
retornarInformacaoDoUsuario(saldoDaCarteira)