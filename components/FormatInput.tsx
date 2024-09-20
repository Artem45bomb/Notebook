import React from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";


interface Props {
    setValue: (value: string) => void;
    value: string;
    type: "text" | "password";
    name:string
}

export const FormatInput:React.FC<Props> = ({setValue,value,type,name}) => {
    return<View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.text}>{name}</Text>
            {type === "password" && <Pressable onPress={()=>{}}>
                <Text style={styles.text}>Forgot ?</Text>
            </Pressable>
            }
        </View>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        height:"auto",
        gap:10
    },
    containerText:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    input:{
        borderRadius:6,
        color:"black",
        fontSize:20,
        backgroundColor:"#F4F4F4",
        height:65,
        width:"100%",
    },
    text:{
        fontSize:16,
        fontWeight:"regular",
        color:"black"
    }
})