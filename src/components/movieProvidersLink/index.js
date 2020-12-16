// noprotect
import React, { useEffect, useState } from "react";
import { getMovieProviders } from "../../api/tmdb-api";
import { Link } from "react-router-dom";

export default ({ movie }) => {
    const [whereToBuy, setProviders] = useState([]);

    useEffect(() => {
        getMovieProviders(movie.id).then(whereToBuy => {
            setProviders(whereToBuy)
        });
    }, []);

    if(whereToBuy != null)
        return ( 
            <div>
                <div>
                    <a href={whereToBuy.link}>Purchase Here</a>
                </div>
            </div>
        );
        return (
            <div>
                <h4>Link to buy</h4>
                <div>
                    None
                </div>
            </div>
        );
};