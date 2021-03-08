// valor de entrada(quantidade)
const friends = 7;

const combinations = (qtd) => {
  //metodo para calculo
  if (qtd > 1) {
    if (qtd > 2) qtd *= qtd--;

    if (qtd > 2) qtd *= qtd - 1;

    return qtd;
  }
};
// resultado
console.log(combinations(friends));
// 8x7x6x5x4x3x2x1 = 40.320

function Fatorial(n) {
  var amigos = n;
  for (var i = 1; i < n; i++) {
    amigos = amigos * i;
  }
  return amigos;
}
console.log(Fatorial(7));
