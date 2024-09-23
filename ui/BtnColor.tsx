import React from "react";
import {SvgProps} from "react-native-svg";
import {Pressable, StyleSheet, View, ViewStyle} from "react-native";


interface Props{
    color:string,
    onPress:()=>void,
    stylesWrapper?:ViewStyle[] | ViewStyle,
}

export const BtnColor:React.FC<Props> = ({stylesWrapper=[],color,onPress}) => {
    return <Pressable style={stylesWrapper} onPress={onPress}>
        <View style={[styles.containerColor,{backgroundColor:color}]}></View>
    </Pressable>
}

const styles = StyleSheet.create({
    containerColor: {
        width:50,
        aspectRatio:1,
        borderRadius:25,
    }
})