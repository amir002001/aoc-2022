export {};

const input = await Deno.readTextFile("./input.txt");

let results = input.split("\r\n").map((str) => Number(str));

let elfPacks: number[] = [];
let currentCalories = 0;
for (let result of results) {
  if (result === 0) {
    elfPacks.push(currentCalories);
    currentCalories = 0;
    continue;
  }
  currentCalories += result;
}

elfPacks.sort((n1: number, n2: number) => n2-n1);

console.log(elfPacks[1]+elfPacks[2] + elfPacks[0]);
