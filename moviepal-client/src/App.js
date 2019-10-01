import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMoviesContainer from './containers/SearchMoviesContainer'
// import Profile from './containers/Profile'
import SignUp from './components/signIn_components/SignUp'
import SignIn from './components/signIn_components/SignIn'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
// import MovieListsContainer from './containers/MovieListsContainer'
import SignUpFormContainer from './containers/SignUpFormContainer'
import CurrentMoviesContainer from './containers/CurrentMoviesContainer';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      logged_in: false,
      user: null
    }
  }

  getLoggedIn = (data) => {
    fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(response => response.json())
    .then(data => {
      debugger
      this.setState({
        logged_in: true,
        user: data.user
      }, () => console.log(this.state))
    })
  }

    render() {
      return (
        <div className="">
          <header className="">
          </header>
          {!!this.state.logged_in ? 
            ( <div>
                <SearchMoviesContainer />
                <Profile user={this.state.user} location={"Seattle"}/>
              </div>
              ) :  
              <SignIn onSignIn={this.getLoggedIn}/>
              }
      
          {/* <SignIn onSignIn={this.getLoggedIn}/> */}

          {/* {/* (<SignUp onSignUp={this.getLoggedIn}/>) } */ }

          {/* <button onClick = {testfunction} >add test data </button> */}
          {/* <Settings /> */}

          {/* <SignUpFormContainer /> */}

          {/* <MovieListsContainer /> */}
          {/* <button onClick={testfunction}>Test out fetch</button> */}
        </div>
      )
    }
  }

export default App;
