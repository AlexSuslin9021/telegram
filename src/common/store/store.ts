import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {chat} from "../../telegramm/slice/chat.slice/chat.slice";
import {messeges} from "../../telegramm/slice/messeges.slice/messege";
import {country} from "../../country/slice/country";


// ...
const store = configureStore({
    reducer: {
        chat,
        messeges,
        country,
    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store