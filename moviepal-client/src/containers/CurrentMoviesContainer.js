import React, { Component } from 'react'
import MovieDetails from '../components/movieList_components/MovieDetails'
// import MovieListItem from '../components/movieList_components/MovieListItem'

class CurrentMoviesContainer extends Component {
    
    // props: movieSearch, user
    constructor(props) {
        super(props)
        this.state = {
            currentMovies: []
        }

        //the genres should come from the user's preferences - probably stored as a prop
        // passed up from settings component to be stored in state in app and then passed down
        // console.log("are genres here?", this.props)
        // debugger
        let genres = this.props.user.genres.map(genre => genre.name)
        // console.log("user needs genres", genres)
        fetch('http://localhost:3000/tomatoes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                genres: genres,
                user: this.props.user
            })
        }).then(response => response.json())
            .then(data => {
                this.updateCurrentMovies(data)
            })
    }

    updateCurrentMovies = (newCurrentMovies) => {
        // console.log("new current", newCurrentMovies)
        this.setState(prevState => {
            return {currentMovies: newCurrentMovies}
        }, () => console.log("yeah boy"))
    }

    displayCurrentMovies = () => {
        //function to display movie on page
        //need to figure out where this should live though
        if (this.state.currentMovies.length > 0) {
            return this.state.currentMovies.map((movie, index) => {
                return <MovieDetails user={this.props.user} movie={movie} key={index} />
            })
        } else {
            return null
        }
        
    }

    render() {
        return (
            <div>
                <h2 className="current-movies">Current movies</h2>
                {this.displayCurrentMovies()}
            </div>
        )
    }
}

export default CurrentMoviesContainer 