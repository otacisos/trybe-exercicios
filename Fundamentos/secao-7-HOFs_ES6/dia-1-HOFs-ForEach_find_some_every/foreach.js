const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach((email) => {
  // console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
})

const numeros = [1, 2, 3, 4, 5, 6];

const newArray = (arr) => {
  const num = [];
  arr.forEach((nume) => num.push(nume*3));
  return num;

}
console.log(newArray(numeros));
