import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Note} from "@/api/Model/Note";
import {filterSearch} from "@/store/slice/note/selector";
import {Search, SearchDTO} from "@/store/slice/note/types";





interface InitialState{
    notes:Note[],
    searchNotes:Note[],
    searchTag:Search
}

const initialState:InitialState = {
    notes:[],
    searchNotes:[],
    searchTag:{
        tags:[],
    }
}

export const noteSlice= createSlice({
    name: "notes",
    initialState,
    reducers:{
        initNotes:(state: InitialState,action: PayloadAction<Note[]>) => {
            state.notes = action.payload
            state.searchNotes = filterSearch(state.notes,state.searchTag)
        },
        updateNote:(state,{payload}:PayloadAction<Note>) => {
            const {notes,searchTag} = state
            state.notes = notes.map(note => note.id === payload.id ? payload : note)
            state.searchNotes = filterSearch(state.notes,searchTag)
        },
        addNote:(state,action:PayloadAction<Note>) => {
            const {notes,searchNotes ,searchTag} = state
            state.notes = [action.payload,...notes]
            state.searchNotes = [...filterSearch([action.payload],searchTag),...searchNotes]
        },
        deleteNote:(state,action:PayloadAction<string>) => {
            const {notes ,searchNotes} = state
            console.log(action.payload)
            state.notes = notes.filter(note => note.id !== action.payload)
            state.searchNotes = searchNotes.filter(note => note.id !== action.payload)
        },
        searchTagAdd:(state: InitialState,action: PayloadAction<string>) => {
            state.searchTag.tags = [...state.searchTag.tags,action.payload];
            state.searchNotes = state.searchNotes.filter(note => state.searchTag.tags.every(tag => note.tags.includes(tag)))
        },
        searchTagDelete:(state: InitialState,action: PayloadAction<string>) => {
            state.searchTag.tags = state.searchTag.tags.filter(tag => tag !== action.payload)
            state.searchNotes = state.notes.filter(note => state.searchTag.tags.every(tag => note.tags.includes(tag)))
        },
        searchParam:(state: InitialState,action: PayloadAction<SearchDTO>) => {
            const {tags,name,dateStart,dateEnd} = action.payload
            if(tags && tags.length > 0) state.searchTag.tags =tags;
            if(name !== undefined) state.searchTag.name = name;
            if(dateEnd) state.searchTag.dateEnd = dateEnd;
            if(dateStart) state.searchTag.dateStart = dateStart;
            if(dateEnd == null) state.searchTag.dateEnd = undefined;
            if(dateStart == null) state.searchTag.dateEnd = undefined;
            console.log("dateStart:",dateEnd,"dateEnd:",dateEnd)
            state.searchNotes = filterSearch(state.notes,state.searchTag);
        }
    }
})

export const {initNotes,updateNote,addNote,deleteNote,searchTagAdd,searchTagDelete,searchParam} = noteSlice.actions;
export default noteSlice.reducer
