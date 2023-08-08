import React from 'react';
import s from './app.module.css'
import {Country} from "./country/component/country/country";
import {Search} from "./country/component/search/search";




function App() {
    return (
        <div   >
            <Search/>
            <Country/>
        </div>
    );
}

export default App;
