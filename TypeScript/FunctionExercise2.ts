// Arrow function to filter strings with length less than or equal to four
const filterSmallWords = (...words: string[]): string[] => {
    const smallWords: string[] = words.filter(word => word.length <= 4);
    return smallWords;
}

// Input array
const words1 = ["batter", "zoo", "care", "mate", "stale", "seek", "silence", "tail", "act", "many"];

// Calling the function and displaying the result
const smallWords = filterSmallWords(...words1);
console.log(smallWords);
