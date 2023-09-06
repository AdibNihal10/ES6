const idiot = [1, 2, 3, 4, 5];

const filterate = idiot.find((num) => num * 5 <= 20);

console.log(filterate);

//array of objects

const alu = [
  {
    name: "alu",
    age: 2,
    kola: false,
  },
  {
    name: "peyara",
    age: 12,
    kola: false,
  },
  {
    name: "kola",
    age: 42,
    kola: true,
  },
];
const v = alu.find((num) => num.age > 2);
console.log(v);
