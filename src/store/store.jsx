import {configureStore} from '@reduxjs/toolkit'
import userSlice from './reducer/userSlice';



const store = configureStore({
    reducer:{
        userReducer:userSlice
    }
})



export default store;