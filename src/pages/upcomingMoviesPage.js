import React, { useContext } from "react";
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import PageTemplate from "../components/templateMovieListPage";
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'

const UpcomingMoviesPage = props => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
      />
  );
};

export default UpcomingMoviesPage;