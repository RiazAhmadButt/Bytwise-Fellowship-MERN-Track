import { configureStore } from "@reduxjs/toolkit";
import user from './UserSlice';


const Store = configureStore({
    reducer : {
        user,
    }
})

export default Store;