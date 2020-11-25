export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8b4046823b036ee3111a70918a391640&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8b4046823b036ee3111a70918a391640`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8b4046823b036ee3111a70918a391640&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=8b4046823b036ee3111a70918a391640`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=8b4046823b036ee3111a70918a391640&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };