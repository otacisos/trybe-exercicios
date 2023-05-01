const fatoracao = require('./fatoracao');

test('Testando a fatoração quando recebe 3', () => {
  expect(fatoracao(3)).toBe(6);
})

test('Testando a fatoração quando recebe 1', () => {
  expect(fatoracao(1)).toBe(1);
})

test('Testando a fatoração quando recebe 5', () => {
  expect(fatoracao(5)).toBe(15);
})