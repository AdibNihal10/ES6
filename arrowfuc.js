const value = (num1, num2, num3) => {
  const total = num1 * num2 * num3;
  return total;
};

const result = value(2, 3, 4);

console.log(result);

const name = `I am web Developer
I love to code 
I love to eat biryani`;

console.log(name);

const value1 = (num4, num5 = 500) => {
  const total = num4 + num5;
  return total;
};

const a = value1(10);
console.log(a);

const arr = (nam) => {
  const nam1 = [];
  for (let i = 0; i < nam.length; i++) {
    if (nam[i].length % 2 === 0) {
      nam1.push("ano");
    }
  }
  return nam1;
};

const ar = ["Messi", "Ron", "Nihal"];
const aaa = arr(ar);
console.log(aaa);

//Array Spread

const Ai = [1, 2, 3, 4];
const Bi = [4, 5, 6, 7];

const array1 = (arr1, arr2) => {
  const mela = [...arr1, ...arr2];
  const [] = mela;
  const maxx = Math.max(...mela);
  return maxx;
};
const valo = array1(Ai, Bi);
console.log(valo);

const addValueIfLengthEven = (friendsArray) => {
  for (let i = 0; i < friendsArray.length; i++) {
    if (friendsArray[i].length % 2 === 0) {
      friendsArray[i] += " NewValue"; // You can replace "NewValue" with the value you want to add.
    }
  }
  return friendsArray;
};

const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];

const updatedFriends = addValueIfLengthEven(friends);

console.log(updatedFriends);
console.log(friends);
