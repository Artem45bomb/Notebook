import React, {useCallback} from "react";
import {StyleSheet, Text, View} from "react-native";
import {BtnSign} from "@/ui/BtnSign";
import {BtnSignSO} from "@/ui/BtnSignSO";
import {Google} from "@/assets/svg/icon";
import {FormatInput} from "@/components/FormatInput";
import {Link} from "expo-router";
import {registration, SignUpDTO} from "@/api/auth/auth";


const Index:React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [username,setName] =React.useState("")
    const [password, setPassword] = React.useState("");

    const signData = useCallback( async () => {
        const data:SignUpDTO = {
            username,
            email,
            password
        }

        const result = await registration(data)
        console.log("result:",result)
    },[email,password,username])
    
    return <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text style={styles.header}>Sign up to SO</Text>
            <BtnSignSO onPress={() => {}} text={"Sign up with Google"}>
                <Google width={32} height={28}/>
            </BtnSignSO>
            <View style={styles.containerLinear}>
                <View style={styles.linear}></View>
                <Text style={styles.linearText}>or sign up with email</Text>
                <View style={styles.linear}></View>
            </View>
            <View style={styles.form}>
                <FormatInput
                    setValue={setEmail}
                    value={email}
                    type={"text"}
                    name={"Email"}
                />
                <FormatInput
                    setValue={setName}
                    value={username}
                    type={"text"}
                    name={"Username"}
                />
                <FormatInput
                    setValue={setPassword}
                    value={password}
                    type={"password"}
                    name={"Password"}
                />
            </View>
            <BtnSign
                text={"Sign up"}
                onPress={signData}
            />
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerTextBase}>Do you have an account? </Text>
            <Link
                href={"/(auth)/login"}
                style={[styles.footerTextBase,styles.textBold]}
            >Sign In
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
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        flex:1,
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