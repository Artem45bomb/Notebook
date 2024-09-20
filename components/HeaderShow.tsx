import React from "react";
import {StyleSheet, View} from "react-native";
import {BtnIcon} from "@/ui/BtnIcon";
import {OutputIcon, Correct, TrashCan} from "@/assets/svg/icon";
import {router, useGlobalSearchParams, useLocalSearchParams} from "expo-router";
import {useAppDispatch} from "@/hooks/redux";
import {deleteNote} from "@/store/slice/note/note";
import * as fsNotes from "@/api/files/notes";





export const HeaderShow:React.FC = () => {
    const {id} = useGlobalSearchParams()
    const dispatch = useAppDispatch()

    const outClick = () =>{
        router.back()
    }


    const deleteClick =async () => {
        await fsNotes.deleteNote(id+"");
        dispatch(deleteNote(id+""))
        router.push("/")
    }

    const refactoringClick = () => {
        router.push(`/(new)/refactor/${id}`)
    }

    return <View style={styles.container}>
        <BtnIcon
            onPress={outClick}
            Icon={() =><OutputIcon width={30} height={30} fill={"#8F8F8F"}/>}
        />
        <View style={styles.containerForSettings}>
            <BtnIcon
                onPress={deleteClick}
                Icon={() =><TrashCan width={30} height={30} />}
            />
            <BtnIcon
                onPress={refactoringClick}
                Icon={() =><Correct width={34} height={35} fill={"#8F8F8F"}/>}
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
        alignItems:"center",
        backgroundColor:"#161615",
    },
    containerForSettings:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:23
    }
})