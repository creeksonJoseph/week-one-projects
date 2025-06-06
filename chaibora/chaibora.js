//declaring constants for the ingredients
const w = 200;
const m = 50;
const t = 1;
const s = 2;
// declaring variables to hold the calculated amounts
let w1;
let m1;
let t1;
let s1;
let input;
let u;
//function to calculate the ingredients based on the number of cups of tea to be made
function calculateChaiIngredients(u) {
  m1 = m * u;
  t1 = t * u;
  s1 = s * u;
  w1 = w * u;
  return { m1, t1, s1, w1 };
}
//user input for the number of cups of tea
input = prompt("Enter the number of cups of tea you want to make:");
u = parseInt(input);
//output
calculateChaiIngredients(u);
console.log(`To make ${u} cups of tea, you need:`);
console.log(`${w1} ml of water`);
console.log(`${m1} ml of milk`);
console.log(`${t1} tsp of tea`);
console.log(`${s1} tsp of sugar`);
console.log(`Enjoy your tea!`);
