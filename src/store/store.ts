import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {chat} from "../slice/chat.slice/chat.slice";
import {messeges} from "../slice/messeges.slice/messege";


// ...
const store = configureStore({
    reducer: {
        chat,
        messeges
    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store