import React, { useContext, useMemo } from "react";
import { FavContext } from "../providers/favContext";
import dummyData from './../data/dummydata';

const Favorite = () => {
    const { fav, favCount, setCart, cart } = useContext(FavContext); // Destructure 'name' from the object
  
    const product = useMemo(() => {
      return dummyData.products.filter((product) => {
        if (fav.includes(product.id)) {
          return product;
        }
        return false;
      });
    }, [fav]);

    const addToCart = (id) => {
        if(!cart.includes(id)){
            setCart((prev) => [...prev, id]);
        }
    }
  
    return (
      <div className='pt-[70px]'>
        <div className='px-[50px] py-5'>
          <h1 className='text-2xl font-bold'>Your Favorite List</h1>
          <div className='flex justify-between mt-5 flex-col lg:flex-row'>
            <div className='basis-[72%] flex flex-col '>
              <div className='w-full border rounded-[15px] mb-5 hidden md:flex'>
                <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Product</div>
                <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Price</div>
                <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Qte</div>
              </div>
              {(favCount === 0) && <h1 className='text-2xl font-bold text-black/50 mt-[100px]'>No items yet</h1>}
              {
                product.map((produit) => (
                  <div className='flex flex-col w-full border rounded-[15px] mb-5' key={produit.id}>
                    <div className='flex order-2 md:order-1 items-center flex-col md:flex-row w-full'>
                      <div className='basis-[100%] md:basis-[25%] rounded-[15px] h-full flex justify-center items-center font-bold text-black/50'>
                        <img alt='' src={produit.image} className='object-fill rounded-[15px] w-full h-full p-[5px]' />
                      </div>
                      <div className='basis-[100%] md:basis-[25%] py-2 flex justify-center items-center font-bold text-black/50 h-[50px]'>
                        <div className='sm:flex md:hidden'>
                          <span className='mx-3'>price: </span>
                        </div>
                        <div className=''>
                          <span> ${produit.price} </span>
                        </div>
                      </div>
                      <div className='basis-[100%] md:basis-[25%] py-2 flex justify-center items-center font-bold text-black/50 h-[50px]'>
                            <h1 className='ml-5 my-4 text-xl text-black/60 font-bold'>{produit.name}</h1>
                      </div>
                      <div className='basis-[100%] md:basis-[25%] flex justify-center w-full items-center font-bold text-black/50 h-[50px]'>
                        <div className='bg-black p-3 px-5 rounded-[15px]'>
                          <button className="text-white" onClick={() => addToCart(produit.id)}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
}

export default Favorite;