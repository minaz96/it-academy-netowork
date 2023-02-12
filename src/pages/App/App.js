import React from 'react';
import s from "./App.module.scss"
// import cn from "classnames"
import Main from "../main"
import "swiper/css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Auth from './auth/Auth';
import ResetPassword from '../resetPassword';
import Register from '../../components/AuthForms/Register/Register';


export const App = () => {
  return (
    <div className={s.App}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<p>404</p>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;