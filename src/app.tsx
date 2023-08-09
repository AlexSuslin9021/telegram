import React from 'react';
import s from './app.module.css'
import {Country} from "./country/component/country/country";
import {Search} from "./country/component/search/search";
import {Filter} from "./country/filter/filter";




function App() {
    return (
        <div   >
            <Search/>
            <Filter/>
            <Country/>
        </div>
    );
}

export default App;
