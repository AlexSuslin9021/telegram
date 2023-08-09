import React, {ChangeEvent, useState} from 'react';

export const Filter = () => {
    const [region, setRegion] = useState('all');

    const handleRegionChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);
    };

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

