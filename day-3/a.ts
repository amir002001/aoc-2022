export {};

const input = await Deno.readTextFile("./input.txt")


const rucksacks = input.split("\n")

let sum = 0;
const A_UPPER = "A".charCodeAt(0);
const A_LOWER = "a".charCodeAt(0);


for(const rucksack of rucksacks) {
    const first = rucksack.slice(0, rucksack.length/2)
    const second = rucksack.slice(rucksack.length/2)
    const firstSet = new Set(first.split(""))

    for(const char of second) {
        if(firstSet.has(char)) {
            let priority = 0;
            const charCode = char.charCodeAt(0)
            if(A_UPPER + 26 > charCode && A_UPPER <= charCode) {
                priority += charCode - A_UPPER + 27;
            } else {
                priority += charCode - A_LOWER + 1
            }
            sum += priority;
            break
        }
    }
    
}
console.log(sum)
// console.log(rucksacks)