import React, { useContext } from "react";
import AddToFavoriteButton from '../components/buttons/addToFavorites';
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

const MostPopularMoviesPage = props => {
  const context = useContext(MoviesContext);
  const mostpopular = context.mostpopular.filter((m) => {  // New
    return !("favourite" in m);
  });

  return (
    <PageTemplate
      title="No. Most Popular Movies"
      movies={mostpopular}  /* Changed */
      action={(movie) => {
        return <AddToFavoriteButton movie={movie} />;
      }}
      />
  );
};

export default MostPopularMoviesPage;