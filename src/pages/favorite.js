import React, { useContext } from "react";
import { FavContext } from "../providers/favContext";

const Favorite = () => {
    const { name, addFavorite, age } = useContext(FavContext); // Destructure 'name' from the object

    return (
        <div>
            <h1 className="text-3xl">Favorite here !!</h1>
        </div>
    );
}

export default Favorite;