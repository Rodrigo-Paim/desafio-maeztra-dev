// Entrada dos valores
const array = ['1,2,3,4,5,6', '5,3,6,2', '1,4,8,9,10,12,15'];
for (let i in array) {
  // sepração dos arrays
  let value = array[i].split(',').map(Number);
  // verificação dos valores
  let order = true;
  // verificação da condição
  for (let j = 0; j < value.length - 1; j++) {
    //verificando se os valores são maiores
    if (value[j] > value[j + 1]) {
      order = false;
      break;
    }
  }

  if (order === true) {
    console.log(`${value} -> Está ordenado`);
  } else {
    console.log(`${value} -> Não está ordenado`);
  }
}
