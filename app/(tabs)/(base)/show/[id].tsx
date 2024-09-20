import {Text, View,StyleSheet} from "react-native";
import React from "react";
import {router, useLocalSearchParams} from "expo-router";
import {useAppSelector} from "@/hooks/redux";
import {selectNoteId} from "@/store/slice/note/selector";


const Index:React.FC = () => {
    const {id} = useLocalSearchParams()
    const note = useAppSelector(state =>  selectNoteId(state,id+"" ))

    return <View style={styles.container}>
            <Text style={styles.text}>
                {note?.text}
            </Text>
        </View>
    }



    const styles = StyleSheet.create({
        container:{
            display:"flex",
            flexDirection:"column",
            height:"100%",
            maxHeight:"100%",
            width:"100%",
            backgroundColor:"#161615",
            paddingBottom:80,
            paddingTop:35,
            paddingHorizontal:20,
        },
        containerText:{
            paddingTop:40,
            paddingHorizontal:20,
            flex:1,
        },
        containerTag:{
            paddingBottom:18,
            paddingHorizontal:18,
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:18,
            backgroundColor:"#161615",
            width:"100%",
            minHeight:60,
        },
        text:{
            backgroundColor:"#161615",
            maxHeight:"100%",
            textAlignVertical:"top",
            color:'#A9A9A9',
        }
    })

    export default Index;