import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
// import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';

const App = () => {
  // const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          const listOfMovies = response;
          // console.log("Movies", listOfMovies);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);



  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };



  return (
    <div>
      {/* <SavedList list={savedList} /> */}
      <Route path='/movies/1' component={Movie} />
      <Route path='/'>
          <MovieList movies={movieList} />
      </Route>
    </div>
  );
};

export default App;
