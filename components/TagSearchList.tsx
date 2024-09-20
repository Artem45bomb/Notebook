import React from "react";
import {FlatList, StyleSheet} from "react-native";

import {TagSearch} from "@/components/TagSearch";

interface Props{
    tags:string[],
}

export const TagSearchList:React.FC<Props> = ({tags}) => {

    return <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        data={tags}
        horizontal={true}
        contentContainerStyle={{gap:8}}
        renderItem={({item}) => <TagSearch tag={item}/>}
        keyExtractor={item =>`${item}-search`}

    />
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
    }
})