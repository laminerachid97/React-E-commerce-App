import React, { useContext } from "react";
import { FavContext } from "../providers/favContext";

const Favorite = () => {
    const { addFavorite, age } = useContext(FavContext); 

    return (
        <div className='pt-[70px]'>
            <h1 className="text-3xl">Favorite here !!</h1>
        </div>
    );
}

export default Favorite;