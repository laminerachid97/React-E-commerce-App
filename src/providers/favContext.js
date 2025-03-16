import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([]);
    const [favCount, setFavCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    let age = 20;

    const addFavorite = () => {
        console.log(age);
        age = 20;
        console.log(age);
    }

    useEffect(() => {
        setFavCount(fav.length);
        setCartCount(cart.length);
    },[fav, cart])

    return (
        <FavContext.Provider value={{ age, fav, setFav, addFavorite, favCount, cartCount,cart, setCart }}>
            {children}
        </FavContext.Provider>
    );
};