import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';
import { FooterBoxArea } from '../Components/styles/Footer.style';
import { HeaderBoxArea } from '../Components/styles/Header.style';

const Main = () => {
    return (
        <div>
            <HeaderBoxArea>
                <Header />
            </HeaderBoxArea>
            <Outlet />
            <FooterBoxArea>
                <Footer />
            </FooterBoxArea>
        </div>
    );
};

export default Main;