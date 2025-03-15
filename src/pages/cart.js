import React, { useContext, useState, useMemo, useEffect } from 'react';
import { FavContext } from '../providers/favContext';
import dummyData from '../data/dummydata';

function Cart() {
  const { cart, cartCount } = useContext(FavContext); // Destructure 'name' from the object
  const [qte, setQte] = useState([]);
  const [total, setTotal] = useState(0);
  let somme = 0;

  const product = useMemo(() => {
    const newQte = [];
    return dummyData.products.filter((product) => {
      if (cart.includes(product.id)) {
        newQte.push([product.id, 1, product.price]);
        return true;
      }
      setQte(newQte);
      return false;
    });
  }, [cart]);

  useEffect(() => {
    let newTotal = 0;
    product.forEach((product) => {
      const item = qte.find((item) => item[0] === product.id);
      if (item) {
        newTotal += item[1] * product.price;
      }
    });
    setTotal(newTotal);
  }, [product, qte]);

  return (
    <div className='pt-[70px]'>
      <div className='px-[50px] py-5'>
        <h1 className='text-2xl font-bold'>Your Cart</h1>
        <div className='flex justify-between mt-5 flex-col lg:flex-row'>
          <div className='basis-[72%] flex flex-col '>
            <div className='w-full border rounded-[15px] mb-5 hidden md:flex'>
              <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Product</div>
              <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Price</div>
              <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Qte</div>
              <div className='basis-[25%] flex justify-center items-center font-bold text-black/50 h-[50px]'>Total</div>
            </div>
            {(cartCount === 0) && <h1 className='text-2xl font-bold text-black/50 mt-[100px]'>No items yet</h1>}
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
                      <button className='p-2 border bg-white rounded'
                        onClick={() => {
                          const updatedQte = qte.map((item) => {
                            if (item[0] === produit.id) {
                              if (item[1] > 0) { return [item[0], item[1] - 1]; }
                            }
                            return item;
                          });
                          setQte(updatedQte); // Update the state with the new array
                          console.log(qte);
                        }}
                      >-</button>
                      <span className='p-2 border bg-white rounded'>
                        {qte.find((item) => item[0] === produit.id)?.[1]}
                      </span>
                      <button className='p-2 border bg-white rounded'
                        onClick={() => {
                          const updatedQte = qte.map((item) => {
                            if (item[0] === produit.id) {
                              return [item[0], item[1] + 1, produit.price];
                            }
                            console.log(item);
                            return item;
                          });
                          setQte(updatedQte); // Update the state with the new array
                          console.log(qte);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className='basis-[100%] md:basis-[25%] flex justify-center w-full items-center font-bold text-black/50 h-[50px]'>
                      <div className='sm:flex md:hidden'>
                        <span className='mx-3'>total: </span>
                      </div>
                      <div>
                        ${qte.map((item) => {
                          if (item[0] === produit.id) {
                            somme = item[1] * produit.price
                            return somme.toFixed(2);
                          } else {
                            return false;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='flex order-1 md:order-2 justify-center md:justify-start items-center'>
                    <h1 className='ml-5 my-4 text-xl text-black/60 font-bold'>{produit.name}</h1>
                  </div>
                </div>
              ))
            }
          </div>
          {Number(cartCount) !== 0 && <div className='basis-[25%] flex flex-col justify-start pt-[5%] max-h-[400px] items-center border bg-orange-500 rounded-[20px]'>
            <span className='w-[80%] h-[5px] mb-[10%] bg-black'></span>
            <div className='flex justify-between items-center w-[80%]'>
              <span className='text-2xl'>Cart Total</span>
              <span className='text-2xl font-bold'>${total.toFixed(2)}</span>
            </div>
            <div className='flex justify-between items-center w-[80%]'>
              <span className='text-2xl'>Shipping </span>
              <span className='text-2xl font-bold'>free</span>
            </div>
            <span className='w-[80%] h-[5px] my-[10%] bg-black'></span>
            <div className='flex justify-between items-center w-[80%]'>
              <span className='text-2xl font-bold'>Cart Total</span>
              <span className='text-2xl font-bold'>${total.toFixed(2)}</span>
            </div>
            <button className='p-3 my-5 text-white text-xl w-[60%] bg-black rounded-[50px] '>
              Checkout
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Cart;