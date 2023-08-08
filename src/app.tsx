import React from 'react';
import s from './app.module.css'
import {Country} from "./country/component/country/country";




function App() {
    return (
        <div className={s.app}  >
            <Country/>
        </div>
    );
}

export default App;
