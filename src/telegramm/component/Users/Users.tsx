import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../common/store/store";
import {useAppSelector} from "../../../common/hooks/hooks";
import {User} from "../user/user";
import {getChat} from "../../slice/chat.slice/chat.slice";


export const Users = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getChat())
    }, [dispatch])


    const user = useAppSelector(state => state.chat.response)
    console.log(user)
    return (
        <div>
            {user ? user.map(el => <User key={el.id}
                                         name={el.last_message.user_name}
                                         messege={el.last_message.message}
                                         lastName={el.last_message.user_surname}
                                         src={el.avatar}
                                         id={el.id}
            />) : 'loading'}
        </div>
    );
};
