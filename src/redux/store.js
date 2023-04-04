import {configureStore} from "@reduxjs/toolkit";
import studentSlice from "./student/studentSlice";

 export const store = configureStore({
    reducer :{
        students: studentSlice
    }
})