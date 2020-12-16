// noprotect
import React, { useEffect, useState } from "react";
import { getMovieProviders } from "../../api/tmdb-api";

export default ({ movie }) => {
    const [whereToBuy, setProviders] = useState([]);

    useEffect(() => {
        getMovieProviders(movie.id).then(whereToBuy => {
            if(whereToBuy !== undefined)
                setProviders(whereToBuy.buy)
        });
    }, []);

    if(whereToBuy != null && whereToBuy !== undefined)
        return ( 
            <div>
                <h4>Where to buy in Ireland</h4>
                {whereToBuy.map(p => {
                    return (
                        <div>
                            {p.provider_name}
                        </div>
                    );
                })}
            </div>
        );
        return (
            <div>
                <h4>Where to buy in Ireland</h4>
                <div>
                    No vendors in Ireland
                </div>
            </div>
        );
};