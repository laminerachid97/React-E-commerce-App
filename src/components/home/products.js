import dummyData from "../../data/dummydata";
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FavContext } from "../../providers/favContext";

const Products = () => {


    return (
        <div className="my-5">
            <h1 className="text-3xl my-5 font-bold underline">BEST SELLER</h1>
            <div className="px-4 mx-4">
                <ListData data={dummyData.products} />

            </div>
        </div>
    )
}

const ListData = ({ data }) => {
    const navigate = useNavigate();
    const { fav, setFav, favCount } = useContext(FavContext);

    const addFavo = (id) => {
        setFav((prevFav) => [...prevFav, id]);
        alert(favCount)
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
            {
                data.map((product) => (
                    <div onClick={() => navigate(`product-details/${product.id}`)} className="bg-gray-200 relative rounded-[15px]" key={product.id}>
                        <div className="w-full h-[350px] overflow-hidden rounded-[15px]"><img className="w-full h-full object-cover " src={product.image} alt={product.id} /></div>
                        <div className='w-full flex items-center justify-between pl-3 pt-3'>
                            <div className="flex items-center justify-star">
                                <span className="px-1 text-black font-bold"> {product.rating}</span>
                                <img src="icons/star.png" alt="" width={20} height={20} />
                            </div>
                            <div className="flex items-center justify-star">
                                <span className="px-1 text-black font-bold"> [{product.reviews}</span>
                                <span className="px-1 text-black font-bold"> reviews]</span>
                            </div>
                        </div>
                        <h1 className="text-xl mb-1 w-full text-left pl-3 font-bold">{product.name}</h1>
                        <div className='absolute top-[10px] left-[10px] rounded border-none px-3 bg-red-500'>
                            <span className="text-white font-bold"> {product.off}%</span>
                        </div>
                        <div onClick={(e) => {
                            e.stopPropagation();
                            addFavo(product.id);
                        }} className='absolute top-[10px] right-[10px] rounded border-none px-3 cursor-pointer'>
                            <img src="https://img.icons8.com/?size=100&id=10287&format=png&color=FFFFFF" alt="" width={35} height={35} />
                        </div>
                        <h1 className="text-xl mb-2 w-full text-left pl-3 font-bold">${product.price}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;