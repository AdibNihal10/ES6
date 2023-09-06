//Understanding Map in javascript

const idiot = [1, 2, 3, 4, 5];

const i = idiot.map((num) => num * 10);

console.log(i);

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
const v = alu.map((num) => num.age);
console.log(v);
