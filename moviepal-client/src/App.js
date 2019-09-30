import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMoviesContainer from './containers/SearchMoviesContainer'
// import Profile from './containers/Profile'
import SignUp from './components/signIn_components/SignUp'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
// import MovieListsContainer from './containers/MovieListsContainer'
import SignUpFormContainer from './containers/SignUpFormContainer'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      auth: {
        user: {}
      }
    }
  }

  

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

    render() {
        return (
    <div className="">
      <header className="">
      </header>
      <SignUp />
      {/* <Profile /> */}
      {/* <SignIn /> */}

      {/* <SearchMoviesContainer /> */}
      {/* <button onClick = {testfunction} >add test data </button> */}
       {/* <Settings /> */}

      {/* <SignUpFormContainer /> */}

      {/* <MovieListsContainer /> */}
      {/* <button onClick={testfunction}>Test out fetch</button> */}
    </div>
    )}
  }

export default App;
