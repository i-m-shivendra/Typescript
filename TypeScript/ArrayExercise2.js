var subjectsE = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
// Convert the text to uppercase using map() function
var upperCaseSubjects = subjectsE.map(function (subject) { return subject.toUpperCase(); });
// Use filter() to extract numerical values and verify if the value is greater than 65
var filteredSubjects = upperCaseSubjects.filter(function (subject) {
    var score = parseInt(subject.split('-')[1]);
    return score > 65;
});
// Display the final list of subjects and their marks
console.log(filteredSubjects);
