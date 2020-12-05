import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCredits(movie.id).then(cast => {
            setCast(cast.cast);
        });
    }, []);

    return ( 
        <div>
            <h4>Movie Cast</h4>
            {cast.map(c => {
                return (
                    <div>
                        {c.name}
                    </div>
                );
            })}
        </div>
    );
};