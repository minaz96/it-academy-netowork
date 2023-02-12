import React from 'react';
import s from './BlueButton.module.scss'

const Input = ({children}) => {
    return (
        <div>
            <button className={s.blue_btn}>
                {children}
            </button>
        </div>
    );
};

export default Input;