import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import useSimilarMovies from '../hooks/useSimilarMovie';

const SimilarMoviesPage = (props) => {
    const { id } = props.match.params;
  const similarMovies = useSimilarMovies(id)[0]


  return (
    <PageTemplate
      title="No. Similar Movies"
      movies={similarMovies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default SimilarMoviesPage;