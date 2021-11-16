import { configureStore } from '@reduxjs/toolkit'
import uiSliceReducer from './ui-slice';
import cartSlice from './cartSlice'

const store = configureStore({
    reducer :{ ui : uiSliceReducer.reducer, cart:cartSlice.reducer}
})
export default store