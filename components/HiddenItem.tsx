import React, {useCallback, useRef, useState} from "react";
import {View, StyleSheet, Text, Animated, Pressable} from "react-native";
import Right from "@/assets/svg/icon/right.svg"
import {NotSettings} from "@/assets/svg/icon";


interface Props {
    onPress: () => void;
    children?:React.ReactNode;
    title: string;
    underHeading?:string;
    isNotSet?:boolean
}

export const HiddenItem:React.FC<Props> = ({onPress,title,children,underHeading,isNotSet = false}) => {

    return <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.circle}>
                    {children}
                </View>
                <View style={styles.contText}>
                    <Text style={styles.title}>{title}</Text>
                    {underHeading !== undefined && <Text style={styles.underHeading}>{underHeading}</Text>}
                </View>
            </View>
            <View style={styles.containerRefPage}>
                {
                 isNotSet && <NotSettings width={20} height={18}/>
                }
                <Pressable onPress={onPress}>
                    <View>
                        <Right width={20} height={23} />
                    </View>
                </Pressable>
            </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        width:"100%",
    },
    circle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:60,
        borderRadius:99999,
        aspectRatio:1,
        backgroundColor:"rgba(98,98,98,0.5)",
    },
    contText:{
      display:"flex",
      flexDirection:"column",
        justifyContent:"center",
      gap:4
    },
    underHeading:{
        fontSize:11,
        fontWeight:"regular",
        color:"rgba(255,255,255,0.85)",
    },
    content:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:11
    },
    title:{
        color:"rgba(255,255,255,0.90)",
        fontSize:13,
        fontWeight:"medium"
    },
    containerRefPage:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:13
    }
})