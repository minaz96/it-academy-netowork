import React from 'react';
import s from './resetPassword.module.scss'
import Input from '../../components/MUI/Input/Input';
import BlueButton from '../../components/MUI/BlueButton/BlueButton';
import WhiteButton from '../../components/MUI/WhiteButton/WhiteButton';

const ResetPassword = () => {
    return (
        <div className={s.resetPage}>
            <h1>Восстановление пароля</h1>
            <p>Введите email, который вы использовали при <br /> регистрации</p>
            <div className={s.reset_btn}>
                <span>Email</span>
                <Input/>
            </div>
            <div className={s.blue_btn}>
                <BlueButton>Восстановить</BlueButton> 
            </div>
            <div className={s.white_btn}>
                <WhiteButton>Войти</WhiteButton>
            </div>
            
        </div>
    );
};

export default ResetPassword;