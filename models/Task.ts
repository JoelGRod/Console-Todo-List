import { v4 as uuidv4 } from 'uuid';

export class Task {

    public id: string;
    public desc: string;
    public completedIn: Date | null;

    constructor( desc: string ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completedIn = null;
    }

}