export {};

const input = await Deno.readTextFile("./input.txt");

let results = input.split("\r\n").map(str => Number(str));

let maxCalories = 0;
let currentCalories = 0;
for (let result of results) {
  if (result === 0) {
    maxCalories = Math.max(currentCalories, maxCalories)
    currentCalories = 0;
    continue;
  }
  currentCalories += result
}

console.log(maxCalories);
