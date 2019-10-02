import React, { Component } from 'react'


class MovieSettings extends Component {
    constructor(props) {
        super(props)
    }

    displayGenres () {
        return(
        Object.keys(this.props.allGenres).map(genre => {
            return(       
                <div>
            <label id = {genre}>
            {genre}</label>
            <input type = "checkbox" name = {genre} onChange = {this.props.onGenreChange}
            />
            </div>
            )
        }
        ))
    }

    render() {
        return (
            <form onSubmit = {this.props.onGenreSubmit}>
                {this.displayGenres()}
            <input type= "submit" value = "Save genre preferences" />
            </form>
        )
    }
}

export default MovieSettings