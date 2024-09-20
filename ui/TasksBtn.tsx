import React from "react";
import {Pressable, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import TaskBtnIcon from "@/assets/svg/icon/task-btn.svg"

interface Props{
    onPress: () => void
}

export const TasksBtn:React.FC<Props> = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.info}>
            <TaskBtnIcon width={23} height={13}/>
            <Text style={styles.text}>Tasks</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#873AB6",
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
        alignItems:"center",
        gap:14
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"medium"
    }
})