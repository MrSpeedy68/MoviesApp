import React, { useContext } from "react";
import {UpcomingMoviesContext} from "../../contexts/upcomingMoviesContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(UpcomingMoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton;