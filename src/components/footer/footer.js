import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black w-full mt-5 px-5">
            <div className="flex justify-around items-center flex-col md:flex-row">
                <div className="w-[50%] my-5 md:m-auto">
                    <h1 className="text-white font-bold text-3xl">
                        Let's <span className="text-orange-500">Connect</span> there
                    </h1>
                </div>
                <div className="w-[50%] mx-auto flex justify-center items-center">
                    <div className="flex justify-between items-center rounded-[20px]">
                        <div className="cursor-pointer bg-white flex justify-between w-[270px] rounded-[40px] m-4">
                            <div className="bg-orange-500 rounded-[50px] w-[200px] p-3 flex justify-center items-center">
                                <Link to='/contact' ><h1 className="text-xl text-white">Contact Us Now</h1> </Link>
                            </div>
                            <div className="bg-orange-500 flex justify-center items-center rounded-[50px] w-[50px] p-3 overflow-hidden w-[55px]">
                                <img alt="" src="./../icons/right.png" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-[50px] flex-col md:flex-row w-full text-white">
                <div className="basis-[35%] flex flex-col">
                    <div>
                        <h1 className="text-2xl text-orange-500">FASHION-TASTE</h1>
                    </div>
                    <p className=" text-white/80 p-[30px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero accusamus atque suscipit
                    </p>
                </div>
                <div className="basis-[15%]">
                    <h1 className="text-2xl text-orange-500">Navigation</h1>
                    <div className="flex items-center md:items-start flex-col w-[100%] text-white/80 text-[15px] md:pl-[30px] mt-[20px]">
                        <span className="p-1 cursor-pointer">Home</span>
                        <span className="p-1 cursor-pointer">Services</span>
                        <span className="p-1 cursor-pointer">About Us</span>
                        <span className="p-1 cursor-pointer">Projects</span>
                        <span className="p-1 cursor-pointer">Careers</span>
                        <span className="p-1 cursor-pointer">FAQs</span>
                    </div>

                </div>
                <div className="basis-[20%]">
                    <h1 className="text-2xl mt-5 md:m-auto text-orange-500 ">Contact</h1>
                    <div className="flex items-center md:items-start flex-col w-[100%] text-white/80 text-[15px] md:pl-[60px] pr-2 mt-[20px]">
                        <span className="p-1">+212 612345678</span>
                        <span className="p-1 mt-2">www.example.com</span>
                        <span className="p-1 mt-2">example@gmail.com</span>
                        <span className="p-1 text-left">Numero 4512 Ave Hassan 2 Agadir Morocco</span>

                    </div>

                </div>
                <div className=" flex flex-col basis-[40%]">
                    <h1 className="text-2xl text-orange-500 w-full mt-5 md:m-auto">Get the latest information</h1>
                    <div className="w-full flex justify-center items-center mt-5">
                        <div className="rounded-l-[50px] w-[200px] h-[50px]">
                            <input type="text" className="w-full outline-none text-black h-full p-0 m-0 rounded-l-[50px] bg-black-500 pl-5" placeholder="Email address" />
                        </div>
                        <div className="bg-orange-500 rounded-r-[50px] w-[50px] h-[50px] p-3 cursor-pointer">
                            <img alt="" src="./../icons/send.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-[15px] text-white/80 px-3">
                    Copyright 2025 <span className="text-orange-500 ">WebsiteName</span>. All Rights Reserved.
                </h1>
                <h1 className="text-[15px] text-white/80 px-3">
                    User Terms and Conditions | Privacy Policy
                </h1>
            </div>
        </div>
    )
}

export default Footer;