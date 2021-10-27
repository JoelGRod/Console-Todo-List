// Class
import { Task } from "./Task";
// Helpers
import { getDayMonthYear } from "../helpers/dates";

export class TodoList {
  private _list: { [uuid: string]: Task };

  constructor() {
    this._list = {};
  }

  get list(): Task[] {
    return Object.keys(this._list).map((id) => this._list[id]);
  }

  public saveArrayData = (list: Task[]): void => {
    list.forEach((task) => (this._list[task.id] = task));
  };

  public createTask(desc: string): void {
    const newTask = new Task(desc);
    this._list[newTask.id] = newTask;
  }

  public deleteTask(id: string) {
    if (this._list[id]) delete this._list[id];
  }

  // public completeTask( completedIds: string[] ): void {
  //   const modifiedTasks = this.list.map( task => {
  //     if( completedIds.includes(task.id) && !task.completedIn )
  //       task.completedIn = new Date();
  //     if( !completedIds.includes(task.id) ) task.completedIn = null;
  //     return task;
  //   });

  //   this.saveArrayData(modifiedTasks);
  // }
  public completeTask(completedIds: string[]): void {
    this.list.forEach((task) => {
      if (completedIds.includes(task.id) && !task.completedIn)
        this._list[task.id].completedIn = new Date();
      if (!completedIds.includes(task.id))
        this._list[task.id].completedIn = null;
    });
  }

  public showTasks(taskList: Task[]): void {
    taskList.forEach(({ desc, completedIn }, idx) => {
      const i = `${idx + 1}.`.green;
      const status = completedIn
        ? getDayMonthYear(completedIn.toString()).green
        : "Pending".red;
      console.log(`${i} ${desc} :: ${status}`);
    });
  }

  public showPendingCompletedTasks(completed: boolean = true): void {
    let taskList: Task[] = [];
    if (completed) taskList = this.list.filter((task) => task.completedIn);
    if (!completed) taskList = this.list.filter((task) => !task.completedIn);

    console.log();
    if (taskList.length === 0 && completed) {
      console.log("No Completed Tasks");
      return;
    } else if (taskList.length === 0 && !completed) {
      console.log("No Pending Tasks");
      return;
    }

    this.showTasks(taskList);
  }
}
