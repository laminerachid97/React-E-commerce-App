import React from 'react';
import '../css/home.css'
import Top from '../components/home/top';
import Products from '../components/home/products';

const Home = () => {

    return (
        <div className='section flex flex-col justify-center w-[100%] mx-auto bg-white'>
            <Top />
            <Products />
        </div>
    )
}

export default Home;