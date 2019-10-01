import React, {Component} from 'react'
import List from './List'

class SearchMoviesContainer extends Component {


    constructor (props) {
        super(props)
        this.state = {
            allMovies: [],
            search: ""
        }

        fetch("http://localhost:3000/movies", {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(movieData => this.renderMovies(movieData))
        // .then(movieData => console.log(movieData))

    }
    renderMovies = (movieData) => {
        console.log(movieData)
        debugger

        let myMovies = movieData.filter(movie => {
            if (movie.users.length > 0) {
            return movie.users.every(user => {
                return user.id === this.props.user.id
            })
            }
        })

        this.setState({
            allMovies: myMovies
        }, ()=>  console.log("after render", this.state.allMovies)
        )
    }

    handleChange = (e) => {
        this.setState({
          search: e.target.value
        })
  
      }

    render() {
        return (
                <div>
                    <h2>{this.state.movieData}</h2>

                    <List user={this.props.user} handleChange= {this.handleChange}  search = {this.state.search} allMovies = {this.state.allMovies} />
                </div>
        )
    }
}

export default SearchMoviesContainer