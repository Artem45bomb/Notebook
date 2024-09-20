import React from "react";
import {FlatList, Pressable, StyleSheet, View} from "react-native";

import {BtnIcon} from "@/ui/BtnIcon";
import {Delete} from "@/assets/svg/icon";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {deleteTag} from "@/store/slice/record/record";
import {TagCreate} from "@/ui/TagСreate";
import {selectorTags} from "@/store/slice/record/selector";
import {getBindingIdentifiers} from "@babel/types";
import keys = getBindingIdentifiers.keys;





export const TagList:React.FC = () => {
    const dispatch = useAppDispatch()
    const tags = useAppSelector(selectorTags)

    const tagTypeDelete = (index:number) => {
        dispatch(deleteTag(tags.at(index) ?? ""))
    }

    return <>
        {
            tags.map((tag,index) => (
                <Pressable key={`${tag}-tag`} style={styles.wrapperTag}>
                    <BtnIcon
                        stylesWrapper={styles.deleteIcon}
                        onPress={() => tagTypeDelete(index)}
                        Icon={() => <Delete width={24} height={24}/>}
                    />
                    <TagCreate tag={tag}/>
                </Pressable>
            ))
        }
    </>
}




const styles = StyleSheet.create({
    wrapperTag:{
        position:"relative"
    },
    deleteIcon:{
        position:"absolute",
        zIndex:3,
        top:-8.3,
        right:-8.3
    }
})