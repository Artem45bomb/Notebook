import React from "react";
import {SvgProps} from "react-native-svg";
import {Pressable, ViewStyle} from "react-native";


interface Props{
    Icon?:React.FC<SvgProps>,
    stylesWrapper?:ViewStyle[] | ViewStyle,
    onPress?:() => void,
    children?:React.ReactNode
}

export const BtnIcon:React.FC<Props> = ({Icon,stylesWrapper=[],onPress,children}) => {
    return <Pressable style={stylesWrapper} onPress={onPress}>
        {Icon && <Icon/>}
        {children}
    </Pressable>
}