var inquirer = require('inquirer');

function askName(){
    inquirer
        .prompt([
            /* Pass your questions in here */
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
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers);
            console.log(`My name is ${answers.first_name} and my favourite food is ${answers.favourite_food}!`);
        })
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
};

askName();