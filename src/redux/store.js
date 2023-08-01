import { configureStore } from '@reduxjs/toolkit'
import selectComponentReducer from './features/selectItem'



export  const store = configureStore({
    reducer: {
        selectComponent:selectComponentReducer
    }
})