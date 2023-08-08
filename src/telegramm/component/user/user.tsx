import React from 'react';
import s from './user.module.css'
import {useAppDispatch} from "../../../common/store/store";
import {getMessege} from "../../slice/messeges.slice/messege";

export const User: React.FC<UserType> = ({src, lastName, name, messege, id}) => {
    const dispatch= useAppDispatch()
    const onClick = ()=>{
        dispatch(getMessege(id))
    }
    return (
        <div className={s.user} onClick={onClick}>
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
    id:string
}
