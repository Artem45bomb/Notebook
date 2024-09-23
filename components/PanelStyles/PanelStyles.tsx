import {Animated, StyleSheet, TextInput, PanResponder, View} from "react-native";
import React, { useEffect, useRef } from "react";
import { TextStylesPart } from "@/components/PanelStyles/TextStylesPart";
import { ColorPart } from "@/components/PanelStyles/ColorPart";
import { FontsPart } from "@/components/PanelStyles/FontsPart";
import { DragMenu } from "@/assets/svg/icon";
import {BtnIcon} from "@/ui/BtnIcon";

interface Props {
    textRef: React.RefObject<TextInput>,
    isActivePanel: boolean
}

export const PanelStyles: React.FC<Props> = ({ textRef, isActivePanel }) => {
    const show = useRef(new Animated.Value(isActivePanel ? 1 : 0)).current;
    const position = useRef(0); // текущее положение
    const _position = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true; // Всегда разрешаем перетаскивание
            },
            onPanResponderMove: (evt, gestureState) => {
                const newPosition = position.current + gestureState.dy; // новое положение с учетом перемещения
                const maxPosition = 250;
                const minPosition = 0;

                // Плавное обновление
                if (newPosition <= maxPosition && newPosition >= minPosition) {
                    _position.setValue(newPosition);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                const newPosition = position.current + gestureState.dy;
                if (newPosition > 250 / 2) {
                    Animated.timing(_position, {
                        toValue: 250,
                        duration: 200,
                        useNativeDriver: true
                    }).start(() => position.current = 250);
                } else {
                    Animated.timing(_position, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true
                    }).start(() => position.current = 0);
                }
            }
        })
    ).current;


    useEffect(
        React.useCallback(() => {
            const toValue = isActivePanel ? 1 : 0;
            Animated.timing(show, {
                toValue,
                duration: 300,
                useNativeDriver: true
            }).start();
            Animated.timing(_position, {
                toValue,
                duration: 300,
                useNativeDriver: true
            }).start(() => position.current = toValue);
        }, [isActivePanel])
    );

    const translateY = show.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 0]
    });

    const handlerClick = () => {
        let toValue  = 0;

        if(position.current === 0)
            toValue = 250;

        Animated.timing(_position, {
            toValue,
            duration: 300,
            useNativeDriver: true
        }).start(() => position.current = toValue);
    }

    return (
        <Animated.View
            style={[styles.container, { transform: [{ translateY }, { translateY: _position }] }]}
        >
            <View
                {...panResponder.panHandlers}
                style={styles.dragCont}>
                <BtnIcon onPress={handlerClick}>
                    <DragMenu/>
                </BtnIcon>
            </View>
            {/*<TextStylesPart/>*/}
            <ColorPart colors={["#FFF", "#386DF6", "#EB6338", "#4FB49C", "#E6E762", "#E74AC5"]} />
            <FontsPart fonts={[{ name: "Bold" }, { name: "Underline" }, { name: "Italian" }, { name: "Avenir" }, { name: "Sans Serif" }, { name: "Create Font" }]} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 19,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        width: "100%",
        backgroundColor: "#272727",
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 28
    },
    dragCont:{
        width:"100%",
        display:"flex",
        flexDirection:'row',
        justifyContent:"center"
    }
});
