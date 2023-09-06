const nihal = {
  name: "Adib Bin Morshed",
  age: 22,
  Hobby: "futbol",
  playlike: { name: "messi", type: "spped", hub: "IM" },
};

//? is used as optional chaining here to skip the typeerror

const h = nihal.playlik?.hub;

console.log(h);
