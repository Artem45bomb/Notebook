import { StyleSheet, TouchableOpacity, Animated} from "react-native";
import { Svg, Rect } from 'react-native-svg';
import * as React from "react";

interface Props{
    onPress?: () => void;
    animatedValue:Animated.Value
}

export const AddNote:React.FC<Props> = ({onPress, animatedValue}) => {
    const rotateAnim = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Animated.View style={{
                transform:[{rotate:rotateAnim}]
            }}>
                <Svg width="28" height="28" viewBox="0 0 28 28">
                    <Rect x="13" y="0" width="2" height="28" fill="white">
                    </Rect>
                    <Rect x="0" y="13" width="28" height="2" fill="white">
                    </Rect>
                </Svg>
            </Animated.View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor:"#5F5AC9",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:70,
        aspectRatio:1,
        borderRadius: 40,
    },
    rectContainer: {
        position: 'absolute',
    },
})






