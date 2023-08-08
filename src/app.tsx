import React from 'react';
import s from './app.module.css'
import {AllChat} from "./telegramm/component/allChat/allChat";
import {Project} from "./telegramm/component/Project/Project";


function App() {
    return (
        <div className={s.app}  >
            <AllChat/>
            <Project/>
        </div>
    );
}

export default App;
