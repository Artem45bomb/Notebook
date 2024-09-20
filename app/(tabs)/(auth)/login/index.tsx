import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {BtnSign} from "@/ui/BtnSign";
import {BtnSignSO} from "@/ui/BtnSignSO";
import {Google, KeyLock} from "@/assets/svg/icon";
import {FormatInput} from "@/components/FormatInput";
import {Link} from "expo-router";


const Index:React.FC = () => {
    const [nameOrEmail, setNameOrEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <View style={styles.container}>
        <View style={styles.headerContainer}><KeyLock height={220}/></View>
        <View style={styles.formContainer}>
            <Text style={styles.header}>Sign in to SO</Text>
            <BtnSignSO onPress={() => {}} text={"Sign in with Google"}>
                <Google width={32} height={28}/>
            </BtnSignSO>
            <View style={styles.containerLinear}>
                <View style={styles.linear}></View>
                <Text style={styles.linearText}>or sign in with email</Text>
                <View style={styles.linear}></View>
            </View>
            <View style={styles.form}>
                <FormatInput
                    setValue={setNameOrEmail}
                    value={nameOrEmail}
                    type={"text"}
                    name={"Username or email"}
                />
                <FormatInput
                    setValue={setPassword}
                    value={password}
                    type={"password"}
                    name={"Password"}
                />
            </View>
            <BtnSign
                text="Sign in"
                onPress={() => {}}
            />
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerTextBase}>Don't have an account? </Text>
            <Link
                href={"/(auth)/registration"}
                style={[styles.footerTextBase,styles.textBold]}>Sign up
            </Link>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        display:"flex",
        flexDirection:"column",
        height:"100%",
        width:"100%",
        backgroundColor:"#ffffff",
    },
    formContainer:{
        marginTop:21,
        paddingHorizontal:32,
        gap:25
    },
    form:{
        display:"flex",
        flexDirection:"column",
        gap:21
    },
    linear:{
        backgroundColor:"rgba(0,0,0,0.2)",
        height:1,
        flex:1,
    },
    containerLinear:{
        alignItems:"center",
        gap:11,
        display:"flex",
        flexDirection:"row",
    },
    linearText:{
        color:"rgba(0,0,0,0.2)",
        fontSize:16,
        fontWeight:"regular"
    },
    header:{
        color:"black",
        fontSize:32,
        fontWeight:"bold",
    },
    headerContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      borderStyle:"solid",
      borderBottomWidth:1,
      borderBottomColor:"black"
    },
    footer:{
        flex:1,
        alignItems:"flex-end",
        paddingBottom:22,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    footerTextBase:{
        fontSize:19,
        fontWeight:"regular",
        color:'black',
    },
    textBold:{
        fontWeight:"bold"
    }
})

export default Index;