import React from 'react';
import s from './user.module.css'

export const User: React.FC<UserType> = ({src, lastName, name, messege}) => {
    return (
        <div className={s.user}>
            <div><img className={s.image} src={src} alt=""/></div>
            <div>
                <span className={s.name}> {name}</span>
                <span className={s.name}> {lastName}</span>
                <div className={s.messege}> {messege}</div>
            </div>
        </div>
    );
};
type UserType = {
    src: string,
    name: string,
    lastName: string,
    messege: string
}
