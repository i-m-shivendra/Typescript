let scores: number[]=[67,54,32,89,87];

for(let i=0;i<scores.length;i++){
    console.log("Score of Player in "+i+" inning is::"+scores[i]);
}

console.log("\n");

scores.forEach((itr,i) => {
    console.log("Score of Player in "+i+" inning is::"+itr);
});

console.log("\n")

scores.forEach(itr => {
    console.log(itr);
});

console.log("\n");


for (const itr of scores) {
    console.log(itr);
}





  