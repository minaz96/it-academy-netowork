import React from "react";
import s from "./UserCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./UserCard.css";
import { Tooltip } from "antd";
import shop from "../../Assets/shopBar.png";

const UserCard = ({ name, img, profileImg }) => {
  return (
    <div className={s.user_card}>
      <div className={s.user_images}>
        <Tooltip placement="right" title='Смотреть портфолио'>
          <img className={s.shop} src={shop} alt="" />
        </Tooltip>
        <Swiper
          autoplay={{ delay: 2000 }}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {img.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={img} alt="img user" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={s.user_card_content}>
        <div className={s.user_info}>
          <img src={profileImg} alt="profileImg" />
          <h4 className={s.profile_name}>{name}</h4>
        </div>
        <button className={s.user_btn}>Перейти в портфолио</button>
      </div>
    </div>
  );
};

export default UserCard;