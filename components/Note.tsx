import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Pressable} from "react-native";
import type {Note} from "@/api/Model/Note";
import {MonthsKey} from "@/api/Model/MonthsKey";
import {timeSinceCreation} from "@/api/functions/timeNote";
import {Lock} from "@/assets/svg/icon";



interface Props {
    note:Note,
    onPress:() => void
}

export const NoteItem :React.FC<Props> = ({note,onPress}) => {
    const date = new Date(note.date)
    const timeSince =timeSinceCreation(date)


    return (<Pressable onPress={() =>!note.private && onPress()}>
        {note.private && <><View style={styles.blurBackground}></View>
            <View style={styles.containerLock}>
                <Lock width={40} height={40} style={{marginBottom:11}}/>
                <Text style={styles.textLock}>Secure Password</Text>
                <Text style={styles.textLock}> Protection Note</Text>
            </View></>
        }
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.text}>{date.getDate()} {MonthsKey[date.getMonth()]}</Text>
            </View>
            <Text style={styles.textHeader}>{note.header[0].toUpperCase()+note.header.slice(1,note.header.length)}</Text>
            <Text style={[styles.text,styles.textInfo]}>{note.text}</Text>
            <View style={styles.timeSince}>
                {timeSince.time == "Just" && <View style={styles.online}></View>}
                <Text style={styles.text}>{timeSince.time !== "Just" && timeSince.count} {timeSince.time}</Text>
            </View>
        </View>
    </Pressable>)
}

const styles = StyleSheet.create({
    container: {
        borderRadius:9,
        padding: 16,
        backgroundColor:'#1F1F1F',
        display: 'flex',
        flexDirection: 'column',
        width:"100%",
        position:"relative",

    },
    containerPrivate:{

    },
    textHeader:{
        marginTop:8,
        marginBottom:11,
        fontSize:20,
        color:'white',
    },
    dateContainer:{
        display:"flex"
    },
    text:{
        color:"#ababab"
    },
    timeSince:{
        marginTop:8,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        flex:1,
        gap:5
    },
    textInfo:{
        fontWeight:"medium"
    },
    online:{
        height:7,
        aspectRatio:1,
        backgroundColor:"#7DB634",
        borderRadius:7
    },
    blurBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex:3,
        borderRadius:9,
        backgroundColor: 'rgba(31,31,31,0.89)',
    },
    containerLock:{
        zIndex:4,
        position:"absolute",
        width:"100%",
        top:0,
        left:0,
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    textLock:{
        lineHeight:20,
        fontSize:16,
        fontWeight:"regular",
        color:"white"
    }
})