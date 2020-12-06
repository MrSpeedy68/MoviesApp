import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import MovieProviders from "../components/movieProviders";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
<<<<<<< HEAD

        <div className="row">
          <div className="col-4">
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/similar`}
                >
                  Similar Movies
                </Link>
          </div>
        </div>

        <MovieProviders movie={movie}> </MovieProviders>

        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th><MovieCast movie={movie} /></th>
              <th><MovieCrew movie={movie} /></th>
            </tr>
          </thead>
        </table>


        
=======
>>>>>>> parent of 9af00b5... Added Movie Cast and Movie Crew on the movie details page
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);