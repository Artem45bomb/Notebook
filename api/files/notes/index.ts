import {Note} from "@/api/Model/Note";
import {getDataJSON, saveDataJSON} from "@/api/files";
import {NotesFile} from "@/api/types/files";


export const saveNote = async (note:Note) => {
    const notesFile =await getDataJSON<NotesFile>("notes.json")
    if(notesFile === false){
        await saveDataJSON("notes.json",{notes:[]})
        return;
    }
    const save:NotesFile = {notes:[...notesFile.notes,note]}
    await saveDataJSON("notes.json",save)
}

export const updateNote = async (note:Note) => {
    const notesFile =await getDataJSON<NotesFile>("notes.json")
    if(notesFile === false){
        await saveDataJSON("notes.json",{notes:[]})
        return;
    }
    const save:NotesFile = {notes:notesFile.notes.map(e => (e.id === note.id) ? note : e)}
    await saveDataJSON("notes.json",save)
}


export const deleteNote = async (id:Note["id"]) => {
    const notesFile =await getDataJSON<NotesFile>("notes.json")
    if(notesFile === false){
        await saveDataJSON("notes.json",{notes:[]})
        return;
    }
    const save:NotesFile = {notes:notesFile.notes.filter(e => e.id !== id)}
    await saveDataJSON("notes.json",save)
}