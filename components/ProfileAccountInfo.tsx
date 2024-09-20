import React from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";
import {Profile} from "@/ui/Profile";
import {Correct} from "@/assets/svg/icon";


interface Props {
    lastname: string;
    firstname: string;
    email: string;
}


export const ProfileAccountInfo:React.FC<Props> =({firstname,lastname,email}) => {
    return <View style={styles.container}>
        <View style={styles.content}>
            <Profile
                styleContainer={styles.profile}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                height={65}
            />
            <View style={styles.textInfo}>
                <Text style={styles.text}>{firstname} {lastname}</Text>
                <Text style={styles.textEmail}>{email}</Text>
            </View>
        </View>
        <Pressable>
            <Correct width={34} height={34} />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:24,
        paddingHorizontal:18,
        borderRadius:7,
        backgroundColor:'rgba(35,35,35,0.96)',
    },
    textInfo:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:4
    },
    content:{
        display:"flex",
        flexDirection:"row",
        gap:13,
        alignItems:"center"
    },
    text:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
    },
    textEmail:{
        fontSize:14,
        color:"white",
        fontWeight:"regular",
    },
    profile:{
        borderWidth:2,
        borderStyle:"solid",
        borderColor:"white"
    }
})
