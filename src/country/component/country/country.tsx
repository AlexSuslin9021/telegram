import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../common/store/store";
import {getCountry} from "../../slice/country";
import {useAppSelector} from "../../../common/hooks/hooks";
import s from './country.module.css'

export const Country = () => {
    const dispatch = useAppDispatch()
    const country = useAppSelector(state => state.country)
   useEffect(()=>{
       dispatch(getCountry())
   },[dispatch])


    return (
        <div className={s.container}>
            {country.map(c=><div className={s.country} key={c.name.common}>
                <img className={s.image} src={c.flags.svg} alt=""/>
                <span className={s.name} >{c.name.common}</span>
                <span className={s.capital} >Capital: {c.capital}</span>
            </div>)}
        </div>
    );
};

