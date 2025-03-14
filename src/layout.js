import React from 'react';
import './layout.css';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';

const Layout = ({ children }) => {

    return (
        <div className='w-[90%] mx-auto bg-white main relative'>
            <Menu />
            <div className='w-full'>
                {children}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
