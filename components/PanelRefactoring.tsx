import React, {useEffect, useRef} from "react";
import {TextInput, View, StyleSheet, ScrollView, Animated} from "react-native";
import {BtnSaveIcon, Camera, Tt, I, U, MenuText, B, TrashCan} from "@/assets/svg/icon";
import {BtnIcon} from "@/ui/BtnIcon";
import { useAppSelector} from "@/hooks/redux";
import {selectorRecord} from "@/store/slice/record/selector";






interface Props {
    textRef:React.RefObject<TextInput>
    isActivePanel:boolean,
    add:() => void
}


export const PanelRefactoring:React.FC<Props> = ({textRef,add,isActivePanel}) => {
    const record = useAppSelector(selectorRecord);

    const show = useRef(new Animated.Value(isActivePanel? 1:0)).current

    const bottom = show.interpolate({
        inputRange:[0,1],
        outputRange:[0,-200]
    })

    useEffect(
        React.useCallback(() => {
            const toValue = isActivePanel? 1 : 0
            Animated.timing(show, {
                toValue,
                duration: 300,
                useNativeDriver: false
            }).start();
        }, [isActivePanel])
    );

    return <Animated.View style={{
        ...styles.container,
        bottom
    }}>
        <ScrollView horizontal={true}
                    contentContainerStyle={styles.contentContainer}
                    style={styles.containerScroll}
        >
            <BtnIcon
                onPress={add}
            >
                {
                    record?.typeState==="create"  ?
                        (<View style={styles.btnDel}><TrashCan/></View>)  :
                        (<BtnSaveIcon width={42} height={42}/>)
                }
            </BtnIcon>
            <BtnIcon
                Icon={() => <Camera width={27} height={25} fill={"#8F8F8F"} />}
            />
            <BtnIcon
                Icon={() => <Tt width={36} height={36} fill={"#8F8F8F"} />}
            />
            <BtnIcon
                Icon={() => <B width={36} height={36} fill={"#8F8F8F"} />}
            />
            <BtnIcon
                Icon={() => <I width={36} height={36} fill={"#8F8F8F"} />}
            />
            <BtnIcon
                Icon={() => <U width={36} height={36} fill={"#8F8F8F"} />}
            />
            <BtnIcon
                Icon={() => <MenuText width={36} height={36} fill={"#8F8F8F"} />}
            />
        </ScrollView>
    </Animated.View> ;
}




const styles = StyleSheet.create({
    container:{
        backgroundColor:"#161615",
        position:"absolute",
        paddingHorizontal:14,
        paddingBottom:18,
        left:0,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    containerScroll:{
        width:"100%",
        gap:28,
        backgroundColor:"#1F1F1F",
        borderRadius:15,
        paddingVertical:11
    },
    contentContainer:{
        paddingHorizontal:13,
        gap:28,
        alignItems:"center",
    },
    btnDel:{
        width:42,
        height:42,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#e05050"
    }
})