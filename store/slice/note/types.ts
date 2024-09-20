


export type Search = {
    tags:string[],
    name?:string,
    dateEnd?:string,
    dateStart?:string,
}

export type SearchDTO = {
    tags?:string[],
    name?:string,
    dateEnd?:string | null,
    dateStart?:string | null,
}