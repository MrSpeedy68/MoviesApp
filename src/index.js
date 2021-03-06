import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MostPopularMoviesPage from "./pages/mostPopularMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import WatchlistMoviesPage from './pages/watchlistMoviesPage';
import SimilarMoviesPage from './pages/similarMoviesPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                  <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route exact path="/movies/mostpopular" component={MostPopularMoviesPage} />
                    <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
                    <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
                    <Route exact path="/movies/:id" component={MoviePage} />
                    <Route path="/movies/:id/similar" component={SimilarMoviesPage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>
        </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));