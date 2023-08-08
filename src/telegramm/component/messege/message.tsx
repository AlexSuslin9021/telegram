import React from 'react';
import s from './message.module.css'

export const Message: React.FC<Messagetype> = ({name, message, you, is_new}) => {

    return (
        <div className={you ? s.you : s.friend}>
            <span>{name}</span>
            <div>{message}</div>
        </div>
    );
};
type Messagetype = {
    name: string
    message: string
    you: boolean
    is_new: boolean
}
