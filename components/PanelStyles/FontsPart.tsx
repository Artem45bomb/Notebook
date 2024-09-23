import React from "react";
import { ScrollView, StyleSheet, TextStyle, View} from "react-native";
import {BtnFont} from "@/ui/BtnFonts";


interface Props{
    fonts:{name:string,styles?:TextStyle}[]
}

export const FontsPart:React.FC<Props> =({fonts}) => {
    return<ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
    >
        <View style={styles.container}>

            {
                fonts.map(item=> <BtnFont key={item.name+"-font"}
                                          font={item.name}
                                          textStyle={item.styles}
                                          onPress={() => {}}
                />)
            }
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:19,
        width:"100%",
        justifyContent:"flex-start",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:11,
    },
    scrollContainer:{
        paddingHorizontal:20,
        maxHeight:235,
    }
})