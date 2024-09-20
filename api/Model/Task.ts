import {RecordBase} from "@/api/Model/Record";


export interface Task extends RecordBase {
    header:string,
    text: string
    progress:number
    type:"task"
    dateOfEnd:number
}

