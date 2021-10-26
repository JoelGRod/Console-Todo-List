import colors from "colors";

// import { pause, showMenu } from "./helpers/messages";
import {
  confirmation,
  deleteTasks,
  inquirerMenu,
  pause,
  readInput,
  selectTasks,
} from "./helpers/inquirer";
import { TodoList } from "./models/TodoList";
import { saveData, readData } from "./helpers/dataHandler";

console.clear();
colors; // Creates new string prototype that extends from the original

const options = (todoList: TodoList): { [id: string]: Function } => {
  return {
    "1": async () => {
      const desc = await readInput("Task description:");
      todoList.createTask(desc);
    },
    "2": () => {
      console.log();
      todoList.showTasks(todoList.list);
    },
    "3": () => {
      todoList.showPendingCompletedTasks(true);
    },
    "4": () => {
      todoList.showPendingCompletedTasks(false);
    },
    "5": async () => {
      const ids = await selectTasks(todoList.list);
      console.log(ids);
    },
    "6": async () => {
      const id = await deleteTasks(todoList.list);
      if (id === "0") return;
      const confirm = await confirmation("Are you sure?");
      if (confirm) {
        todoList.deleteTask(id);
        console.log("Task deleted");
      }
    },
  };
};

const main = async () => {
  // console.log("Hello World".green);

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

  /** Delete this */
  // Manual Menu
  // do {
  //     resp = await showMenu();
  //     console.log(resp);
  //     if( resp !== "0" ) await pause();
  // } while (resp !== "0");
};

main();
