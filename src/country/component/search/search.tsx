import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './search.module.css'
import {useAppDispatch} from "../../../common/store/store";
import {getSearch} from "../../slice/country";
import {useDebounce} from "../../../common/hooks/debounce";
export const Search = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
    const debouncedValue = useDebounce(debouncedSearchValue, 500);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
        setDebouncedSearchValue(newValue);
    }

    useEffect(() => {
        dispatch(getSearch(debouncedValue));
    }, [debouncedValue, dispatch]);

    return (
        <div className={s.container}>
            <input className={s.input} value={value} onChange={onChange} />
        </div>
    );
};

