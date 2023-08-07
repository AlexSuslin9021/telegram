import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api, MessagesType} from "../../api/api";

export const getMessege= createAsyncThunk<MessagesType[],string>('messege/getMessege',async (arg:string)=>{
    let res=await api.getMessage(arg)
    return res.data
})
const slice =createSlice({
    name:'messege',
    initialState:{} as MessagesType[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getMessege.fulfilled, (state, action:PayloadAction<MessagesType[]>) => {
             return  action.payload
        })
    }
})

export const messeges = slice.reducer