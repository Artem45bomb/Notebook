import React, {useCallback, useRef, useState} from "react";
import {View, StyleSheet, Text, Animated, Pressable} from "react-native";
import Right from "@/assets/svg/icon/right.svg"
import {SvgProps} from "react-native-svg";


interface Props {
    SvgIcon: React.FC<SvgProps>;
    children?: React.ReactNode;
    title: string;
}

export const NoteItemPanel:React.FC<Props> = ({SvgIcon,children,title}) => {
    const [show,setShow] = useState(0);
    const _show = useRef(new Animated.Value(0)).current

    const handlerClick = useCallback(() => {
        const toValue = show > 0 ? 0 : 1;

        Animated.timing(_show, {
            toValue,
            duration: 300,
            useNativeDriver: false
        }).start(() => {
            setShow(toValue);
        });

    }, [show]);

    const maxHeight = _show.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2000]
    });

    const paddingTop = _show.interpolate({
        inputRange: [0, 1],
        outputRange: [0,12]
    });

    const rotate = _show.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "90deg"]
    })

    return <View style={styles.container}>
        <View style={styles.containerAdd}>
            <View style={styles.info}>
                <View style={styles.svg}>
                    <SvgIcon/>
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Pressable onPress={handlerClick}>
                <Animated.View
                    style={{
                        transform: [{rotate}]
                    }}
                >
                    <Right width={20} height={26} />
                </Animated.View>
            </Pressable>
        </View>
        <Animated.View style={[{
            opacity: _show,
            paddingTop,
            paddingLeft:25,
            maxHeight,
        }]}>
            {children}
        </Animated.View>

    </View>
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column"
    },
    containerAdd:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        width:"100%",
    },
    svg:{
      paddingHorizontal:12,
      paddingVertical:10
    },
    title:{
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"regular"
    },
    info:{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        gap:16
    },

})