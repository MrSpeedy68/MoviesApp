import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getMostPopular, getTopRated, getNowPlaying } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        mostpopular: state.mostpopular.map((p) =>
         p.id === action.payload.movie.id ? { ...p, favourite: true } : p
        ),
        nowplaying: state.nowplaying.map((n) =>
         n.id === action.payload.movie.id ? { ...n, favourite: true } : n
        ),
        toprated: state.toprated.map((t) =>
         t.id === action.payload.movie.id ? { ...t, favourite: true } : t
        ),

        upcoming: [...state.upcoming],
      };
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true} : m
          ),
          movies: [...state.movies],
          mostpopular: [...state.mostpopular],
          toprated: [...state.toprated],
          nowplaying: [...state.nowplaying]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], mostpopular: [...state.mostpopular],
         toprated: [...state.toprated], nowplaying: [...state.nowplaying] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], mostpopular: [...state.mostpopular],
         toprated: [...state.toprated], nowplaying: [...state.nowplaying] };
    case "load-mostpopular":
      return { mostpopular: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies],
         toprated: [...state.toprated], nowplaying: [...state.nowplaying] };
    case "load-toprated":
      return { toprated: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies],
         mostpopular: [...state.mostpopular], nowplaying: [...state.nowplaying] };
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies],
         mostpopular: [...state.mostpopular], toprated: [...state.toprated] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        mostpopular: [...state.mostpopular],
        toprated: [...state.toprated],
        nowplaying: [...state.nowplaying],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],
     mostpopular: [], toprated: [], nowplaying: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index], mostpopular: state.mostpopular[index],
       toprated: state.toprated[index], nowplaying: state.nowplaying[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMostPopular().then((movies) => {
      dispatch({ type: "load-mostpopular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlaying().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        mostpopular: state.mostpopular,
        toprated: state.toprated,
        nowplaying: state.nowplaying,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;