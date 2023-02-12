import React from 'react';
import s from './PasswordInput.module.scss'
import { Button } from 'antd';
import Password from '../../../Assets/Stroke.png'
import { EyeInvisibleOutlined } from '@ant-design/icons';

const PasswordInput = ({children}) => {
    return (
        <Button className={s.my_input}>
            {children} 
            <img src={Password} alt="eye" />
        </Button>
    );
};

export default PasswordInput;