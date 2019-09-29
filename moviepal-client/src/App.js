import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// import Profile from './containers/Profile'
// import Settings from './containers/Settings'
// import MovieListsContainer from './containers/MovieListsContainer'
// import SignUpFormContainer from './containers/SignUpFormContainer'



function App() {

//   async function testfunction() {
//     await fetch("http://localhost3000/genres", {
//     method: 'POST',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: "test name", 
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
// }
  return (
    <div className="">
      <header className="">
      </header>
      <SignUp />
      {/* <Profile /> */}
      {/* <Settings />
      <SignUpFormContainer />
      <MovieListsContainer /> */}
      {/* <button onClick={testfunction}>Test out fetch</button> */}
    </div>
  );



}

export default App;
