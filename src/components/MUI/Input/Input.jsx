import React from 'react';
import s from './Input.module.scss'
import { Button } from 'antd';

const Input = ({children}) => {
    return (
        <Button className={s.my_input}>
            {children}
        </Button>
    );
};

export default Input;