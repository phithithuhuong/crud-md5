import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getStudent = createAsyncThunk("students/getStudents",async ()=>{
  const res = axios.get('http://localhost:3000/students')
    return (await res).data
})