import {createSlice} from "@reduxjs/toolkit";
import {getStudent} from "../../service/studentService";

const initialState = {
    students :[],
    student:{}
}
 const studentSlice = createSlice({
    name:"students",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getStudent.fulfilled, (state, action) => {
            state.students = action.payload;
        });
    }

});
export default studentSlice.reducer


