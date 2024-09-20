import {StyleSheet, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {TextNotes} from "@/components/TextNotes";
import {PanelRefactoring} from "@/components/PanelRefactoring";
import {HeaderNew} from "@/components/HeaderNew";
import {TagList} from "@/components/TagList";
import {TagInput} from "@/components/TagInput";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {selectorRecord} from "@/store/slice/record/selector";
import {router, useLocalSearchParams} from "expo-router";
import {selectNoteId} from "@/store/slice/note/selector";
import {deleteNote, updateNote} from "@/store/slice/note/note";
import * as fsNotes from "@/api/files/notes";
import {save,init} from "@/store/slice/record/record";
import type {Entity} from "@/store/slice/record/type";
import {Note} from "@/api/Model/Note";




const Index:React.FC = () => {
    const {id} = useLocalSearchParams()
    const note = useAppSelector(state =>  selectNoteId(state,id+"" ))
    const [createTag,setCreateTag] = useState(false);
    const textRef = React.useRef<TextInput>(null);
    const record = useAppSelector(selectorRecord)
    const dispatch= useAppDispatch();

    if(note === undefined){
        router.push("/(base)")
        return ;
    }

    const deleteRecord =async () => {
        await fsNotes.deleteNote(id+"");
        dispatch(deleteNote(id+""))
        dispatch(save())
        router.push("/(base)")
    }

    useEffect(() => {
        if(note !== undefined)
        dispatch(init({typeState:"refactoring",entity:note}))
    }, []);

    const add = async () => {
        if(record?.typeState !== "create" && note && record && record.entity.type === "note"){
            const update:Note = {id:note.id,date:note.date,...record.entity}
            await fsNotes.updateNote(update)
            dispatch(updateNote(update))
        }
        else if(record?.typeState === "create" ){
            dispatch(deleteNote(id+""))
        }
        dispatch(save())
        router.navigate("/(base)")
    }

    return <View style={styles.container}>
        <HeaderNew
            deleteCb={deleteRecord}
            isEmptyRecord={record?.typeState !== "create"}
            createTag={createTag} setCreateTag={setCreateTag}
        />
        <View style={styles.containerText}>
            <TextNotes textRef={textRef} isActive={false}/>
        </View>
        <View style={styles.containerTag}>
            {createTag && <TagInput setCreateTag={setCreateTag}/>}<TagList/>
        </View>
        <PanelRefactoring add={add} textRef={textRef}/>
    </View>
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        maxHeight:"100%",
        width:"100%",
        backgroundColor:"#161615",
        paddingBottom:80
    },
    containerText:{
        paddingTop:40,
        paddingHorizontal:20,
        flex:1,
    },
    containerTag:{
        paddingBottom:18,
        paddingHorizontal:18,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:18,
        backgroundColor:"#161615",
        width:"100%",
        minHeight:60,
    },
})

export default Index;