import React, {Component} from 'react'
import List from './List'

class AllMyMoviesContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            allMovies: [],
        }

        fetch("http://localhost:3000/movies", {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(movieData => {
            this.renderMovies(movieData)
        })
            
    }
    renderMovies = (movieData) => {
        let myMovies = movieData.filter(movie => {
            if (movie.users.length > 0) {
            return movie.users.every(movieuser => {
                return movieuser.id === this.props.user.id
            })
            }
        })

        this.setState({
            allMovies: myMovies
        }, ()=>  console.log("after render", this.state.allMovies)
        )
    }


    render() {
        return (
                <div>
                    <h2>All My Movies</h2>
                    {this.state.allMovies.length > 0 ? <List user={this.props.user} handleChange= {this.handleChange}  search = {this.state.search} allMovies = {this.state.allMovies} /> : null }
                </div>
        )
    }
}

export default AllMyMoviesContainer