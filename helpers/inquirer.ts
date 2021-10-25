var inquirer = require('inquirer');

const questions = [
    {
        type: "list",
        name: "option",
        message: "What goes next?",
        choices: [
            {
                name:`${"1.".green} Create task`,
                value: "1"
            },
            {
                name:`${"2.".green} List tasks`,
                value: "2"
            },
            {
                name:`${"3.".green} List completed tasks`,
                value: "3"
            },
            {
                name:`${"4.".green} List pending tasks`,
                value: "4"
            },
            {
                name:`${"5.".green} Complete task(s)`,
                value: "5"
            },
            {
                name:`${"6.".green} Delete task`,
                value: "6"
            },
            {
                name:`${"0.".green} Exit`,
                value: "0"
            },
        ]
    }
];

const pausePrompt = [
    {
        type: "input",
        name: "input",
        message: `Press ${"Enter".green} to continue`
    }
];

export const inquirerMenu = async () => {
    console.clear();
    console.log("========================".green);
    console.log("    Select an option    ".white);
    console.log("========================".green);

    const { option } = await inquirer.prompt(questions);
    return option;
}

export const pause = async () => {
    console.log("\n");
    await inquirer.prompt(pausePrompt);
}

export const readInput = async ( message: string ) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate( value: string ) {
                if( value.length === 0 ) {
                    return "Please, Enter a value";
                };
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}