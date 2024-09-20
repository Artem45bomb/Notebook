import {RootState} from "@/store/store";
import {createSelector} from "reselect";
import {Note} from "@/api/Model/Note";
import exp from "node:constants";
import {state} from "sucrase/dist/types/parser/traverser/base";
import note from "@/store/slice/note/note";



export type SearchParams = {
    tags?:string[],
    name?:string,
    dateStart?:string
    dateEnd?:string
}

export function filterSearch(notes:Note[],{tags,dateStart,dateEnd,name}:SearchParams){
    let date0 =dateStart ? new Date(dateStart) : undefined
    let date1 =dateEnd ? new Date(dateEnd) : undefined

    return notes.filter(elem => {
        const date = new Date(elem.date)

        if(name && !elem.header.toUpperCase().includes(name?.toUpperCase())) return false;
        if(tags && !tags.every(tag => elem.tags.includes(tag))) return false
        if(date0 && date1 && !(date >= date0 && date1 >= date)) return false;
        return true;
    })
}


export const selector = (state: RootState) => state.note;
export const selectSearch = createSelector(
    [selector],
    (state) => state.searchNotes ?? []
);
export const selectId = (state:RootState,id:Note['id']) => id;

export const selectNoteId = createSelector([selector,selectId],(state,id) => state.notes.find(note => note.id === id))
export const selectSearchName = createSelector([selector],state => state.searchTag.name);
export const selectTags = createSelector([selector], (state) => state.searchTag.tags);

export const selectTag = (_: any, tag: string) => tag;

export const selectIsTag = createSelector(
    [selectTags, selectTag],
    (tags, tag) => tags.includes(tag)
);

export const selectorNotes = createSelector([selector], (state) => state.notes);