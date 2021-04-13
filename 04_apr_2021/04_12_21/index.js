require('dotenv').config();

const inquirer = require("inquirer");
const { initQuestions, scorePriceQuestion, partsPriceQuestion } = require("./assets/questions.js");
const { makeScoreAndPartsTemplate, makeScoreOnlyTemplate, makePartsOnlyTemplate } = require("./assets/emailTemplates.js");
const open = require("open");

// This prompts in the command line the questions needed to generate a POD email
// I made this async because the two if statements try to prompt at the same time which causes some issues in inquirer
inquirer.prompt(initQuestions)
    .then(async (initAnswers) => {
        if (initAnswers.includeScore === true){
            await inquirer.prompt(scorePriceQuestion)
                .then((scorePriceAnswer) =>{
                    initAnswers.scorePrice = scorePriceAnswer.scorePrice;
                })
        }
        if (initAnswers.includeParts === true){
            await inquirer.prompt(partsPriceQuestion)
                .then((partsPriceAnswer) => {
                    initAnswers.partsPrice = partsPriceAnswer.partsPrice;
                })
        }
        return initAnswers;
    })
    .then((completeAnswers) => {
        const emailSubject = `Print on Demand Request no. ${completeAnswers.podOrder} - ${completeAnswers.workComposer}: ${completeAnswers.workTitle}`;
        let emailTemplate;
        if (completeAnswers.includeScore === true && completeAnswers.includeParts === true){
            emailTemplate = makeScoreAndPartsTemplate(completeAnswers.customerName, completeAnswers.workComposer, completeAnswers.workTitle, completeAnswers.scorePrice, completeAnswers.partsPrice);
        } else if (completeAnswers.includeScore === false && completeAnswers.includeParts === true) {
            emailTemplate = makePartsOnlyTemplate(completeAnswers.customerName, completeAnswers.workComposer, completeAnswers.workTitle, completeAnswers.partsPrice);
        } else {
            emailTemplate = makeScoreOnlyTemplate(completeAnswers.customerName, completeAnswers.workComposer, completeAnswers.workTitle, completeAnswers.scorePrice);
        }
        // We use open here to throw out a mailto link with all the parameters that we've gotten from the inquirer questions
        open(`mailto:${completeAnswers.customerEmail}?subject=${emailSubject}&body=${emailTemplate}`);
    })