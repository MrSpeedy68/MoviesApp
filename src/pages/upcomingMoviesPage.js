import React, { useContext } from "react";
import AddToWatchListButton from '../components/buttons/addWatchList';
import PageTemplate from "../components/templateMovieListPage";
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'

const UpcomingMoviesPage = props => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
      />
  );
};

export default UpcomingMoviesPage;