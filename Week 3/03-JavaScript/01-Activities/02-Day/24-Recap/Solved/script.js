// Rows of Students
let studentsRow1 = ["Rachelle", "Jacob", "Jerome", "Greg", "Matt", "Walt"];
let studentsRow2 = ["Jeremiah", "Luis", "Nathan", "Analben"];
let studentsRow3 = ["Aisha", "Stephen", "John"];

// Entire Class
let entireClass = [studentsRow1, studentsRow2, studentsRow3];

// How do we print out every single student in Row 1?
for (let i = 0; i < studentsRow1.length; i++) {
    console.log(studentsRow1[i]);
}

// How do we print out every student in Row 2 whose first name begins with J?
for (let j = 0; j < studentsRow2.length; j++) {
    if (studentsRow2[j].charAt(0) === "J") {
        console.log("Starts with a J " + studentsRow2[j]);
    }
}

// Using the entireClass array, how do we access the second student in row 3?
console.log("Second Student in Row 3.");
console.log(entireClass[2][1]);

// Using the entireClass array, how do we access the third student in row 2?
console.log("Third student in Row 2.");
console.log(entireClass[1][2]);
