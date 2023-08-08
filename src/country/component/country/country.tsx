import React from 'react';
import {useAppDispatch} from "../../../common/store/store";
import {getCountry} from "../../slice/country";
import {useAppSelector} from "../../../common/hooks/hooks";

export const Country = () => {
    const dispatch = useAppDispatch()
    const country = useAppSelector(state => state.country)
    const onClick =()=>{
        dispatch(getCountry())
    }
    return (
        <div>
            <button onClick={onClick}> add</button>
            {country.map(c=><div key={c.name.common}>
                <img style={{width:'120px', height:'80px'}} src={c.flags.svg} alt=""/>
                <span>{c.name.official}</span>
            </div>)}
        </div>
    );
};

