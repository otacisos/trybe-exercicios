const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

// console.log(verifyGrades);

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Crie uma função que verifica se todas as pessoas do array 
// people possuem a idade mínima especificada;

// Retorne true se todas tiverem a idade maior ou 
// igual à mínima e, caso contrário, false.

//Adicione seu código aqui
const verifyAges = () => people.some((ages) => ages.age >= 18);

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));
