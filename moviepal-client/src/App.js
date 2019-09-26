import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Profile from './containers/Profile'
import Settings from './containers/Settings'

function App() {
  return (
    <div className="">
      <header className="">
      </header>
      <Signup />
      <Profile />
      <Settings />
    </div>
  );
}

export default App;
