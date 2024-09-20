import React, {useState} from "react";
import {Pressable, Text, StyleSheet, TextInput} from "react-native";
import {useAppDispatch} from "@/hooks/redux";
import {addTag} from "@/store/slice/record/record";



interface Props {
    setCreateTag:(arg:boolean) => void
}
export const TagInput:React.FC<Props> = ({setCreateTag}) => {
    const [text,setText] = useState("")
    const dispatch = useAppDispatch()

    const handlerChange = (text:string) => setText(text)

    const save = () => {
        setCreateTag(false)
        if(text.length) dispatch(addTag(text))
    }

    return <Pressable style={styles.container }>
        <Text style={styles.text}>#</Text>
        <TextInput
            style={[styles.text,styles.textInput]}
            value={text}
            onChangeText={handlerChange}
            onSubmitEditing={save}
        />
    </Pressable>
}


const styles = StyleSheet.create({
    container:{
        width:110,
        height:40,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:17,
        borderRadius:8,
        borderColor:"#A9A9A9",
        borderStyle:"solid",
        borderWidth:2,
        backgroundColor:"#1E1E1E",
    },
    text:{
        lineHeight:20,
        color:"#A9A9A9",
        fontWeight:"regular",
        fontSize:20
    },
    textInput:{
        width:"100%",
    },
    selectText:{
        color:"white"
    }
})
