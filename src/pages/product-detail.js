import React, { memo, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import dummyData from "../data/dummydata";
import './../css/product-details.css';
import { FavContext } from "../providers/favContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const products = dummyData.products;
        const pro = products.find((product) => product.id === Number(id)); // `find` returns a single object
        setData(pro);
    }, [id])

    return (
        <div className="pt-[70px] md:pt-1">
            <div><h1 className="text-3xl font-bold text-black-200 mb-5"> {data.category} </h1></div>
            <ProductDetails produit={data} />
            <div className="px-2">
                <div className="w-full"><h1 className="bor relative border border-b-0 py-2 w-[120px]">Description</h1></div>
                <div className="px-2 border py-4"> {data && data.description && <p className="text-left">
                    {data.description}
                </p>} </div>
            </div>
        </div>
    )
}

const ProductDetails = memo(({ produit }) => {
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const { fav, setFav,cart, setCart } = useContext(FavContext);

    const addToCart = (id) => {
        // alert(id)
        if(!cart.includes(id)){
            setCart((prev) => [...prev, id]);
        }
    }
    

    return (
        <div className="flex flex-col md:flex-row w-full min-h-[80vh] pt-[15px]">
            <div className="w-[100%] md:w-[50%]">
                <div className="max-h-[600px] overflow-hidden w-full p-2">
                    <img alt="" src={produit.image} className="object-contain w-full h-full" />
                </div>
                <div className="h-[20%] flex justify-center items-cnter">
                    <img alt="" src={produit.image} className="object-contain p-2" width={200} height={200} />

                </div>
            </div>
            <div className="w-[100%] md:w-[50%] flex flex-col justify-start items-start">
                <h1 className="pl-5 pt-5 text-2xl font-bold"> {produit.name} </h1>
                <div className="flex  items-start items-center">
                    <div className="flex items-center justify-star pl-5 pt-2 ">
                        <span className="px-1 text-black font-bold"> Rating: </span>
                        <img src="../icons/star.png" alt="" width={20} height={20} />
                        <span className="px-1 text-black font-bold"> {produit.rating}</span>
                    </div>
                    <div className="flex items-center justify-star pt-2">
                        <span className="px-1 text-black font-bold"> [{produit.reviews}</span>
                        <span className="px-1 text-black font-bold"> reviews]</span>
                    </div>
                </div>
                <div className="flex items-center justify-star pl-5 pt-[25px]">
                    <span className="px-1 text-black font-bold text-2xl"> ${produit.price}</span>
                </div>
                <div className="flex items-center justify-star pl-5 pt-[25px]">
                    <span className="px-1 text-black text-2xl text-left"> {produit.details}</span>
                </div>
                <div className="flex flex-col items-start justify-star pl-5 pt-[25px]">
                    <span className="px-1 text-black text-2xl font-bold"> Colors: </span>
                    {/* <div className="px-1 flex text-black text-2xl"> */}
                    {produit && produit.colors && (
                        <div className="px-1 flex text-black text-2xl">
                            {produit.colors.map((color, index) => (
                                <div onClick={() => setColor(color)} style={{ background: color }} className="cursor-pointer w-[50px] h-[50px] m-1 rounded" key={index}>
                                    {/* {color} */}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* </div> */}
                </div>
                <div className="flex flex-col items-start justify-star pl-5 pt-[25px]">
                    <span className="px-1 text-black text-2xl font-bold"> Sizes: </span>
                    {/* <div className="px-1 flex text-black text-2xl"> */}
                    {produit && produit.sizes && (
                        <div className="px-1 flex text-black text-2xl">
                            {produit.sizes.map((size, index) => {
                                const siz = ["S", "M", "L", "XL", "XXL"];
                                
                                if(siz.includes(size)) {
                                    return <div onClick={() => setSize(size)} className="w-[50px] h-[50px] m-1 rounded border border-black flex items-center justify-center cursor-pointer" key={index}>
                                            {size}
                                        </div>
                                }else {
                                    return <div onClick={() => setSize(size)} className="m-1 p-2 rounded border border-black flex items-center justify-center cursor-pointer" key={index}>
                                            {size}
                                        </div>
                                }
                            })}
                        </div>
                    )}

                </div>
                <div className="flex flex-col items-start justify-star pl-5 pt-[25px]">
                    <span className="px-1 text-black text-2xl font-bold"> Category: </span>
                    <div className="px-1 pl-3 flex text-black text-2xl">
                        { produit.category }
                    </div>
                </div>
                <div className="flex w-full pt-5">
                    <button onClick={() => addToCart(produit.id)} className="border w-[40%] p-5 m-2 rounded-[10px] text-white bg-black text-xl border-black">Add To Cart</button>
                    <button className="border w-[40%] p-5 m-2 rounded-[10px] text-black bg-white text-xl border-black">But Now</button>
                    <button onClick={() => {
                        if(!fav.includes(produit.id)){
                            setFav((prev) => [...prev, produit.id])
                        }
                    }} className="border w-[10%] my-2 p-2 rounded-[10px] text-black bg-white text-xl border-black">
                        <img src="../icons/heart.png" alt="" width={100} height={100} />
                    </button>
                </div>
            </div>
        </div>
    );
})

export default ProductDetail;