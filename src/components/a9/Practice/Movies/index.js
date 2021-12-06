import React, {useEffect, useState} from "react";
import {findAllMovies, createMovie, findMovieById, deleteMovie, updateMovie  } from './service';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() =>
    findAllMovies()
      .then(movies => setMovies(movies)));

    const DeleteMovie = (movie) =>
    deleteMovie(movie._id)
    .then(() => setMovies(
        movies.filter(m => m !== movie)));

    const CreateMovie = () =>
    createMovie({title: 'New Movie'})
        .then(actualMovie =>
        setMovies([
            actualMovie, ...movies
        ]));

    const [movie, setMovie] = useState({title: ''});
    const FindMovieById = (movie) =>
        findMovieById(movie._id)
        .then(movie => setMovie(movie));

    const UpdateMovie = (event) =>
        setMovie({...movie, title: event.target.value});

    const SaveMovie = () =>
        updateMovie(movie)
        .then(() => setMovies(
        movies.map(m => m._id === movie._id ? movie : m)
        ));
    
      
    
    
  return(
    <div>
        <button
            onClick={CreateMovie}
            className="btn btn-success float-end">
            Create
        </button>

        <h2>Movies</h2>
        <ul className="list-group">
        <li className="list-group-item">
            <button
                onClick={SaveMovie}
                className="btn btn-primary float-end">
                Save
            </button>

            <input
                onChange={UpdateMovie}
                defaultValue={movie.title}
                className="form-control"/>
        </li>

        {
          movies.map(movie =>
            <li key={movie._id}
                className="list-group-item">
                <button
                    onClick={() => FindMovieById (movie)}
                    className="btn btn-warning float-end ms-2">
                    Edit
                </button>
                <button
                    className="btn btn-danger float-end"
                    onClick={() => DeleteMovie(movie)}>
                    Delete
                </button>
              {movie.title}
            </li>
          )
        }
      </ul>
    </div>
  )
};

export default Movies;
