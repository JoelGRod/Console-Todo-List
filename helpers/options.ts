// Models
import { TodoList } from "../models/TodoList";
// Helpers
import { 
    confirmation, 
    deleteTasks, 
    readInput, 
    selectTasks 
} from "./inquirer";

export const options = (todoList: TodoList): { [id: string]: Function } => {
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
        todoList.completeTask(ids);
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