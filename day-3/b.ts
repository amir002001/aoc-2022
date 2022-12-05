export {};

const input = await Deno.readTextFile("./input.txt");

const rucksacks = input.split("\n");

let sum = 0;
const A_UPPER = "A".charCodeAt(0);
const A_LOWER = "a".charCodeAt(0);

let lastThree: String[] = [];
let count = 0;
for (const rucksack of rucksacks) {
    lastThree.push(rucksack);

    if (lastThree.length !== 3) continue

    const set1 = new Set(lastThree[0]);
    const set2 = new Set(lastThree[1]);

    for (const char of lastThree[2]) {
        if (set1.has(char) && set2.has(char)) {
            let priority = 0;
            const charCode = char.charCodeAt(0);
            if (A_UPPER + 26 > charCode && A_UPPER <= charCode) {
                priority += charCode - A_UPPER + 27;
            } else {
                priority += charCode - A_LOWER + 1;
            }
            sum += priority;
            break;
        }
    }

    lastThree = []
}
console.log(sum);
