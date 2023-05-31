const user = {
  name: 'Marlete',
  age: 60
};

// desestruturamos a propriedade name e atribuímos como variável
const { name } = user;

// conseguimos utilizar a propriedade como variável
// console.log(name); // Marlete

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// Produza o mesmo resultado do código, 
// porém utilizando o array destructuring 
// para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]
const [index1, index2, index3] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
}
// sum(index1, index3) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. 
// Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas 
// variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// A linha [,,, ...numerosPares] = numerosPares; é onde ocorre a desestruturação e o uso do spread operator.
// As três primeiras vírgulas indicam que não estamos interessados nos primeiros três elementos do array numerosPares.
// Em seguida, ...numerosPares é usado para coletar todos os elementos restantes do array, que são os números pares.
// Ao fazer isso, estamos atribuindo esses elementos de volta à variável numerosPares, substituindo o array original.

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
