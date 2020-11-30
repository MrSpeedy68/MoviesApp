import React, { useContext } from "react";
import AddToFavoriteButton from '../components/buttons/addToFavorites';
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

const NowPlayingMoviesPage = props => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying.filter((m) => {  // New
    return !("favourite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies in Theatres Movies"
      movies={nowplaying}  /* Changed */
      action={(movie) => {
        return <AddToFavoriteButton movie={movie} />;
      }}
      />
  );
};

export default NowPlayingMoviesPage;