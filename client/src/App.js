import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log('Movies', response)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
      <div>
        <SavedList list={savedList} />
        <Switch>
          {/* <Route path='/movies/:id'><Movie /></Route> */}
          <Route path='/movies/:id' render={() => <Movie />} />
          <Route path='/' render={() => <MovieList movies={movieList}/>} />
        </Switch>
      </div>
    );
};

export default App;


// Link is what changes the URL in our browser, Route is what reads the URL from our browser.
// Route is basically an 'if statement'. If we are at a '/' URL then I want to render the component {Home}
// <Link> gets clicked and read --> <Route> delivers what's been read
// Link and Route are together, but separate. Kind of like a long distance relationship. They might not be in the same physical spot, but they're maintain constant and close communication
//<Route path='/' component={Home}

//Pizza Delivery:
// Customer calls and places order
// CSR puts order into system
// Cook makes the order
// Delivery driver delivers order

// User clicks a link (Placing an order)
// <Link> gets activated (Order is called in and placed)
// React? reads to='/' (React cookery magic)
// <Route> delivers component assigned to '/' (Delivery driver)

// <Route path='/' component={Home} /> Is not able to pass props
// <Route path='/' render={() => <HomeComponent appliance={appliance}} /> Is able to pass props