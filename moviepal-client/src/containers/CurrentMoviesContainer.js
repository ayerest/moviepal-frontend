import React, { Component } from 'react'
import MovieDetails from '../components/movieList_components/MovieDetails'
// import MovieListItem from '../components/movieList_components/MovieListItem'

class CurrentMoviesContainer extends Component {
    
    // props: movieSearch, user
    constructor(props) {
        super(props)
        this.state = {
            currentMovies: [],
            randGenres: null
        }
        let genres = this.props.user.genres.map(genre => genre.name)

        this.grabMoviesFromIMDB(genres)
        
    }

    grabMoviesFromIMDB = (genres) => {
        //the genres should come from the user's preferences - probably stored as a prop
        // passed up from settings component to be stored in state in app and then passed down
        // console.log("are genres here?", this.props)
        // debugger
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

    turnOnTwilio = () => {
        fetch('http://localhost:3000/notifications', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                movies: this.state.currentMovies,
                user: this.props.user
            })
        }).then(response => response.json())
        .then(data => {
            console.log("fetch notifications", data)
        })
    }

    updateCurrentMovies = (newCurrentMovies) => {
        // console.log("new current", newCurrentMovies)
        this.setState(prevState => {
            return {currentMovies: newCurrentMovies}
        }, () => console.log("yeah boy"))
    }

    displayCurrentMovies = () => {
        
        if (this.state.currentMovies.length > 0) {
            return this.state.currentMovies.map((movie, index) => {
                return <MovieDetails user={this.props.user} movie={movie} key={index} fromCurrent={true} handleOnLike={this.props.handleOnLike} />
            })
        } else {
            return null
        }
            
   
            
}

    feelingLucky = () => {
        let allgenres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", "Sport", "Superhero", "Thriller", "War", "Western"]
        let randomGenres =  []
        randomGenres.push(allgenres[Math.floor(Math.random() * allgenres.length)])
        randomGenres.push(allgenres[Math.floor(Math.random() * allgenres.length)])
        randomGenres.push(allgenres[Math.floor(Math.random() * allgenres.length)])
        randomGenres.push(allgenres[Math.floor(Math.random() * allgenres.length)])
        let uniqGenres = randomGenres.filter((item, index) => {
            return randomGenres.indexOf(item) === index
        })

        console.log(uniqGenres)
        // debugger
        this.setState(prevState => {
            return {randGenres: uniqGenres}
        })
        this.grabMoviesFromIMDB(uniqGenres)
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.turnOnTwilio}>Send Notification</button> */}
                <button type = "button" class = "btn btn-outline-primary" onClick={this.feelingLucky}>Feeling Lucky...</button>
                <h2 className="current-movies">Current movies</h2>
                <p>Genres: {!!this.state.randGenres ? this.state.randGenres.join(", ") : 
                this.props.user.genres.map(genre => genre.name).join(", ")} </p>
                <br></br>
                {this.displayCurrentMovies()}
            </div>
        )
    }
}

export default CurrentMoviesContainer 