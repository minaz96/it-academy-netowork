import React from 'react';
import s from "./App.module.scss"
import cn from "classnames"
import Main from "../Main"
import "swiper/css";
import {Routes} from 'react-router-dom'


export const App = () => {
  return (
    <div className={s.App}>
      <Main/>
    </div>
  );
};

export default App;