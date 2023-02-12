import React from 'react';
import s from './Service.module.scss'
import service_back from '../../Assets/service_back.png'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import {Input} from 'antd'
import Hints from "../Hints/Hints";

const Service = () => {
    const dataHints = [
        {
          name: "Веб дизайн",
        },
        {
          name: "Фирменный стиль",
        },
        {
          name: "Дизайн лого",
        },
      ];

    return (
        <div className={s.service}>
            <div className={s.service_left}>
                <h1>Сервис подбора фрилансеров</h1>
                <p>Быстрый поиск исполнителей для ваших задач</p>

                <div className={s.search}>
                    <Input 
                        className={s.search_input} 
                        size="large" 
                        placeholder="Мобильное прило| " 
                        prefix={<SearchOutlined />} />

                    <button>Найти</button>
                </div>

                <div className={s.hints}>
                    {
                        dataHints.map((hints, index) => {
                         return (
                          <Hints key={index}>
                          { hints.name }
                          </Hints>
                         )
                         })
                     }
                </div>
                
                    
            </div>

            <div className={s.service_right}>
                <div className={s.service_right_img}>
                    <img src={service_back} alt="image" />
                </div>
            </div>
            
        </div>
    );
};

export default Service;