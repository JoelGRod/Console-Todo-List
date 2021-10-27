// External
import colors from "colors";
// Inquirer
import {
  inquirerMenu,
  pause,
} from "./helpers/inquirer";
// Models
import { TodoList } from "./models/TodoList";
// Helpers
import { options } from "./helpers/options";
import { saveData, readData } from "./helpers/dataHandler";

console.clear();
colors; // Creates new string prototype that extends from the original

const main = async () => {
  
  let resp: string = "";
  const todoList = new TodoList();

  const dataDB = readData();
  if (dataDB) todoList.saveArrayData(dataDB);

  do {
    resp = await inquirerMenu();

    if (typeof options(todoList)[resp] === "function")
      await options(todoList)[resp]();

    saveData(todoList.list);

    if (resp !== "0") await pause();
  } while (resp !== "0");

};

main();
