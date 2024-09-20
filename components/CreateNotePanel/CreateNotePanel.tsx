import {View, StyleSheet, Text} from "react-native";
import React, {useCallback, useState} from "react";
import {NoteItemPanel} from "@/components/CreateNotePanel/NoteItemPanel";
import {NotesBtn} from "@/ui/NotesBtn";
import {TasksBtn} from "@/ui/TasksBtn";
import {Microphone,Camera,Private,PinnedFile,Scetch} from "@/assets/svg/icon"
import {router} from "expo-router";
import type {Note} from "@/api/Model/Note";
import {init} from "@/store/slice/record/record";
import {useAppDispatch} from "@/hooks/redux";
import {RecordBase} from "@/api/Model/Record";
import {BoxItem} from "@/components/BoxItem";

const CreateNotePanel:React.FC = () => {
    const [record,setRecord] = useState<Omit<RecordBase,"id" | "date">>({
        header: "",
        type: "note",
        tags:[],
        private: false
    })
    const dispatch = useAppDispatch();


    const handlerCreateNotes = () => {
        const note:Omit<Note,"id"| "date"> = {
            ...record,
            type: "note",
            text:""
        }

        dispatch(init({entity: note}))
        router.push("/notes")
    }

    const handlerClickPrivate = (isPrivate:boolean) => {
        setRecord(prev => ({...prev,private:isPrivate}))
    }

    return <View style={styles.container}>
        <View style={styles.containerElems}>
            <NoteItemPanel SvgIcon={() =><Camera fill={"#5F5AC9"} width={22} height={20}/>} title={"Camera"}>
            </NoteItemPanel>
            <NoteItemPanel SvgIcon={() =><Scetch width={24} height={24}/>} title={"Drawing Sketch"}>
            </NoteItemPanel>
            <NoteItemPanel SvgIcon={() =><PinnedFile width={19} height={26}/>} title={"Attach File"}>
            </NoteItemPanel>
            <NoteItemPanel SvgIcon={() =><Microphone width={21} height={27}/>} title={"Audio File"}>
            </NoteItemPanel>
            <NoteItemPanel SvgIcon={() =><Private width={19} height={24}/>} title={"Private Notes"}>
                <BoxItem selected={record.private} textItem={"Private note"} setValueCb={handlerClickPrivate}/>
            </NoteItemPanel>
        </View>
        <View style={styles.containerBtn}>
            <NotesBtn onPress={handlerCreateNotes}/>
            <TasksBtn onPress={() => {}}/>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1F1F1F",
        borderRadius:11,
        width:"100%",
    },
    containerBtn:{
        paddingHorizontal:16,
        paddingVertical:18,
        borderBottomEndRadius:11,
        borderBottomStartRadius:11,
        borderTopColor:"rgba(56,56,56,0.33)",
        borderTopWidth:3,
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        gap:10,
    },
    containerElems:{
        display:"flex",
        flexDirection:"column",
        gap:35,
        paddingHorizontal:16,
        paddingVertical:27,
    }
})

export default CreateNotePanel