const num = [33, 50, 79, 78, 90, 100];

const n = num.filter((n) => n % 10 === 0);

console.log(n);

let data = { location: [{ latitude: "messi", logitude: 12, city: "mumbai" }] };

const val = data.location[0].city;
console.log(val);

const meena = [
  {
    name: "Meena",
    age: 12,
  },
  {
    name: "Raju",
    age: 11,
  },
  {
    name: "Kalu",
    age: 10,
  },
];
let sum = 0;
for (let i = 0; i < meena.length; i++) {
  let num = meena[i].age;
  sum += num;
  console.log(num, sum);
}

console.log(sum);

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 3, 2]));

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
