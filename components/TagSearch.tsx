import React, {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {searchTagAdd, searchTagDelete} from "@/store/slice/note/note";
import {selectIsTag} from "@/store/slice/note/selector";
import {Tag} from "@/ui/Tag";


interface Props {
    tag:string,
}


export const TagSearch:React.FC<Props> = ({tag}) => {
    const dispatch = useAppDispatch();
    const isSelect = useAppSelector(state =>  selectIsTag(state ,tag))
    const [select,setSelect]= useState(isSelect)

    useEffect(() => {
        setSelect(isSelect)
    }, [isSelect]);

    const handlerClick = useCallback(() => {
        const func =  select? searchTagDelete : searchTagAdd
        dispatch(func(tag))
    },[select])

    return <Tag tag={tag} onPress={handlerClick} select={select}/>
}