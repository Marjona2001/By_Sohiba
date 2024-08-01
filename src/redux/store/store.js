import {configureStore} from '@reduxjs/toolkit'
import instaSlice from '../slice/instaSlice'
import popUpSlice from '../slice/popUpSlice'

export const store = configureStore({
    reducer: {
        insta: instaSlice,
        popUp: popUpSlice
    }
})