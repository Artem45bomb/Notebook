import React from "react";
import {Pressable, Text,StyleSheet} from "react-native";

interface Props {
    onPress:() => void,
    text:string,
}

export const BtnSign:React.FC<Props> = ({onPress,text}) => {
    return <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
}


const styles = StyleSheet.create({
    container: {
        paddingVertical:22,
        backgroundColor:"black",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:'white',
    }
})