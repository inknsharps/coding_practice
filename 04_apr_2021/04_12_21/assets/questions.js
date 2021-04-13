const initQuestions = [
    {
        type: "input",
        name: "podOrder",
        message: "Please input the number of the POD."
    },
    {
        type: "input",
        name: "customerEmail",
        message: "Please input the customer email."
    },
    {
        type: "input",
        name: "customerName",
        message: "Please input the customer name."
    },
    {
        type: "input",
        name: "workComposer",
        message: "Please input the composer's name."
    },
    {
        type: "input",
        name: "workTitle",
        message: "Please input the Title of the work."
    },
    {
        type: "confirm",
        name: "includeScore",
        message: "Does this POD include a score?"
    },
    {
        type: "confirm",
        name: "includeParts",
        message: "Does this POD include parts?"
    },
]

const scorePriceQuestion = [
    {
        type: "input",
        name: "scorePrice",
        message: "Please input the price of the score."   
    }
]

const partsPriceQuestion = [
    {
        type: "input",
        name: "partsPrice",
        message: "Please input the price of the parts."
    }
]

module.exports = {
    initQuestions,
    scorePriceQuestion,
    partsPriceQuestion
}