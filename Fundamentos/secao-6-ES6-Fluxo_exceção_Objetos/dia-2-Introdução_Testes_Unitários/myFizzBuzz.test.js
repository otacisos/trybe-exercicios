const myFizzBuzz = require('./myFizzBuzz');

test('Um número divisível por 3 e 5', () => {
  expect( (myFizzBuzz(15))).toBe('fizzbuzz');
})

test('Um número divisível por 3', () => {
  expect((myFizzBuzz(3))).toBe('fizz');
})

test('Um número divisível por 5', () => {
  expect((myFizzBuzz(5))).toBe('buzz');
})

test('Um número que não é divisível por 3 ou 5', () => {
  expect(myFizzBuzz(1)).toBe(1);
})

test('um parâmetro que não é um número', () => {
  expect(myFizzBuzz('10')).toBe(false);
})
