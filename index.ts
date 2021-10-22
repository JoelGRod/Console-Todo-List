import colors from "colors";

// import { pause, showMenu } from "./helpers/messages";
import { inquirerMenu, pause } from "./helpers/inquirer";

console.clear();
colors;

const main = async () => {
    // console.log("Hello World".green);

    let resp: string = "";
    do {
        resp = await inquirerMenu();
        if( resp !== "0" ) await pause();
    } while ( resp !== "0" );

    /** Delete this */
    // Manual Menu
    // do {
    //     resp = await showMenu();
    //     console.log(resp);
    //     if( resp !== "0" ) await pause();
    // } while (resp !== "0");

}

main();