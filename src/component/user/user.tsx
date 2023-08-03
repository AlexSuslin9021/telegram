import React from 'react';

export const User: React.FC<UserType> = ({src, lastName, name, messege}) => {
    return (
        <div>
            <div><img src={src} alt=""/></div>
            <div><span> {messege}</span>
                <span> {name}</span>
                <div> {lastName}</div>
            </div>
        </div>
    );
};
type UserType = {
    src: string,
    name: string,
    lastName: string,
    messege: string
}
