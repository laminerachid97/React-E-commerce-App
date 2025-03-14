import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummyData from '../data/dummydata';

const Details = () => {
    const { type } = useParams();
    const navigate = useNavigate();
    const [chose, setChose] = useState('');
    const accessories = dummyData.products.filter(
        (product) => {
            if (type === 'fashion-men') return product.category === 'Fashion Men';
            if (type === 'accessories') return product.category === 'Accessories';
            if (type === 'fashion-women') return product.category === 'Fashion Women';
            return false;
        }
    );

    useEffect(() => {
        setChose(type);
        console.log(type)
    })
    return (
        <div>
            <h1 className='w-full text-2xl text-orange-500 pt-5 font-bold'>welcome to {chose}</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 py-5 px-2">
                {
                    accessories.map((product) => (
                        <div onClick={() => navigate(`../product-details/${product.id}`)} className="bg-gray-200 relative rounded-[15px]" key={product.id}>
                            <div className="w-full h-[350px] overflow-hidden rounded-[15px]"><img className="w-full h-full object-cover " src={product.image} alt={product.id} /></div>
                            <div className='w-full flex items-center justify-between pl-3 pt-3'>
                                <div className="flex items-center justify-star">
                                    <span className="px-1 text-black font-bold"> {product.rating}</span>
                                    <img src="../icons/star.png" alt="" width={20} height={20} />
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
                            <h1 className="text-xl mb-2 w-full text-left pl-3 font-bold">${product.price}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Details;