const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  // console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome pessoa usuária!

const greeting2 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

// greeting2(); // // Welcome pessoa usuária!

// escreva uma função multiply que multiplique dois números passados 
// como argumentos. Atribua como default o valor 1, caso não seja 
// passado nenhum valor como segundo parâmetro.
const multiply = (number, value= 1) => {
  const mult = typeof value === 'number' && !isNaN(value) ? value : 1;
  return number * mult;
};

console.log(multiply(2));
