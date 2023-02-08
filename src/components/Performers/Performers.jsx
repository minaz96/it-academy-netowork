import React, { useState } from "react";
import s from "./Performers.module.scss";
import user1 from "../../Assets/user1.png";
import user2 from "../../Assets/user2.png";
import user3 from "../../Assets/user3.png"
import user4 from "../../Assets/user4.png"
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png";
import profile3 from "../../Assets/profile3.png";
import UserCard from "../UserCard/UserCard";
import Item from "antd/es/list/Item";

const Performers = () => {
  const [users, setUsers] = useState([
    {
      name: "Максим Фролов",
      img: [user1, user2, user3, user4],
      profileImg: profile1,
      id: 1,
    },
    {
      name: "Михаил Баринов",
      img: [user2, user3, user4, user1],
      profileImg: profile2,
      id: 2,
    },
    {
      name: "Максим Фролов",
      img: [user3, user4, user1, user2],
      profileImg: profile2,
      id: 3,
    },
    {
      name: "Александр Громов",
      img: [user4, user1, user2, user3],
      profileImg: profile3,
      id: 4,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user3, user4],
      profileImg: profile1,
      id: 5,
    },
    {
      name: "Михаил Баринов",
      img: [user2, user3, user4, user1],
      profileImg: profile2,
      id: 6,
    },
    {
      name: "Максим Фролов",
      img: [user3, user4, user1, user2],
      profileImg: profile2,
      id: 7,
    },
    {
      name: "Александр Громов",
      img: [user4, user1, user2, user3],
      profileImg: profile3,
      id: 8,
    },
  ]);

  return (
    <div className={s.Performers}>
      <h2>Наши лучшие исполнители</h2>
      <div className={s.cards}>
        {users.map((user) => {
          return (
            <UserCard
            key={user.id}
              name={user.name}
              img={user.img}
              profileImg={user.profileImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Performers;