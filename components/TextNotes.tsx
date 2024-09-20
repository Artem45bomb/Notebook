import React, {useEffect} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {selectorRecord} from "@/store/slice/record/selector";
import type {Note} from "@/api/Model/Note";
import {init, update} from "@/store/slice/record/record";


interface Props {
    textRef:React.RefObject<TextInput>,
    isActive:boolean
}

export const TextNotes:React.FC<Props> = ({textRef,isActive}) => {
    const dispatch = useAppDispatch();
    const record = useAppSelector(selectorRecord);

    const handlerChange =(text:string) => {
        dispatch(update({entity:{...(record!.entity),text}}))
    }

    return <View style={styles.container}>
        <TextInput
            onChangeText={handlerChange}
            multiline={true}
            numberOfLines={10}
            value={record?.entity.text}
            style={{
                height:isActive?"auto" : "100%",
                ...styles.textarea
                }}
        />
    </View>
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        maxHeight:"100%",
        backgroundColor:"black",
    },
    textarea:{
        backgroundColor:"#161615",
        maxHeight:"100%",
        textAlignVertical:"top",
        color:'#A9A9A9',
    }
})
