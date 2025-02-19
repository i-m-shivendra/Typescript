
const subjectsE = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];

// Convert the text to uppercase using map() function
const upperCaseSubjects = subjectsE.map(subject => subject.toUpperCase());

// Use filter() to extract numerical values and verify if the value is greater than 65
const filteredSubjects = upperCaseSubjects.filter(subject => {
    const score = parseInt(subject.split('-')[1]);
    return score > 65;
});

// Display the final list of subjects and their marks
console.log(filteredSubjects);
