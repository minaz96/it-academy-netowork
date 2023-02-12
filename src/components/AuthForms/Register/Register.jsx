import React, { useState } from 'react';
import s from './Register.module.scss'
import Input from '../../MUI/Input/Input';
import BlueButton from '../../MUI/BlueButton/BlueButton';
import WhiteButton from '../../MUI/WhiteButton/WhiteButton'
import { Divider, Checkbox } from 'antd';
import PasswordInput from '../../MUI/PasswordInput/PasswordInput';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

const Register = ({setWhichForm}) => {
    // const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className={s.register}>
            <h2>Регистрация</h2>
            <div className={s.chooseBtn}>
                 <button>Я фрилансер</button>
                 <button>Я заказчик</button>
            </div>

            <div className={s.register_input}>
                <span>Имя</span>
                <Input/>
            </div>

            <div className={s.register_input}>
                <span>Фамилия</span>
                <Input/>
            </div>

            <div className={s.register_input}>
                <span>Email</span>
                <Input/>
            </div>

            <div className={s.register_input}>
                <span>Пароль</span>
                <PasswordInput/> 
            </div>
         
            <Divider />
            <p> Пароль должен содержать не менее 8 символов, латиницу, <br /> цифры, один из символов (!$#%)</p>

            <div className={s.register_input}>
                <span>Подтверждение пароля</span>
                <Input/>
            </div>
            
            <Checkbox onChange={onChange} className={s.checkbox}>Согласен с Privacy policy</Checkbox>;

            <div className={s.blue_btn}>
                <BlueButton>Зарегистрироваться</BlueButton> 
            </div>

            <div className={s.white_btn}>
                <WhiteButton>Уже есть аккаунт</WhiteButton>
            </div>
            
        </div>
    );
};
export default Register;