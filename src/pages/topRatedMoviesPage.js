import React, { useContext } from "react";
import AddToFavoriteButton from '../components/buttons/addToFavorites';
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

const TopRatedMoviesPage = props => {
  const context = useContext(MoviesContext);
  const toprated = context.toprated.filter((m) => {  // New
    return !("favourite" in m);
  });

  return (
    <PageTemplate
      title="No. Top Rated Movies"
      movies={toprated}  /* Changed */
      action={(movie) => {
        return <AddToFavoriteButton movie={movie} />;
      }}
      />
  );
};

export default TopRatedMoviesPage;