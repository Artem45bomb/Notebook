import React from "react";
import {Pressable, Text,StyleSheet} from "react-native";


interface Props {
    tag:string,
    onPress?:() => void,
    select?:boolean
}
export const Tag:React.FC<Props> = ({tag,onPress,select= false}) => {

    return <Pressable style={select ? [styles.container,styles.containerSelect] : styles.container } onPress={onPress}>
        <Text style={select ? [styles.text,styles.selectText] : styles.text}>{tag}</Text>
    </Pressable>
}


const styles = StyleSheet.create({
    container:{
        height:35,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:14,
        backgroundColor:"white",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:8,
        borderColor:"#1F1F1F"
    },
    containerSelect:{
        backgroundColor:"#1F1F1F",
        borderColor:"white"
    },
    text:{
        lineHeight:20,
        color:"#1F1F1F",
        fontWeight:"bold",
        fontSize:16
    },
    selectText:{
        color:"white"
    }
})