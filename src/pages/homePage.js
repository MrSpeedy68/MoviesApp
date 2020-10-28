import React, {useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";

const MovieListPage = () => {
  const [titleFilter, setTitleFilter] = useState("");       // NEW
  const [genreFilter, setGenreFilter] = useState("0");      // NEW

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8b4046823b036ee3111a70918a391640&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(movies => {
        setMovies(movies);
      });
  }, []);

  // NEW BLOCK START
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
    });

  const handleFilterChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setGenreFilter(value);
  };
  // NEW BLOCK END
  return (
    <>
      <Header numMovies={displayedMovies.length} />          {/* CHANGED */}
      <FilterControls onUserInput={handleFilterChange} />    {/* CHANGED */}
      <MovieList movies={displayedMovies} />                  {/* CHANGED */}
    </>
  );
};

export default MovieListPage;