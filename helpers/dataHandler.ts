import fs from "fs";

import { Task } from "../models/Task";

const file: string = "./repository/data.json";

export const saveData = async ( data: Task[] ) => {
    try {
        await fs.writeFileSync( file, JSON.stringify( data ) );
    } catch (error) {
        console.log(error);
    }
}

export const readData = (): Task[] | null => {
    if( fs.existsSync(file) ) {
        const data = fs.readFileSync( file, { encoding: "utf-8" } );
        if(!data) return null;
        return JSON.parse(data);
    };
    return null;
}