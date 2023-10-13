//menu
// console.clear();
let whichProject = "";
while (whichProject !== '0') {
    console.clear();
    whichProject = prompt(
        "Enter 1 to see grade book\nEnter 2 to see tables\nEnter 3 to see grade to percentage\nEnter 4 to identify if a number is even or odd\nEnter 5 to vertically arrange your words\nEnter 0 to exit"
    );

    switch (whichProject) {
        case "1":
            let studentName = prompt("Enter student name:");
            let marks = prompt("Enter student marks:");
            marks = Number.parseInt(marks);

            if (marks <= 100 && marks >= 90) {
                console.log(studentName + "'s grade is " + "A+");
            } else if (marks <= 89 && marks >= 80) {
                console.log(studentName + "'s grade is " + "A");
            } else if (marks <= 79 && marks >= 70) {
                console.log(studentName + "'s grade is " + "B");
            } else if (marks <= 69 && marks >= 60) {
                console.log(studentName + "'s grade is " + "C");
            } else if (marks <= 59 && marks >= 50) {
                console.log(studentName + "'s grade is " + "D");
            } else if (marks > 100) {
                console.log("Numbers should be from 0 to 100");
            } else if (marks <= 49) {
                console.log("Fail");
            } else {
                alert("!!!!!Error!!!!!\nInput value is invalid!!!");
            }
            break;
        case "2":
            let x = prompt("Enter any number:");
            console.log("Table of " + x);
            for (let j = 1; j <= 10; j++) {
                console.log(x + " x " + j + " = " + x * j);
            }
            break;
        case "3":
            let y = prompt("Enter your grade:");
            switch (y) {
                case "A":
                    console.log("Your percentage is 95");
                    break;
                case "B":
                    console.log("Your percentage is 85");
                    break;
                case "C":
                    console.log("Your percentage is 75");
                    break;
                case "D":
                    console.log("Your percentage is 65");
                    break;
                case "E":
                    console.log("Your percentage is 55");
                    break;
                case "F":
                    console.log("Your percentage is 45");
                    break;
                default:
                    console.log("Grade should be from capital 'A' to capital 'F'");
                    break;
            }
            break;
        case "4":
            let z = prompt("Enter any number");
            let result =
                z % 2 === 0 ? "This is an even number" : "This is an odd number";
            console.log(result);
            break;
        case "5":
            let userWords = prompt("Enter any words you want to arrange vertically");
            let index = 0;
            while (index < userWords.length) {
                if (userWords[index] != " ") {
                    console.log(userWords[index].toUpperCase());
                }
                else {
                    
                }
                index++;
            }

            break;
        default:
            alert("!!!!!Error!!!!!\nInput value is invalid!!!");
            break;
    }
    alert("Press any key to clear console");
}

alert("Exiting the program. Press any key to exit.");