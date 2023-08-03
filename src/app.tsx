import React from 'react';
import {AllChat} from "./component/allChat/allChat";
import {Project} from "./component/Project/Project";
import s from './app.module.css'


function App() {
    return (
        <div className={s.app}  >
            <AllChat/>
            <Project/>
        </div>
    );
}

export default App;
