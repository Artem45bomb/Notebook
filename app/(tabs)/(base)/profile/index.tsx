import {ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {HiddenItem} from "@/components/HiddenItem";
import {Heart, LogIn, LogOut, Message, Secured, UserSettings} from "@/assets/svg/icon";
import {ProfileAccountInfo} from "@/components/ProfileAccountInfo";
import {router} from "expo-router";

const Index: React.FC = () => {
    const isAuthentication = false;


    useEffect(() => {
    }, []);

    return <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
    >
        <ProfileAccountInfo
            lastname={""}
            firstname={"User"}
            email={"@gmail.com"}
        />
        <View style={[styles.baseContainer]}>
            <HiddenItem
                isNotSet={true}
                onPress={() => {
                }}
                title={"My Account"}
                underHeading={"Make changes to your account"}
            >
                <UserSettings width={30} height={30}/>
            </HiddenItem>
            <HiddenItem
                onPress={() => {
                }}
                title={"Saved Beneficiary"}
                underHeading={"Manage your saved account"}
            >
                <UserSettings width={30} height={30}/>
            </HiddenItem>
            <HiddenItem
                onPress={() => {
                }}
                title={"Two-Factor Authentication"}
                underHeading={"Further secure your account for safety"}
            >
                <Secured width={30} height={30}/>
            </HiddenItem>

            {isAuthentication ? <HiddenItem
                    onPress={() => {
                    }}
                    title={"Log out"}
                    underHeading={"Further secure your account for safety"}
                >
                    <LogOut width={30} height={30}/>
                </HiddenItem> :
                <HiddenItem
                    onPress={() => router.push("/login")}
                    title={"Log in"}
                    underHeading={"Register or log in to the app"}
                >
                    <LogIn width={30} height={30}/>
                </HiddenItem>
            }
        </View>
        <Text style={styles.textInfo}>More</Text>
        <View style={[styles.baseContainer]}>
            <HiddenItem
                onPress={() => {
                }}
                title={"Help & Support"}
            >
                <Message width={30} height={30}/>
            </HiddenItem>
            <HiddenItem
                onPress={() => {
                }}
                title={"About App"}
            >
                <Heart width={30} height={30}/>
            </HiddenItem>
        </View>
        <View style={styles.notContainer}></View>
    </ScrollView>
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(23,22,22,0.97)",
    },
    baseContainer: {
        display: "flex",
        flexDirection: "column",
        gap:20,
        paddingVertical:22,
        paddingHorizontal: 14,
        borderRadius: 7,
        backgroundColor: 'rgba(35,35,35,0.96)',
    },
    notContainer:{
        paddingVertical:22,
        paddingHorizontal: 14,
    },
    contentContainer:{
        gap:20,
    },
    textInfo: {
        fontSize: 20,
        fontWeight: "medium",
        color: 'white',
    }
})


export default Index;