const fatoracao = (param) => {
  let soma= 0;
  for (let index = 0; index <= param; index += 1) {
    soma += index;
  };
  return soma;
}

console.log(fatoracao(5));

module.exports = fatoracao;