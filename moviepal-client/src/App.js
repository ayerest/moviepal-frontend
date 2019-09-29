import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// import Profile from './containers/Profile'
// import Signup from './components/SignUp'
import Profile from './containers/Profile'
// import Settings from './containers/Settings'
// import MovieListsContainer from './containers/MovieListsContainer'
// import SignUpFormContainer from './containers/SignUpFormContainer'



function App() {

  // function testfunction () {
  //   fetch("http://localhost3000/genres", {
  //     method: 'POST',
  //     headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: "test name" 
  //     })
  //   })
  // }
    
  return (
    <div className="">
      <header className="">
      </header>
      <SignUp />
      {/* <Profile /> */}
      {/* <Signup /> */}
      <Profile />
      {/* <button onClick = {testfunction} >add test data </button> */}
      {/* <Settings />
      <SignUpFormContainer />
      <MovieListsContainer /> */}
      {/* <button onClick={testfunction}>Test out fetch</button> */}
    </div>
  );
    }

export default App;
