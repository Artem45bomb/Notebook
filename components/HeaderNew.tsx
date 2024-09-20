import React, {Dispatch, SetStateAction, useState} from "react";
import {StyleSheet, View} from "react-native";
import {BtnIcon} from "@/ui/BtnIcon";
import {OutputIcon, AddUsers, Tags, SettingsNote, TrashCan} from "@/assets/svg/icon";
import {router} from "expo-router";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {save} from "@/store/slice/record/record";
import {selectorRecord} from "@/store/slice/record/selector";
import {updateNote} from "@/store/slice/note/note";



interface Props{
    createTag:boolean,
    setCreateTag:Dispatch<SetStateAction<boolean>>,
    isEmptyRecord:boolean,
    deleteCb:() => void
}

export const HeaderNew:React.FC<Props> = ({createTag,setCreateTag,isEmptyRecord,deleteCb}) => {

    const newTag = () => setCreateTag(true)


    return <View style={styles.container}>
        <BtnIcon
            onPress={() => router.navigate("/(base)")}
            Icon={() =><OutputIcon width={30} height={30} fill={"#8F8F8F"}/>}
        />
        <View style={styles.containerForSettings}>
            {isEmptyRecord && <BtnIcon
                onPress={deleteCb}
                Icon={() =><TrashCan width={30} height={30} />}
            />
            }
            <BtnIcon
                Icon={() =><AddUsers width={30} height={30} fill={"#8F8F8F"}/>}
            />
            <BtnIcon
                onPress={newTag}
                Icon={() =><Tags width={30} height={30} fill={"#8F8F8F"}/>}
            />
            <BtnIcon
                Icon={() =><SettingsNote width={30} height={30} fill={"#8F8F8F"}/>}
            />
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        paddingTop:50,
        paddingHorizontal:20,
        justifyContent:"space-between",
        backgroundColor:"#161615",
    },
    containerForSettings:{
        display:"flex",
        flexDirection:"row",
        gap:23
    }
})