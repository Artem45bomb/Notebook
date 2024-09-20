import React from "react";
import {Image, ImageSourcePropType, View, ViewStyle} from "react-native";

interface Props {
    source:ImageSourcePropType,
    height: number,
    styleContainer?: ViewStyle,
}

export const Profile:React.FC<Props> = ({source,height,styleContainer}) => {
    return <View style={[styleContainer,{borderRadius:999}]}><Image
        style={{borderRadius:999}}
        width={height}
        height={height}
        source={source}
    />
        </View>
}
