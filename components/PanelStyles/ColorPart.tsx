import React from "react";
import {FlatList, ScrollView, StyleSheet, View} from "react-native";
import {BtnColor} from "@/ui/BtnColor";


interface Props{
    colors:string[]
}

export const ColorPart:React.FC<Props> =({colors}) => {
    return<View style={styles.container}>
        <FlatList
            horizontal={true}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
            data={colors}
            renderItem={({item}) => <BtnColor
                color={item}
                onPress={() => {}
                }/>}
            keyExtractor={item =>`${item}-color`}
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
    },
    list:{
        display:"flex",
        flexDirection:"row",
    },
    content:{
        gap:17,
        justifyContent:"center",
        paddingHorizontal:21,
    }
})