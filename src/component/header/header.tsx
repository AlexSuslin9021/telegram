import React from 'react';
import s from './header.module.css'
export const Header:React.FC<HeaderProps> = ({name}) => {
    return (
        <header className={s.header} >
            {name}
        </header>
    );
};
type HeaderProps = {
    name:string
}
