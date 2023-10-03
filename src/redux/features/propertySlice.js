import { createSlice } from '@reduxjs/toolkit'
import data from "../../data/data.json"

const initialState = {
    property: [],
    singleProperty: null
}

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        SET_PROPERTY(state, action) {
            if(action.payload === 'All'){
                state.property = data
            } else {
                const property = data.filter((d) => d?.address?.toLocaleLowerCase().includes(action.payload?.toLocaleLowerCase()))
                state.property = property
            }
        },
        SET_SINGLE_PROPERTY(state, action) {
            const property = data.find((d) => d.id === parseInt(action.payload))
            state.singleProperty = property
        }
    }
});

export const { SET_PROPERTY, SET_SINGLE_PROPERTY } = propertySlice.actions

export default propertySlice.reducer