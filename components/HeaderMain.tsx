import React, {Dispatch, SetStateAction} from "react";
import {View,StyleSheet} from "react-native";
import Settings from "@/assets/svg/icon/settings.svg"
import {SearchNote} from "@/components/SearchNote";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {searchParam} from "@/store/slice/note/note";
import {selectSearchName} from "@/store/slice/note/selector";




export const HeaderMain:React.FC = () => {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(selectSearchName)

    const handlerChange = (text:string) => dispatch(searchParam({name:text}))

    return <View style={styles.container}>
        <SearchNote value={searchValue ?? ""} handlerChange={handlerChange}/>
        <Settings height={38} width={38} />
    </View>
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:8,
        gap:8
    }
})