const simbolo = '([([(';

let inicio = '' + simbolo;

const list = [];
for (let i = 0; i < inicio.length; i++) {
  list.push(inicio[i]);
}

const oldList = [...list];

list.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

const isTrue = () => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] != oldList[i]) {
      return `${inicio} -> Não é uma sequencia válida`;
    }
  }
  return `${inicio} -> É uma sequencia válida`;
};

console.log(isTrue());
