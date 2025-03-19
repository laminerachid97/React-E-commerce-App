import React from "react";
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FavContext } from "../../providers/favContext";
import { AuthContext } from "../../providers/authContext";

const Menu = () => {
    const [active, setActive] = useState('home');
    const [session, setSession] = useState(false);
    const homeRef = useRef(null);
    const menRef = useRef(null);
    const womenRef = useRef(null);
    const aboutRef = useRef(null);
    const loginRef = useRef(null);
    const contactRef = useRef(null);
    const closeRef = useRef(null);
    const location = useLocation();
    const imageRef = useRef(null);
    const { favCount, cartCount } = useContext(FavContext);
    const { users } = useContext(AuthContext);

    const handleNavClick = (event) => {
        const clickedLink = event.target.closest('a');
        if (clickedLink) {
            const text = clickedLink.textContent.trim().toLowerCase();
            setActive(text);
        }

    }

    const handleMenu = (e) => {
        e.stopPropagation();
        if (closeRef.current) {
            closeRef.current.classList.toggle('toggle');
        }
        if (closeRef.current.classList.contains('toggle')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    const navClicked = (e) => {
        e.stopPropagation();
        const clickedLink = e.target.closest('a');
        if (clickedLink) {
            document.body.style.overflow = 'auto';
            closeRef.current.classList.remove('toggle')
        }
    }

    useEffect(() => {
        const handleClick = (e) => {

            e.stopImmediatePropagation();
            if (closeRef.current
                && closeRef.current.classList.contains('toggle')
                && !closeRef.current.contains(e.target)) {
                closeRef.current.classList.remove('toggle')
            }

        }
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    })

    // useEffect(() => {
    //     if (imageRef.current) {
    //         console.log("location.pathname:", location.pathname);
    //         const isDetailPage = /^\/[^\/]+\/[^\/]+$/.test(location.pathname);
    //         if (isDetailPage) {
    //             imageRef.current.src = './../images/profile.png';// Use absolute path
    //         } else {
    //             imageRef.current.src = './images/profile.png'; // Use absolute path
    //         }
    //         console.log(isDetailPage)
    //     }
    // }, [location.pathname]);

    useEffect(() => {
        if (homeRef.current) {
            homeRef.current.classList.toggle('border-b-2', active === 'home');
            homeRef.current.classList.toggle('border-[#E5B71C]', active === 'home');
        }
        if (menRef.current) {
            menRef.current.classList.toggle('border-b-2', active === 'men');
            menRef.current.classList.toggle('border-[#E5B71C]', active === 'men');
        }
        if (womenRef.current) {
            womenRef.current.classList.toggle('border-b-2', active === 'women');
            womenRef.current.classList.toggle('border-[#E5B71C]', active === 'women');
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

    useEffect(() => {
        if (users.length === 0) {
            setSession(false)
        }else{
            setSession(true)
        }
    },[users, session])

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
                    <li ref={menRef} className='px-5 py-3 font-bold'>
                        <Link to='/details/fashion-men'>MEN</Link>
                    </li>
                    <li ref={womenRef} className='px-5 py-3 font-bold'>
                        <Link to='details/fashion-women'>WOMEN</Link>
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
                                <img ref={imageRef} src="./../images/profile.png" alt='' width={40} height={40} style={{ borderRadius: '50%' }} />
                            </Link>
                        </li>
                        : <li ref={loginRef} className='p-2 px-4 font-bold'>
                            <Link className="text-white" to='/login'>
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
            <div ref={closeRef} className='w-[90%] side-menu absolute top-0 left-[-90%] bottom-0 h-screen bg-black z-10 transition-left duration-300'>
                <div className="w-full h-full flex flex-col" onClick={navClicked}>
                    <Link className='px-5 w-full py-3 mt-2' to='/' onClick={() => setActive('home')}>
                        <span className='text-[#E5B71C] font-bold'>FOOD</span>
                        <span className='text-[#B87E13] font-bold'>TASTE</span>
                    </Link>
                    <Link className='px-5 py-3 font-bold text-white mt-5' to='/about'>ABOUT</Link>
                    <Link className='px-5 py-3 font-bold text-white my-5' to='/contact'>CONTACT US</Link>
                    <div className=" px-5 py-3 flex justify-center my-2">
                        <Link to='/favorite' className='relative'>
                            <img src='https://img.icons8.com/?size=30&id=581&format=png&color=FFFFFF' alt='' />
                            <span className='absolute top-[-8px] right-[-8px] bg-red-500 rounded-[50%] w-[20px] h-[20px] text-[15px] text-white flex items-center justify-center'>{favCount}</span>
                        </Link>
                    </div>
                    <div className=" px-5 py-3 flex justify-center my-2">
                        <Link to='/cart' className='relative'>
                            <img src='https://img.icons8.com/?size=30&id=59997&format=png&color=FFFFFF' alt='' />
                            <span className='absolute top-[-8px] right-[-8px] bg-red-500 rounded-[50%] w-[20px] h-[20px] text-[15px] text-white flex items-center justify-center'>{cartCount}</span>
                        </Link>
                    </div>
                    <div className=" relative px-5 py-3 flex justify-center my-2">
                        {session ?
                            <li className='mt-[-10px]'>
                                <Link to='/profile' className=''>
                                    <img ref={imageRef} src="./../images/profile.png" alt='' width={40} height={40} style={{ borderRadius: '50%' }} />
                                </Link>
                            </li>
                            : <li ref={loginRef} className='p-2 font-bold text-white list-none'>
                                <Link to='/profile'>
                                    LOGIN
                                </Link>
                            </li>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;