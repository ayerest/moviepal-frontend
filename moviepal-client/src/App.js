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
import CurrentMoviesContainer from './containers/CurrentMoviesContainer';


function App () {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   auth: {
  //   //     user: {}
  //   //   }
  //   // };
  // }

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     console.log("there is no token");
  //   } else {
  //     // make a request to the backend and find our user
  //     api.auth.getCurrentUser().then(user => {
  //       const updatedState = { ...this.state.auth, user: user };
  //       this.setState({ auth: updatedState });
  //     });
  //   }
  // }

  // login = data => {
  //   const updatedState = { ...this.state.auth, user: data };
  //   localStorage.setItem("token", data.jwt);
  //   this.setState({ auth: updatedState });
  // };

  // logout = () => {
  //   localStorage.removeItem("token");
  //   this.setState({ auth: { user: {} } });
  // };

 
        return (
    <div className="">
      <header className="">
      </header>
      {/* <SignUp /> */}
      {/* <Profile /> */}
      {/* <SignIn /> */}

      {/* <SearchMoviesContainer /> */}
      {/* <SearchMoviesContainer /> */}
      {/* <Profile location={"Seattle"}/> */}
      {/* <button onClick = {testfunction} >add test data </button> */}
       <Settings />

      {/* <SignUpFormContainer /> */}

      {/* <MovieListsContainer /> */}
      {/* <button onClick={testfunction}>Test out fetch</button> */}
    </div>
    )
  
}
        

export default App;
