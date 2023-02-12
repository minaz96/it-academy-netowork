import React from 'react';
import s from './Header.module.scss'
import logo from '../../Assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const logout = () => {
        navigate('/auth')
    }

    return (
        <div className={s.Header}>

            <div className={s.logo_title}>
             <img className={s.logo} src={logo} alt="logo" onClick={()=>navigate('/')} />
             <ul>
                <li>Создать задание</li>
                <li>Найти задание</li>
             </ul>
            </div>

            <div className={s.sign_in}>
                <button className={s.btn} onClick = {()=>logout()}>Вход и регистрация</button>
            </div>

        </div>
    );
};

export default Header;