import {RootState} from "@/store/store";
import {createSelector} from "reselect";


export const selectorRecord = (state:RootState) => state.record.record

export const selectorTags = createSelector([selectorRecord],record => record?.entity.tags ?? [])