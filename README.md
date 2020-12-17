# Assignment 1 - ReactJS app.

Name: Adrian Hebel

## Features

+ Feature 1 - Most Popular movies view which displays the most popular movies in a new page
+ Feature 2 - Now playing movies view which displays movies that are playing in cinemas now in a new page
+ Feature 3 - Top Rated movies view which display movies that are most rated in a new page
+ Feature 4 - Watchlist which is used to add upcoming movies into and reviews can be written from this page
+ Feature 5 - Similar movies page which is accessed inside of a movies details page and displays movies that are similar to that specific movie
+ Feature 6 - Movie Details page includes Movie Budget, amount spent on the movie and Movie Status, if it was released or not.
+ Feature 7 - Movie Providers. Addition to movie details showing where the movie can be purchased in Ireland if it is available in Ireland and an additional link to the tmdb website to purchase those movies in Ireland.
+ Feature 8 - Movie Crew and Cast. Addition to movie details showing the cast and crew that worked on the movie under movie providers.

## Setup requirement

Clean the repositry and make sure Node.js is installed using 'npm install' then run the program using 'npm start'

## API Data Model.

+ https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get a list of the most popular movies
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get a list of the top rated movies
+ https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get a list of the movies now playing in the cinemas
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - Gets detailed information about the specific movies cast and crew
+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get a list of similar movies from a certain movie
+ https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY} - Get a list of movie providers of where to buy and rent a specific movie
+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres

### UI Design.
![Image of most popular](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/mostpopular.jpg?raw=true)

(Most Popular) The Most popular page shows a list of Most Popular movies.


![Image of now playing](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/nowplaying.jpg?raw=true)

(Now Playing) The Now Playing page shows a list with movies that are playing in the cinemas now


![Image of top rated](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/toprated.jpg?raw=true)

(Top Rated) The Top Rated page shows a list with movies that are highest rated


![Image Similar](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/similarmovies.jpg?raw=true)

(Similar Movies) The Similar Movies page shows a list of movies similar to the current movie


![Image of favourite page](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/favouritepage.jpg?raw=true)

(Favourite Page) The Favourite page shows all the movies that have been added to the favourites


![Image of watch list](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/watchlistpage.jpg?raw=true)

(Watch list page) Every movie from upcoming that is added to the watch list is displayed here. Works just like the favourites page but a review can be written right away from here.


From the watch list page reviews can be written after pressing the button to write review

![Image of review](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/writereview.jpg?raw=true)


![Image of movie details](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/detailspage.jpg?raw=true)

Created More movie details in the details page. Added Movie Budget which displays the amount spent on the movie and Movie Status if 
the movie was released or not.


![Image Providers](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/buymovie.jpg?raw=true)

In the movie details it will display where the movie can be purchased if its available in Ireland with a link to the tmdb website for the available places to purchase. If the movie is unavailable in Ireland no info will be displayed.


## Routing.

+ /movies/:id/similar (public) - displays similar movies of a specific movie
+ /movies/toprated (public) - displays top rated movies of all time
+ /movies/nowplaying (public) - displays movies playing in cinemas now
+ /movies/mostpopular (public) - displays most popular movies right now
+ /movies/upcoming (public) - displays upcoming movies to be released
+ /movies/watchlist (private) - displays the watchlist of movies from the upcoming list


### Data hyperlinking.

Added Data hyperlinking in the movies details page with a link to where to buy the movie on the tmdb website.

![Image Providers](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/buymovie.jpg?raw=true)

The details page displays where the movie can be bought in Ireland with a link to the tmdb website to purchase that movie

![Image hyperlink](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/buylink.jpg?raw=true)

TMDB website to purchase the movie with more details about the movie.

![Image Similar](https://github.com/MrSpeedy68/MoviesApp/blob/main/images/similarmovies.jpg?raw=true)

Clicking on the similar movies button it will bring you to the similar movies page.
