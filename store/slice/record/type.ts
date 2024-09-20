

import type {Note} from "@/api/Model/Note";
import {Task} from "@/api/Model/Task";
import {RecordBase} from "@/api/Model/Record";

export type TypeState = "create" | "update" | "save" | "refactoring"


type Field = {id?:RecordBase["id"],date:RecordBase["date"]}
export type Entity = Omit<Note,"id" | "date"> | Omit<Task,"id" | "date"> & Field;

export type Payload ={
    typeState:TypeState
    entity:Entity;
}




export type ActionPayload = Omit<Payload, "typeState">
export type ActionUpdate = {typeState?:TypeState} & ActionPayload
export type ActionInit = ActionPayload & {typeState?:TypeState}

export interface InitialState{
    record:Payload | undefined
}