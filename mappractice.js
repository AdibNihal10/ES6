const odd = [1, 3, 5, 7, 9];

const mapa = odd.map((n) => n + 1);

console.log(mapa);

function callArray(num) {
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    arr.push(num[i] + 1);
  }
  return arr;
}

console.log(callArray(odd));
