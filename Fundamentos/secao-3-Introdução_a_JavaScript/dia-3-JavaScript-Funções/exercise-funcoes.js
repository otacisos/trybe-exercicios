function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
} console.log(cumprimentaCliente('Isaac'));

//Considere a variável saldo,
//que representa a quantia em conta de determinada(o)
//cliente do TrybeBank e escreva quatro programas que:

let saldoBanco = 100;

function adicione(adicionar) {
  //Adicione um valor ao saldo.
  return saldoBanco + adicionar;

} console.log('O valor em conta ao ser adicionado é: ' + adicione(50));

function subtrair(subtraia) {
  //Subtraia um valor do saldo.
  return saldoBanco - subtraia;

} console.log('O valor em conta ao ser subtraido é: ' + subtrair(20));

function multiplique(multiplicar) {
  //Multiplique o valor do saldo por uma taxa.
  return saldoBanco * multiplicar;

} console.log('O valor em conta ao ser mult. pela taxa é: ' + multiplique(2));

function dividir(divida) {
  //Divida o valor do saldo.
  return saldoBanco / divida

} console.log('O valor em conta ao ser dividido é: ' + dividir(2));