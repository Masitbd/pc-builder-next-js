import { createSlice } from "@reduxjs/toolkit"

const initialState={
    selectItems: []
}

export const selectItemSlice = createSlice({
    name:'selectItem',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            const category = action.payload.category
            state.selectItems = state.selectItems.filter(Item=>Item.category !==category)
            selectItems.push(action.payload)
        }
    },
        removeItem:(state, action)=> {
            state.selectItems = state.selectItems.filter(item=> item._id !== action.payload._id)
        }
})

export const {addItem, removeItem} = selectItemSlice.actions
export default selectItemSlice.reducer