const trabalhos = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];
// criado um array para contar quantas pessaos trabalharam em cada ano.
const quantosNoAno = [];

// agora vamos varrer o array original -> trabalhos
// podemos fazer o loop de duas formas, vou usar o for ( of)

for (let trabalhador of trabalhos) {
  // cada elemento do array trabalhos vai virar um trabalhador
  // uma data de inicio e uma data de fim

  const primeiroAno = trabalhador[0];
  const ultimoAno = trabalhador[1];
  for (let ano = primeiroAno; ano <= ultimoAno; ano++) {
    if (!quantosNoAno[ano]) {
      // se o ano ainda não estava no array ...
      quantosNoAno[ano] = 0;
    }
    quantosNoAno[ano]++; // contamos mais uma pessoa que trabalhou no ano
  }
}

const resumo = quantosNoAno

  .map((elemento, ano) => {
    if (elemento) {
      return {
        ano,
        trabalhadores: elemento,
      };
    }
  })
  // no filter nós eliminamos os elementos que são nulos 
  .filter((elemento) => elemento)
  .sort((menor, maior) => maior.trabalhadores - menor.trabalhadores);

const maior = resumo[0].trabalhadores;
console.log({ maior });
// aqui filtramos antes de exibir , só os que tem a qtde de trab == maior
const filtrados = resumo.filter((elemento) => elemento.trabalhadores == maior);
console.log(filtrados);
