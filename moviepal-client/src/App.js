import React, {Component} from 'react';
import './App.css';
import AllMyMoviesContainer from './containers/AllMyMoviesContainer'
import Settings from './containers/Settings'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './containers/NavBar.js'
import Home from './containers/Home'
import Toggle from 'react-bootstrap-toggle'
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor() {
    super()
    this.state = {
      logged_in: false,
      user: null
    }
  }

  getLoggedIn = (data, wherefrom) => {
    fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(response => response.json())
    .then(data => {
      this.setState(prevState => {
        return {logged_in: true,
        user: data.user}
      })
    })
  }

  getUser = () => {
    fetch(`http://localhost:3000/users/${this.state.user.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState(prevState => {
        return {
          logged_in: true,
          user: data
        }
      })
    })
  }

  logOut = () => {
    localStorage.removeItem("token")
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null
      }
    })
  }

    render() {
      return (

        <Router>
          <NavBar user={this.state.user} loggedIn={this.state.logged_in} onLogOut={this.logOut}/>
          <div>
            <Route path = '/home' render = { props => <Home {...props} logged_in =   {this.state.logged_in} user = {this.state.user} getLoggedIn= {this.getLoggedIn} /> } />
            <Route exact path = '/settings' render = { props => <Settings {...props} logged_in =   {this.state.logged_in} user = {this.state.user} onChange={this.getUser}/> } />
            <Route exact path = '/mymovies' render = { props => <AllMyMoviesContainer {...props} logged_in =   {this.state.logged_in} user = {this.state.user}/> } />
          </div>
        </Router>
      )
    }
  }

export default App;
