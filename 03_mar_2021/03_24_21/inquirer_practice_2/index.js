const inquirer = require('inquirer');
const questions = [
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?"
    },
    {
        type: "input",
        name: "favourite_food",
        message: "What is your favourite food?"
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
    console.log(`My name is ${answers.first_name} and my favourite food is ${answers.favourite_food}!`);
}

askName();