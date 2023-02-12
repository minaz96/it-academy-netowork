import React, { useState } from "react";
// import ServiceBtn from "../ServiceBtn/ServiceBtn";
import { services } from '../../constants/services';
import s from "./CategoryService.module.scss";

const tabs = ['Дизайн', 'Разработка IT', 'Тексты и копирайтинг', 'SEO', 'Обучение и консалтинг'];

const CategoryService = () => {
    const [activeTab, setActiveTab] = useState(null);

  return (
    <div className={s.CategoryService}>
      <h2>Категории услуг</h2>

      <div className={s.service_items}>
      {tabs.map((item, index) => (
                    <div
                        key={index}
                        className={activeTab === index ? s.active_tab : s.tab}
                        onClick={() => {activeTab ===index ? setActiveTab(null) : setActiveTab(index)}}
                    >
                        {item}
                        {activeTab === index && <span>x</span>}
                    </div>
                ))}
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