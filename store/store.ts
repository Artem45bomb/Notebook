import {combineReducers, configureStore} from '@reduxjs/toolkit'
import note from "@/store/slice/note/note";
import record from "@/store/slice/record/record";
import logger from "redux-logger"


const reducer = combineReducers({
    note,record
})

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store