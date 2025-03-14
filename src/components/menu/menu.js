import React from "react";
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FavContext } from "../../providers/favContext";

const Menu = () => {
    const [active, setActive] = useState('home');
    const homeRef = useRef(null);
    const menuRef = useRef(null);
    const aboutRef = useRef(null);
    const loginRef = useRef(null);
    const contactRef = useRef(null);
    const closeRef = useRef(null);
    const session = 'rachid123';
    const location = useLocation();
    const imageRef = useRef(null);
    const { favCount, cartCount } = useContext(FavContext);

    const handleNavClick = (event) => {
        const clickedLink = event.target.closest('a'); // Find the nearest <a> tag
        if (clickedLink) {
            const text = clickedLink.textContent.trim().toLowerCase(); // Get text and convert to lowercase
            setActive(text); // Update active state
        }
        // console.log(clickedLink.textContent.trim().toLowerCase());
    }

    const handleMenu = (e) => {
        e.stopPropagation();
        // e.stopImmediatePropagation();
        // alert()
        closeRef.current.classList.toggle('toggle');
    }

    useEffect(() => {
        const handleClick = (e) => {
            // e.stopPropagation();
            e.stopImmediatePropagation();
            if (closeRef.current
                && closeRef.current.classList.contains('toggle')
                && e.target !== closeRef.current) {
                closeRef.current.classList.remove('toggle')
            }

        }
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    })

    useEffect(() => {
        if (imageRef.current) {
            const isDetailPage = /^\/details\/\d+$/.test(location.pathname);
            // alert(location.pathname)
            if (isDetailPage) {
                imageRef.current.src = '/images/profile.png'; // Use absolute path
            } else {
                imageRef.current.src = '../images/profile.png';// Use absolute path
            }
        }
    }, [location.pathname]);

    useEffect(() => {
        if (homeRef.current) {
            homeRef.current.classList.toggle('border-b-2', active === 'home');
            homeRef.current.classList.toggle('border-[#E5B71C]', active === 'home');
        }
        if (menuRef.current) {
            menuRef.current.classList.toggle('border-b-2', active === 'menu');
            menuRef.current.classList.toggle('border-[#E5B71C]', active === 'menu');
        }
        if (aboutRef.current) {
            aboutRef.current.classList.toggle('border-b-2', active === 'about');
            aboutRef.current.classList.toggle('border-[#E5B71C]', active === 'about');
        }
        if (contactRef.current) {
            contactRef.current.classList.toggle('border-b-2', active === 'contact us')
            contactRef.current.classList.toggle('border-[#E5B71C]', active === 'contact us')
        }
    }, [active]);

    return (
        <div>
            <nav className='flex justify-between bg-black items-center h-[70px] text-white lg:flex'>
                <ul>
                    <li>
                        <Link className='px-5' to='/' onClick={() => setActive('home')}>
                            <span className='text-[#E5B71C] font-bold'>FASHION</span>
                            <span className='text-[#B87E13] font-bold'>TASTE</span>
                        </Link>
                    </li>
                </ul>
                <ul className='flex justify-center items-center' onClick={handleNavClick}>
                    <li ref={homeRef} className='px-5 py-3 font-bold'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li ref={menuRef} className='px-5 py-3 font-bold'>
                        <Link to='/menu'>MENU</Link>
                    </li>
                    <li ref={aboutRef} className='px-5 py-3 font-bold'>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li ref={contactRef} className='px-5 py-3 font-bold'>
                        <Link to='/contact'>CONTACT US</Link>
                    </li>
                </ul>
                <ul className='flex justify-center items-center' onClick={handleNavClick}>
                    <li className='p-2 font-bold relative'>
                        <Link to='/favorite' className=''>
                            <img src='https://img.icons8.com/?size=30&id=581&format=png&color=FFFFFF' alt='' />
                        </Link>
                        <span className='absolute top-0 right-1 bg-red-500 rounded-[50%] w-[20px] h-[20px] text-[15px] text-white flex items-center justify-center'>{favCount}</span>
                    </li>
                    <li className='p-2 font-bold relative'>
                        <Link to='/cart' className=''>
                            <img src='https://img.icons8.com/?size=30&id=59997&format=png&color=FFFFFF' alt='' />
                        </Link>
                        <span className='absolute top-0 right-1 bg-red-500 rounded-[50%] w-[20px] h-[20px] text-[15px] text-white flex items-center justify-center'>{cartCount}</span>
                    </li>
                    {session ?
                        <li className='p-2 font-bold'>
                            <Link to='/profile' className=''>
                                <img ref={imageRef} alt='' width={40} height={40} style={{ borderRadius: '50%' }} />
                            </Link>
                        </li>
                        : <li ref={loginRef} className='p-2 font-bold'>
                            <Link to='/profile'>
                                LOGIN
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
            <div className='navbar-mob absolute top-0 h-[70px] w-full bg-white/60 flex justify-between items-center'>
                <div>
                    <Link className='px-5' to='/' onClick={() => setActive('home')}>
                        <span className='text-[#E5B71C] font-bold'>FOOD</span>
                        <span className='text-[#B87E13] font-bold'>TASTE</span>
                    </Link>
                </div>
                <div className='menu-btn' onClick={handleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* Side Menu */}
            <div ref={closeRef} className='w-[80%] side-menu absolute top-0 left-[-80%] bottom-0 bg-black z-10 transition-left duration-300'>

            </div>
        </div>
    )
}

export default Menu;