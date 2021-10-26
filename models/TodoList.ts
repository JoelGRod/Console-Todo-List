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

  public showTasks( taskList: Task[] ): void {
    taskList.forEach( ( { desc, completedIn }, idx ) => {
        const i = `${ ( idx + 1 ) }.`.green;
        const status = completedIn ? completedIn.toString().green : 'Pending'.red;
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

  public showPendingCompletedTasks( completed: boolean = true ): void {

    let taskList: Task[] = [];
    if( completed ) taskList = this.list.filter( task => task.completedIn );
    if( !completed ) taskList = this.list.filter( task => !task.completedIn );

    console.log();
    if( taskList.length === 0 && completed ) {
        console.log("No Completed Tasks");
        return;
    } else if( taskList.length === 0 && !completed ) {
        console.log("No Pending Tasks");
        return;
    };
    
    this.showTasks( taskList );
  }
}
