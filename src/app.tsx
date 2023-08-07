import React from 'react';
import s from './app.module.css'
import {AllChat} from "./component/allChat/allChat";
import {Project} from "./component/Project/Project";


function App() {
    return (
        <div className={s.app}  >
            <AllChat/>
            <Project/>
        </div>
    );
}

export default App;
