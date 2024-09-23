import {StyleSheet, TextInput, View} from "react-native";
import React, { useState} from "react";
import {TextNotes} from "@/components/TextNotes";
import {PanelRefactoring} from "@/components/PanelRefactoring";
import {HeaderNew} from "@/components/HeaderNew";
import {TagList} from "@/components/TagList";
import {TagInput} from "@/components/TagInput";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {selectorRecord} from "@/store/slice/record/selector";
import {router} from "expo-router";
import {addNote} from "@/store/slice/note/note";
import {save} from "@/store/slice/record/record";
import {saveNote} from "@/api/files/notes";
import {Note} from "@/api/Model/Note";
import uuid from "react-native-uuid"
import {PanelStyles} from "@/components/PanelStyles/PanelStyles";



const Index:React.FC = () => {
    const [createTag,setCreateTag] = useState(false);
    const textRef = React.useRef<TextInput>(null);
    const record = useAppSelector(selectorRecord)
    const dispatch = useAppDispatch()
    const [isActivePanel,setIsActivePanel] = useState<boolean>(false)

    const deleteRecord = () => {
        dispatch(save())
        router.push("/(base)")
    }

    const add = async () => {
        if(record && record.typeState !== "create") {
            if (record.entity && record.entity.type == "note" && record.typeState === "update"){
                const uuidGenerate = uuid.v4()
                console.log("generate",uuidGenerate)
                const note: Note = {
                    id: `client-${uuidGenerate}`,
                    date: new Date().toISOString(),
                    ...record.entity,
                    header: record.entity.header.length > 0? record.entity.header : "Note",
                }
                await saveNote(note)
                dispatch(addNote(note))
            }
        }
        dispatch(save())
        router.navigate("/(base)")
    }

    return <View style={styles.container}>
        <HeaderNew
            setActivePanel={setIsActivePanel}
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
            <PanelRefactoring
                isActivePanel={isActivePanel}
                add={add}
                textRef={textRef}
            />
            <PanelStyles
                textRef={textRef}
                isActivePanel={isActivePanel}
            />
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