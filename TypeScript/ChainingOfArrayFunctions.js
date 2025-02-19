var subjects = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
subjects.map(function (value) { return value.toUpperCase(); }) // converts all the elements to upper case
    .filter(function (subjects) { return parseInt(subjects.substr(-2, 2)) > 65; }) // filters only the subjects having score greater than 65
    .forEach(function (sub) { return console.log(sub); }); // displays all the filtered subjects in console
