import React, {useCallback} from "react";
import {View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import {DayKey} from "@/api/Model/DayKey";
import {MonthsKey} from "@/api/Model/MonthsKey";
import {useDispatch} from "react-redux";
import {searchParam} from "@/store/slice/note/note";
import {getDay} from "@/api/functions/getPlus7Day";


interface Props {
    date:Date,
    isSelected:boolean,
    click?:()=> void
}


export const DateItem :React.FC<Props> = ({date,isSelected,click}) => {
    const dispatch = useDispatch();


    const dates = getDay(date)
    const handlerClick = useCallback(() => {
        const dateEnd = dates?.dateEnd?.toUTCString()
        const dateStart = dates?.dateStart?.toUTCString()
        dispatch(searchParam( isSelected? {dateStart:null,dateEnd: null}:{dateStart,dateEnd}))
        click && click()
    },[isSelected]);


    return <TouchableOpacity
        onPress={handlerClick}
        style={isSelected? [styles.container,styles.select] : styles.container}>
        <Text
            style={isSelected? [styles.text,styles.selectedText] : styles.text}
        >{DayKey[date.getDay()].slice(0,3)}</Text>
        <Text
            style={isSelected? [styles.textDay,styles.selectedText] : styles.textDay}
        >{date.getDate()}</Text>
        <Text
            style={isSelected? [styles.text,styles.selectedText] : styles.text}
        >{MonthsKey[date.getMonth()].slice(0,3)}</Text>
    </TouchableOpacity>;
};


const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:91,
        borderRadius:18,
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:"white",
    },
    select:{
        backgroundColor:"#1F1F1F",
    },
    text:{
        color:"black",
        fontSize:13,
        fontWeight:"regular",
    },
    textDay:{
        fontSize:24,
        fontWeight:"bold"
    },
    selectedText:{
        color:"white"
    }
});