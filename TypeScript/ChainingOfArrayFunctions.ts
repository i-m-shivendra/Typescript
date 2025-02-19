let subjects: string[] = ["Mathematics-70", "Science-67", "English-88", 
    "Geography-62", "ComputerSc-55"];
subjects.map(value => value.toUpperCase()) // converts all the elements
// to upper case
    .filter(subjects => parseInt(subjects.substr(-2, 2)) > 65) // filters 
    //only the subjects having score greater than 65
    .forEach(sub => console.log(sub)); // displays all the 
    //filtered subjects in console
