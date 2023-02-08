import React from 'react';
import s from './Footer.module.scss'
import logoFooter from '../../Assets/logoFooter.png'

const Footer = () => {
    return (
        <div className={s.Footer}>

            <div className={s.footer_left}>
             <img className={s.logo_footer} src={logoFooter} alt="logo" />
             <p> &copy; 2022 NETOWORK <br/> 
                Все права защищены</p>
            </div>

            <div className={s.footer_right}>
             <ul>
                <li>О платформе</li>
                <li>Как разместить заказ</li>
                <li>Как получить заказ</li>
                <li>Служба поддержки</li>
             </ul>

             <ul>
                <li>Правила работы сервиса</li>
                <li>Политика конфиденциальности</li>
             </ul>
            
            </div>

        </div>
    );
};

export default Footer;