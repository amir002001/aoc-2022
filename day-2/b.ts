export {};

const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n").map((round) => round.split(" "));

let total = 0;

const themMap = new Map(["A", "B", "C"].map((val, i) => [val, i]));

for (const [they, scenario] of rounds) {
    let myMove = 0;
    const theirMove = themMap.get(they)!;

    let roundTotal = 0;

    switch (scenario) {
        case "X":
            myMove = (3 + theirMove - 1) % 3;
            roundTotal += 0;
            break;
        case "Y":
            roundTotal += 3;
            myMove = theirMove;
            break;
        case "Z":
            myMove = (theirMove + 1) % 3;
            roundTotal += 6;
            break;
    }

    switch (myMove) {
        case 0:
            roundTotal += 1
            break;
        case 1:
            roundTotal += 2
            break;
        case 2:
            roundTotal += 3
            break;
    }
    total += roundTotal
}
console.log(total);
