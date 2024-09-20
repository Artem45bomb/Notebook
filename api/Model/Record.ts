


export interface RecordBase{
    id:string,
    header:string,
    type: "note" | "task",
    tags:string[],
    date:string,
    private:boolean
}