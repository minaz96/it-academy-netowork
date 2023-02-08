import React from 'react';
import CategoryService from '../../components/CategoryService/CategoryService';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LastBlock from '../../components/LastBlock/LastBlock';
import Performers from '../../components/Performers/Performers';
import Service from '../../components/Service/Service';

const Main = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <Performers/>
            <CategoryService/>
            <LastBlock/>
            <Footer/>
        </div>
    );
};

export default Main;