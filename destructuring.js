//object destructuring
const fish = {
  name: "Pabda",
  age: 2,
  species: "Rui",
  taste: "hebby",
};

const { name } = fish;

console.log(name);

//array destructuring

const messi = [1, 2, 3, 4, 5, 1];

const [me, ron] = [12, 4];

console.log("the messi are %c" + ron, me);
