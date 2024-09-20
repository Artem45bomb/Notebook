import {View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import {NoteList} from "@/components/NoteList";
import {SearchNote} from "@/components/SearchNote";
import {DateList} from "@/components/DateList";
import {getPlus7Day} from "@/api/functions/getPlus7Day";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {selectorNotes, selectSearch} from "@/store/slice/note/selector"
import {TagSearchList} from "@/components/TagSearchList";
import note, {initNotes} from "@/store/slice/note/note";
import {HeaderMain} from "@/components/HeaderMain";
import {getDataJSON, saveDataJSON} from "@/api/files";
import {NotesFile} from "@/api/types/files";





const times = getPlus7Day(new Date())


const  Home:React.FC = () =>{
    const [selected,setSelected]=useState(-1);
    const notes = useAppSelector(selectorNotes);
    const notesSearch = useAppSelector((state) => selectSearch(state));
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const notesFile =await getDataJSON<NotesFile>("notes.json")
            if(notesFile === false){
                await saveDataJSON("notes.json",{notes:[]})
                return;
            }
            dispatch(initNotes(notesFile.notes))
        })()
    },[])

    return (<View style={styles.container}>
        <View style={styles.containerContent}>
            <HeaderMain/>
            <View style={styles.containerDateList}>
                <DateList dates={times} selected={selected} setSelected={setSelected}/>
            </View>
            <View style={styles.contTagsList}>
                <TagSearchList tags={Array.from((new Set(notes.flatMap(note => note.tags))).values())}/>
            </View>
            <View style={styles.containerNoteList}>
                <NoteList notes={notesSearch}/>
            </View>
        </View>

    </View>)
}

const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        maxHeight:"100%",
        backgroundColor:"rgb(23,22,22)",
        display: 'flex',
        flexDirection: 'column',
        flex:1,
    },
    containerNoteList:{
        marginTop:21,
        flex:1,
        paddingBottom:5
    },
    containerContent:{
        flex:1,
        width:'100%',
        paddingHorizontal:20,
        display:"flex",
        flexDirection:"column",
    },
    containerNav:{
        height:88,
        width:'100%',
        position:"relative",
        backgroundColor:"#161615",
    },
    containerDateList:{
        marginTop:34,
        minHeight:91
    },
    contTagsList:{
        marginTop:30,
        minHeight:27
    }
})

export default Home;