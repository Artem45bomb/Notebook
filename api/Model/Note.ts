import {RecordBase} from "@/api/Model/Record";

export interface Note extends RecordBase {
    text: string;
    type:"note"
}