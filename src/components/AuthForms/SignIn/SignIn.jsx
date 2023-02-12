import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './SignIn.module.scss'
import BlueButton from '../../MUI/BlueButton/BlueButton';
import WhiteButton from '../../MUI/WhiteButton/WhiteButton';

const SignIn = () => {


    return (
        <div className={s.sign_in}>
            <h2>Авторизация</h2>
            <label htmlFor="email">
                Email
                <input type="email" id='email' className={s.inputs}/>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" id='password' className={s.inputs}/>
            </label>
            <Link to='/resetPassword' style={{textDecoration: 'none' , }}>   
            <span>Восстановить пароль</span>
            </Link>

            <div className={s.blue_btn}>
                <BlueButton>Войти</BlueButton> 
            </div>

            <Link to='/register'>   
            <div className={s.white_btn}>
                <WhiteButton>Зарегистрироваться</WhiteButton>
            </div>
            </Link>
            
        
        </div>
    );
};

export default SignIn;