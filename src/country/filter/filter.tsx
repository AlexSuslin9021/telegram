import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from "../../common/store/store";
import { filterCountry } from "../slice/country";

export const Filter = () => {
    const [region, setRegion] = useState('');
    const dispatch = useAppDispatch();

    const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedRegion = event.currentTarget.value;
        setRegion(selectedRegion);  // Сначала обновляем состояние
        dispatch(filterCountry(selectedRegion)); // Затем передаем актуальное значение
    };

    console.log(region);

    return (
        <div>
            <select name="country" id="" onChange={handleRegionChange} value={region}>
                <option value="all">All Regions</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>
        </div>
    );
};


