import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DivScrollContext } from "../../providers/divContext";

const Top = () => {
    const navigate = useNavigate();
    const { divRef } = useContext(DivScrollContext);

    const moveTo = () => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            window.scrollTo({
                top: rect.top - 60, 
                behavior: "smooth"
            });
        }
    }

    const handleCata = (e) => {
        // const clicked = e.target.closest("h1").innerText;
        const parent = e.currentTarget; // The container with onClick
        const clickedChild = e.target.closest(".catalog > div"); // Find the closest direct child div
    
        if (!clickedChild) return; // If no valid child is clicked, exit
    
        const children = Array.from(parent.children); // Get all direct children
        const clickedIndex = children.indexOf(clickedChild); // Get index
    
        if (clickedIndex !== -1) {
            console.log(`Clicked child index: ${clickedIndex + 1}`);
            switch (clickedIndex) {
                case 0:
                    navigate(`details/fashion-men`)
                    break;
                case 1:
                    navigate(`details/accessories`)
                    break;
                case 2:
                    navigate(`details/fashion-women`)
                    break;
                default:
                    break;
            }

        }
    }

    return (
        <div className="w-full">
            <div className="test flex flex-col justify-center items-center h-[80vh] w-full">
                <h1 className='flex-1 w-full mx-auto start text-5xl text-orange-500 font-bold'>
                    Shopping Like a Bilionaire
                </h1>
                <div className='flex-1 w-full text-5xl text-orange-500 font-bold h-[100%] flex flex-col justify-center items-center w-full  '>
                    <h1 className='second text-xl'>Sale up to $30 off</h1>
                    <h1 className='second'>Spring Collection</h1>
                </div>
                <div className='flex-1 w-full text-xl text-orange-500 font-bold h-[100%] flex flex-col justify-center items-start w-full  '>
                    <button onClick={moveTo} className='second bg-black hover:text-white transition-shadow duration-300 p-4 px-[30px] ml-[100px] rounded-[50px]'>Discover</button>
                </div>
            </div>
            <div onClick={handleCata} className="catalog w-full h-[270px] flex">
                <div className="men rounded p-1 m-1 my-2 w-[35%] border overflow-hidden relative cursor-pointer">
                    <div className="rounded fa">
                        <img className="opacity-50 hover:opacity-100 transition-opacity duration-300 rounded absolute inset-0 w-full h-full object-cover object-top" src="https://www.dmarge.com/wp-content/uploads/2023/03/70s-Fashion-Mens-Fashion-A-Guide-To-70s-Mens-Style.gif" alt=""/>
                        <h1 className="text-2xl text-black font-bold absolute z-1 flex flex-col justify-center items-center inset-0">
                            <span>Fashion Men</span>
                            <span className="text-underline text-xl bg-black rounded-[50px] text-orange-500 px-5 py-3 mt-4">Shop Now</span>
                        </h1>
                    </div>

                </div>
                <div className="accesso rounded p-1 m-1 my-2 w-[30%] border overflow-hidden relative cursor-pointer">
                    <div className="rounded fa">
                        <img className="opacity-50 hover:opacity-100 transition-opacity duration-300 rounded absolute inset-0 w-full h-full object-cover" src="https://techcrunch.com/wp-content/uploads/2023/09/Meta-Ray-Ban-Stories-13.jpg" alt=""/>
                        <h1 className="text-2xl text-black font-bold absolute z-1 flex flex-col justify-center items-center inset-0">
                            <span>Accessors</span>
                            <span className="text-underline text-xl bg-black rounded-[50px] text-orange-500 px-5 py-3 mt-4">Shop Now</span>
                        </h1>
                    </div>

                </div>
                <div className="women rounded p-1 m-1 my-2 w-[35%] border overflow-hidden relative cursor-pointer">
                    <div className="rounded fa">
                        <img className="opacity-50 hover:opacity-100 transition-opacity duration-300 rounded absolute inset-0 w-full h-full object-cover object-top" src="https://www.sojoee.com/wp-content/uploads/2024/10/womens_casual_pink_top.jpg" alt=""/>
                        <h1 className="text-2xl text-black font-bold absolute z-1 flex flex-col justify-center items-center inset-0">
                            <span>Fashion Women</span>
                            <span className="text-underline text-xl bg-black rounded-[50px] text-orange-500 px-5 py-3 mt-4">Shop Now</span>
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Top;