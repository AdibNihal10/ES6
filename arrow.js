const messi = (a, b) => a + b;

const result = (5, 6);

console.log(result);

//one parameter simplier version

const m = (num) => num * 5;

//multiline arrow function

const f = (a, b, c) => {
  const ab = a + b;
  const bc = b + c;
  const total = ab + bc;

  return total;
};

console.log(f(1, 2, 3));
