var inquirer = require('inquirer');

const questions = [
    {
        type: "list",
        name: "Option",
        message: "What goes next?",
        choices: ['opt1', 'opt2', 'opt3', 'exit']
    }
];

export const inquirerMenu = async () => {
    console.clear();
    console.log("========================".green);
    console.log("    Select an option    ".green);
    console.log("========================".green);

    const option = await inquirer.prompt(questions);
    return option;
}