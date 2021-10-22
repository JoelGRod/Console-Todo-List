import { ReadLine } from "readline";

export const showMenu = () => {
  return new Promise<string>((resolve) => {
    console.clear();
    console.log("========================".green);
    console.log("    Select an option    ".green);
    console.log("========================".green);

    console.log(`
            ${"1.".green} Create task
            ${"2.".green} List tasks
            ${"3.".green} List completed tasks
            ${"4.".green} List pending tasks
            ${"5.".green} Complete task(s)
            ${"6.".green} Delete task
            ${"0.".green} Exit
        `);
    
    const readline = initInput();
    readline.question("Selection: ", (resp: string) => {
      readline.close();
      resolve(resp);
    });
  });
};

export const pause = () => {
  return new Promise<void>((resolve) => {
    const readline = initInput();
    readline.question(`Press ${"Enter".green} to continue`, (resp: string) => {
      readline.close();
      resolve();
    });
  });
};

const initInput = (): ReadLine => {
  return require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};
