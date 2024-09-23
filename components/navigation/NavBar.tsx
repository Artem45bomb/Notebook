import React, {useCallback, useEffect, useRef, useState} from "react";
import {Animated, StyleSheet, View} from "react-native";
import {AddNote} from "@/ui/navigation/AddNote";
import MenuIcon from "@/assets/svg/icon/menu.svg";
import NoteIcon from "@/assets/svg/icon/note.svg";
import TaskIcon from "@/assets/svg/icon/task.svg";
import {router} from "expo-router";
import { useNavigationState} from "@react-navigation/native";
import {BtnIcon} from "@/ui/BtnIcon";
import {Profile} from "@/assets/svg/icon";
import {useAppSelector} from "@/hooks/redux";
import {selectorRecord} from "@/store/slice/record/selector";



export const NavBar:React.FC = () => {
    const record = useAppSelector(selectorRecord)
    const currentRouteName = useNavigationState(state => state.routes[state.index].name);
    const _isCreate = useRef(new Animated.Value(0)).current
    const isCreate = currentRouteName === "(tabs)/(set)";

    const bottom = _isCreate.interpolate({
        inputRange:[0,1],
        outputRange:["90%","10%"]
    })

    useEffect(
        React.useCallback(() => {
            const toValue = currentRouteName === "(tabs)/(set)" ? 1 : 0
            Animated.timing(_isCreate, {
                toValue,
                duration: 300,
                useNativeDriver: false
            }).start();
        }, [currentRouteName])
    );

    const handlerClick = useCallback(() => {
        if (isCreate)
            router.navigate('/(tabs)/(base)')
        else
            router.navigate("/(set)/create")
    }, [isCreate, router]);

    const handlerRecorder = () => router.navigate("/(new)/notes")

    return <View style={isCreate ? [styles.containerNav,styles.containerNavCreate] : styles.containerNav}>
        {
            !isCreate && <>
                <View style={styles.contNavElems}>
                    <BtnIcon
                        stylesWrapper={styles.contBtn}
                        Icon={() =><MenuIcon color={"#ffffff"} height={32} width={32}/>}
                    />
                    <BtnIcon
                        stylesWrapper={styles.contBtn}
                        onPress={() =>{
                            console.log("aa")
                            router.push("/")
                        }}
                        Icon={() =><TaskIcon height={32} width={32}/>}
                    />
                    <BtnIcon
                        stylesWrapper={styles.contBtn}
                        onPress={() =>router.navigate("/(base)/profile")}
                        Icon={() =><Profile color={"#ffffff"} height={32} width={32}/>}
                    />
                    {record &&
                        <BtnIcon
                            stylesWrapper={styles.contBtn}
                            onPress={handlerRecorder}
                            Icon={() =><NoteIcon color={"#ffffff"} height={32} width={32}/>}
                        />
                    }
                </View>
            </>
        }
        <Animated.View style={{
            ...styles.containerAddNote,
            bottom
        }}>
            <AddNote onPress={handlerClick} animatedValue={_isCreate}/>
        </Animated.View>
    </View>
}


const styles = StyleSheet.create({
    containerNav:{
        paddingHorizontal:10,
        height:50,
        width:'100%',
        position:"relative",
        backgroundColor:"#161615",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
    },
    containerAddNote:{
        position:"absolute",
        right:5,
        bottom:5
    },
    contNavElems:{
        display:"flex",
        flexDirection:"row",
        flex:1,
        justifyContent:"space-around"
    },
    containerNavCreate:{
        backgroundColor:"black",
        height:0,
    },
    contBtn:{
        padding:12
    }
})