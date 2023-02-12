import React from 'react';
import s from './WhiteButton.module.scss'

const WhiteButton = ({children}) => {
    return (
        <div>
            <button className={s.white_btn}>
                {children}
            </button>
        </div>
    );
};

export default WhiteButton;