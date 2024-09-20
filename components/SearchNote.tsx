import React, {Dispatch, SetStateAction} from "react";
import {View, StyleSheet, TextInput} from "react-native";
import SearchInput from "@/assets/svg/icon/search.svg"


interface Props{
    value:string,
    handlerChange:(value: string) => void,
}

export const SearchNote:React.FC<Props> = ({value,handlerChange}) => {

    return <View style={styles.container}>
        <SearchInput width={23} height={23}/>
        <TextInput
            placeholder={"Search note"}
            placeholderTextColor="#ababab"
            style={[styles.searchInput,styles.text]}
            value={value}
            onChangeText={handlerChange}
        />
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth:"100%",
        display:"flex",
        alignItems:"center",
        gap:7,
        paddingHorizontal:20,
        paddingVertical:16,
        flexDirection:"row",
        backgroundColor:"#1F1F1F",
        borderRadius:11
    },
    text:{
        fontSize:20,
        fontWeight:"medium",
        color:"#ababab"
    },
    searchInput:{
        paddingHorizontal:10,
        width:"100%",
        fontSize:20,
        fontWeight:"medium"
    }
})