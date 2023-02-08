import React, { useState } from "react";
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import { services } from '../../constants/services';
import s from "./CategoryService.module.scss";

const CategoryService = () => {
  const [stateService, setstateServie] = useState(false);
  const [serviceBlocks, setServiceBlocks] = useState(
    [
        {
            title: "Дизайн",
            id: 1
        },
        {
            title: "Разработка IT",
            id: 2
        },
        {
            title: "Тексты и копирайтинг",
            id: 3
        },
        {
            title: "SEO",
            
            id: 4
        },
        {
            title: "Обучение и консалтинг",
            id: 5
        }

    ])


  return (
    <div className={s.CategoryService}>
      <h2>Категории услуг</h2>

      <div className={s.service_items}>
        {
            serviceBlocks.map((service)=> { 
                return <ServiceBtn key = {service.id} serviceTitle = {service.title}/>
            })
        }
      </div>

      <div className={s.services__block}>
                {services.map((item, index) => (
                    <div
                        key={index}
                        className={s.service}
                    >
                        <img className={s.service_img} src={item.url} alt={item.title} />
                        <div className={s.right_block}>
                            <span className={s.title}>{item.title}</span>
                            <span className={s.price}>от {item.price} руб</span>
                        </div>
                    </div>
                ))}
            </div>

    </div>
  );
};

export default CategoryService;