import React from "react";
import {Pressable, Text,StyleSheet} from "react-native";
import {SvgProps} from "react-native-svg";

interface Props {
    onPress:() => void,
    children:React.ReactNode
    text:string
}

export const BtnSignSO:React.FC<Props> = ({onPress,text,children}) => {
    return <Pressable onPress={onPress} style={styles.container}>
        {children}<Text style={styles.text}>Sign In</Text>
    </Pressable>
}


const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor:"rgba(0,0,0,0.1)",
        paddingVertical:22,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        gap:22,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    text:{
        fontSize:20,
        fontWeight:"medium",
        color:'black',
    }
})