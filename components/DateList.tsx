import React, {Dispatch,SetStateAction} from "react";
import {FlatList, StyleSheet} from "react-native";
import {DateItem} from "@/components/DateItem";

interface Props{
    dates:Date[],
    setSelected:Dispatch<SetStateAction<number>>,
    selected:number
}

export const DateList:React.FC<Props> = ({dates,selected,setSelected}) => {

    return <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        data={dates}
        horizontal={true}
        contentContainerStyle={{gap:8}}
        renderItem={({item,index}) =><DateItem
            click={() =>setSelected(prev =>prev  === index ? -1 : index)}
            date={item}
            isSelected={selected == index}
        />}
        keyExtractor={item =>`${item.getMonth()}-${item.getDate()}-date`}
    />
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:45,
    }
})