import React from "react";
import {SvgProps} from "react-native-svg";
import {Pressable, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";


interface Props{
    font:string,
    textStyle?:TextStyle,
    onPress:()=>void,
    stylesWrapper?:ViewStyle[] | ViewStyle,
}

export const BtnFont:React.FC<Props> = ({stylesWrapper=[],font,textStyle,onPress}) => {
    return <Pressable style={[styles.container,stylesWrapper]} onPress={onPress}>
        <Text style={[styles.textBase,textStyle]}>{font}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:19,
        minWidth:110,
        paddingHorizontal:15,
        borderRadius:12,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1F1F1F",
    },
    textBase:{
        fontSize:20,
        fontWeight:"regular",
        color:"white"
    }
})