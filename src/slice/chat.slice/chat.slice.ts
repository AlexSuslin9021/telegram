import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api, ChatType} from "../../api/api";

const getChat= createAsyncThunk<ChatType,void>('chat/getChat',async ()=>{
   let res=await api.getChat()
    return res.data.response
})
const slice =createSlice({
    name:'chat',
    initialState:{} as ChatType,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getChat.fulfilled, (state, action:PayloadAction<ChatType>) => {
            state.response= action.payload.response
        })
    }
})

export const chat= slice.reducer

