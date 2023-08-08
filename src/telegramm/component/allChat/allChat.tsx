import React from 'react';
import {Header} from "../header/header";
import s from './all.module.css'
import {Users} from "../Users/Users";
export const AllChat = () => {


    return (
        <div className={s.all}>
            <Header name={'All Chat'}/>
            <Users/>
        </div>
    );
};

