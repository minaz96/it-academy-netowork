import React from 'react';
import s from "./LastBlock.module.scss"
import first from '../../Assets/work1.png'
import second from '../../Assets/work2.png'
import third from '../../Assets/work3.png'
import ServicesCard from '../ServicesCard/ServicesCard';

const cards = [
    {
        title: 'Опишите услугу',
        description:'Опишите свою задачу и условия. Это бесплатно и займёт 3‑4 минуты',
        img: first,
        id: 1 
    },
    {
        title: 'Получите отклики',
        description:'Отклики с ценами от исполнителей. Обычно они приходят в течение 30 минут',
        img: second,
        id: 2
    },
    {
        title: 'Выберите исполнителя',
        description:'Выберите подходящего исполнителя и обсудите сроки выполнения',
        img: third,
        id: 3
    },
]

const LastBlock = () => {
    return (
        <div className={s.last_block}>
            <h2 className={s.heading}>Как работает сервис?</h2>
            <div className={s.cards_container}>
                {cards.map((item)=>(
                    <ServicesCard key={item.id} data={item}/>
                ))}

            </div>
            
        </div>
    );
};

export default LastBlock;