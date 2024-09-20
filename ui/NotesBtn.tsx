import React from "react";
import {Pressable, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import NotesIcon from "@/assets/svg/icon/notes.svg"

interface Props{
    onPress: () => void
}

export const NotesBtn:React.FC<Props> = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.info}>
            <NotesIcon width={26} height={26}/>
            <Text style={styles.text}>Notes</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7DB634",
        borderRadius:10,
        maxWidth:173,
        height:62,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    info:{
        display:"flex",
        flexDirection:"row",
        gap:14
    },
    text:{
        color:"black",
        fontSize:20,
        fontWeight:"medium"
    }
})