import React, { Component } from 'react'


class MovieSettings extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            genres: {
                action: false, adventure: false, animation: false, biography: false, comedy: false,
                crime: false, documentary: false, drama: false, family: false, fantasy: false,
                filmNoir: false, history: false, horror: false, music: false, musical: false,
                mystery: false, romance: false, sciFi: false, short: false, sport: false,
                superhero: false, thriller: false, war: false, western: false
            }
        }
    }
  
    
    render() {
        const genres = ["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","History","Horror","Music","Musical","Mystery","Romance","Sci-Fi","Short","Sport","Superhero","Thriller","War","Western"]
        return (
                genres.map((genre, i) => {
                    return (
                        // <Label>Pick Your Favorite Genres</Label>
                        <label key = {i}>
                        {genre}
                        <input type = "checkbox" name = {genre} onChange = {this.onGenreChange.bind(this)}
                        value= {this.state.genres[genre]}/>
                        </label>
                    )
                })
                
        )
    }
}

export default MovieSettings