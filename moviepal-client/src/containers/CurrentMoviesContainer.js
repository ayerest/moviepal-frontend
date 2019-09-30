import React, { Component } from 'react'
import Movie from '../components/movieList_components/Movie'

class CurrentMoviesContainer extends Component {
    
    // props: movieSearch, user
    constructor() {
        super()
        this.state = {
            currentMovies: []
        }
        //the genres should come from the user's preferences - probably stored as a prop
        // passed up from settings component to be stored in state in app and then passed down

        fetch('http://localhost:3000/tomatoes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                genres: ["Horror", "Action"]
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

            return this.state.currentMovies.map((movie, index) => {
                return <Movie movie={movie} key={index} />
            })
        
    }

    render() {
        return (
            <div>
                <p>Current movies</p>
                {this.displayCurrentMovies()}
            </div>
        )
    }
}

export default CurrentMoviesContainer 