import React from "react";
import type {Note} from "@/api/Model/Note";
import {FlatList,StyleSheet} from "react-native";
import {NoteItem} from "@/components/Note";
import {router} from "expo-router";


interface Props {
    notes:Note[]
}


export const NoteList:React.FC<Props> = ({notes}) => {

    const handlerClick = (id:string) =>router.navigate(`/(tabs)/(base)/show/${id}`)

    return <FlatList
        contentContainerStyle={styles.container}
        data={notes}
        renderItem={({item}) =><NoteItem onPress={() => handlerClick(item.id)} note={item}/>}
        keyExtractor={item => "notes-"+item.id}
        />
}


const styles = StyleSheet.create({
    container: {
        gap:13
    }
})