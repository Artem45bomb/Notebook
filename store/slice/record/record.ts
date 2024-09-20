import {ActionInit, ActionPayload, ActionUpdate, InitialState, TypeState} from "@/store/slice/record/type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RecordBase} from "@/api/Model/Record";
import {isEmpty} from "@/store/slice/record/function";



const initialState:InitialState = {
    record:undefined
}


export const recordSlice  = createSlice({
    name:"record",
    initialState,
    reducers:{
        init:(state,{payload}: PayloadAction<ActionInit>) => {
            state.record = {
                typeState:payload.typeState || "create",
                ...payload
            }
        },
        update:(state,{payload}: PayloadAction<ActionUpdate>) => {
            let typeState = payload.typeState || (state.record?.typeState === "refactoring" ? "refactoring" : "update")
            if(isEmpty(payload.entity))  typeState = "create"

            state.record = {
                typeState,
                ...payload
            };
        },
        addTag:(state,{payload}:PayloadAction<string>) => {
            if(state.record) {
                const {record}=state
                let typeState:TypeState =record.typeState === "refactoring" ? "refactoring" : "update"
                if(isEmpty(record.entity))  typeState = "create"

                state.record = {
                    typeState,
                    entity:{
                        ...record.entity,
                        tags:Array.from(new Set([...record.entity.tags,payload]))
                    }
                }
            }
        },
        deleteTag:(state,{payload}:PayloadAction<string>) => {
            if(state.record) {
                const {record}=state
                let typeState:TypeState =record.typeState === "refactoring" ? "refactoring" : "update"
                if(isEmpty(record.entity))  typeState = "create"

                state.record = {
                    typeState,
                    entity:{
                        ...record.entity,
                        tags:record.entity.tags.filter(tag => tag !== payload)
                    }
                }
            }
        },
        save:(state) => {
            state.record = undefined
        },
        addStyle:() => {
            //I need to think about it
        }
    }
})

export const {init,update,save,addTag,deleteTag} = recordSlice.actions
export default recordSlice.reducer