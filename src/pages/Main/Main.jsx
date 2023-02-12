import React from 'react';
import CategoryService from '../../components/CategoryService/CategoryService';
import LastBlock from '../../components/LastBlock/LastBlock';
import Performers from '../../components/Performers/Performers';
import Service from '../../components/Service/Service';

const Main = () => {
    return (
        <div>
            <Service/>
            <Performers/>
            <CategoryService/>
            <LastBlock/>
        </div>
    );
};

export default Main;