import React from 'react';
import s from './Header.module.scss'
import logo from '../../Assets/logo.png'

const Header = () => {
    return (
        <div className={s.Header}>

            <div className={s.logo_title}>
             <img className={s.logo} src={logo} alt="logo" />
             <ul>
                <li>Создать задание</li>
                <li>Найти задание</li>
             </ul>
            </div>

            <div className={s.sign_in}>
                <button className={s.btn}>Вход и регистрация</button>
            </div>

        </div>
    );
};

export default Header;