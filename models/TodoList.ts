import { Task } from "./Task";

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

  public showTasks(): void {
    this.list.forEach( ( { desc, completedIn }, idx ) => {
        const i = `${ (idx + 1) + '.' }`.green;
        const status = completedIn ? 'Completed'.green : 'Pending'.red;
        console.log(
            `${ i } ${ desc } :: ${ status }`
        );
    });

    // let taskNumeration = 1;
    // for (let { desc, completedIn } of Object.values(this._list)) {
    //   console.log(
    //     `${taskNumeration.toString().green + ".".green} ${desc} :: ${ completedIn ? "Completed".green : "Pending".red }`
    //   );
    //   taskNumeration++;
    // }
  }
}
