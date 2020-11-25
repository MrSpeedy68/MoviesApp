import React, { useContext } from "react";
import AddToWatchListButton from '../components/buttons/addWatchList';
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

const UpcomingMoviesPage = props => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="No. Upcoming Movies"
      movies={upcoming}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
      />
  );
};

export default UpcomingMoviesPage;