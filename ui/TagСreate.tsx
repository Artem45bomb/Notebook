import React from "react";
import {Pressable, Text,StyleSheet} from "react-native";


interface Props {
    tag:string,
    onPress?:() => void,
}
export const TagCreate:React.FC<Props> = ({tag,onPress}) => {

    return <Pressable style={styles.container } onPress={onPress}>
        <Text style={styles.text}>#{tag}</Text>
    </Pressable>
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:21,
        paddingVertical:8,
        borderRadius:8,
        // borderColor:"#A9A9A9",
        // borderStyle:"solid",
        // borderWidth:2,
        backgroundColor:"#2C2C2E",
    },
    text:{
        lineHeight:27,
        color:"#A9A9A9",
        fontWeight:"regular",
        fontSize:21
    },
    selectText:{
        color:"white"
    }
})
