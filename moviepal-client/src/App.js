import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/SignUp'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
import MovieListsContainer from './containers/MovieListsContainer'
import SignUpFormContainer from './containers/SignUpFormContainer'


function App() {
  return (
    <div className="">
      <header className="">
      </header>
      <Signup />
      <Profile />
      <Settings />
      <SignUpFormContainer />
      <MovieListsContainer />
    </div>
  );
}

export default App;
