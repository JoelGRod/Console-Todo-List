import { Task } from "./Task";

export class TodoList {

    private _list: { [ uuid: string ]: Task };

    constructor() {
        this._list = {};
    }

    get list(): Task[] {
        return Object.keys(this._list).map( id => this._list[id] );
    }

    public createTask( desc: string ): void {
        const newTask = new Task( desc );
        this._list[newTask.id] = newTask;
    }

}