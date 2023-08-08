import React, {useEffect} from 'react';
import {useAppSelector} from "../../../common/hooks/hooks";
import {useAppDispatch} from "../../../common/store/store";
import {getMessege} from "../../slice/messeges.slice/messege";
import {Message} from "../messege/message";

export const Messeges = () => {

    const messeges = useAppSelector(state => state.messeges)
    return (
        <div>
            {messeges.map(el => <Message
                key={el.id}
                message={el.message}
                name={el.user.name}
                you={el.user.you}
                is_new={el.is_new}

            />)}
        </div>
    );
};

