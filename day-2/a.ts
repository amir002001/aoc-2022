export {};

const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n").map((round) => round.split(" "));

let total = 0;

const themMap = new Map(["A", "B", "C"].map((val, i) => [val, i]));
const meMap = new Map(["X", "Y", "Z"].map((val, i) => [val, i]));

for (const [they, me] of rounds) {
    const myMove = meMap.get(me)!;
    const theirMove = themMap.get(they)!;

    let roundTotal = 0;

    switch (me) {
        case "X":
            roundTotal += 1;
            break;
        case "Y":
            roundTotal += 2;
            break;
        case "Z":
            roundTotal += 3;
            break;
    }

    
    if ((theirMove + 1) % 3 === myMove) roundTotal += 6;
    else if(!((myMove + 1) % 3 === theirMove)) roundTotal += 3;

    total += roundTotal
}
 console.log(total);
