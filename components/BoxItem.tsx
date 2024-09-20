import React, {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import CheckBox from "expo-checkbox";

interface Props{
    selected:boolean,
    textItem:string,
    onPress?:() => void,
    setValueCb:(arg:boolean) => void
}

export const BoxItem:React.FC<Props> = ({selected,onPress,textItem,setValueCb}) => {
    const [value,setValue]= useState(selected)

    const handlerChange = (value:boolean) => {
        setValueCb(value)
        setValue(value)
    }

    return <Pressable style={styles.container} onPress={onPress} >
            <CheckBox style={styles.checkBox}  color={"#7DB634"} value={value} onValueChange={handlerChange}/>

        <Text style={styles.text}>{textItem}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container:{
        gap:9,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"regular"
    },
    checkBox:{
        width:24,
        height:24,
        borderRadius:4,
        padding:2,
    }
})