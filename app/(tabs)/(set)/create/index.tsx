import React, {useState} from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import CreateNotePanel from "@/components/CreateNotePanel/CreateNotePanel";



const Index:React.FC = () => {

        return <ScrollView
            contentContainerStyle={styles.contentContainer}
            style={styles.container}
        >
                <Text style={styles.textHeader}>Create Note
                </Text>
                <CreateNotePanel/>
                <View style={styles.notContainer}></View>
        </ScrollView>;
}


const styles = StyleSheet.create({
    container:{
        paddingVertical:40,
        paddingBottom:100,
        display: "flex",
        flexDirection: "column",
        height:"100%",
        backgroundColor:"black",
        width:"100%",
        paddingHorizontal:20
    },
    view:{
        display:"flex",
        flexDirection:"column",
        flex:1,
        justifyContent:"center"
    },
    contentContainer:{
        justifyContent:"center",
    },
    notContainer:{
        paddingVertical:40,
        paddingHorizontal: 14,
    },
    textHeader:{
        color:"#FFFFFF",
        fontSize:50,
        fontWeight:"medium",
        marginBottom:35,
    }
})

export default Index