import React from 'react';
import s from './Hints.module.scss'

const Hints = ({children}) => {
    return (
        <span className={s.hints}>
            {children}
        </span>
    );
};

export default Hints;