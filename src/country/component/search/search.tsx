import React, {ChangeEvent, useState} from 'react';
import s from './search.module.css'
import {useAppDispatch} from "../../../common/store/store";
import {getSearch} from "../../slice/country";
export const Search = () => {
const dispatch = useAppDispatch()
    const [value, setValue]= useState('')
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
     setValue(e.currentTarget.value)
        dispatch(getSearch(value))
    }
    return (<div className={s.container}>
        <input className={s.input} value={value} onChange={onChange}/>
        </div>
    );
};

