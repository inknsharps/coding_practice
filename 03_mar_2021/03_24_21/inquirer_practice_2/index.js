const fs = require("fs");
const inquirer = require('inquirer');
const questions = [
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?",
        validate: function(answer){
            if (!answer){
                console.log("Required input not received. Aborting...");
                process.exit(1);
            }
            return true;
        },
    },
    {
        type: "input",
        name: "favourite_food",
        message: "What is your favourite food?",
        validate: function(answer){
            if (!answer){
                console.log("Required input not received. Aborting...");
                process.exit(1);
            }
            return true;
        },
        filter: function(value){
            return value.toLowerCase();
        }
    },
    {
        type: "list",
        name: "order_frequency",
        message: "How often do you eat your favourite food?",
        choices: ["Not very often", "Occassionally", "Very often"],
        filter: function(value){
            return value.toLowerCase();
        }
    }
]

// Regular promise based inquirer function
// function askName(){
//     inquirer
//         .prompt(questions)
//         .then(answers => {
//             // Use user feedback for... whatever!!
//             console.log(answers);
//             console.log(`My name is ${answers.first_name} and my favourite food is ${answers.favourite_food}!`);
//         })
//         .catch(error => {
//             if(error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//             } else {
//             // Something else went wrong
//             }
//         });
// };

// Async await based inquirer function, which does basically the same as the above
async function askName(){
    let answers = await inquirer.prompt(questions);
    console.log(answers)
    let answersLog = `My name is ${answers.first_name} and my favourite food is ${answers.favourite_food}. I have it ${answers.order_frequency}!`;
    fs.writeFile("myfavouritefoods.md", answersLog, err => {
        if (err) throw err;
        console.log("File created!");
    });
}

askName();