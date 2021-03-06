import React, { Component } from 'react'
import Trailer from './Trailer'


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trailer: null
        }
    }

    showTrailer = (e) => {
        let button = e.target
        if (button.innerText === "Watch Trailer") {
            let trailer = e.target.value
        
            this.setState(prevState => {
                return {trailer: trailer}
            }, () => { button.innerText = "Hide Trailer"})
        } else {
            this.setState(prevState => {
                return { trailer: null }
            }, () => { button.innerText = "Watch Trailer" })
        }
    }
    
    // onLike = (e) => {
    //     let movie = this.props.movie
    //     let btn = e.target
    //     this.props.handleOnLike(btn)
    // }

    render() {
        let { title, summary, rating, poster_img, runtime, stars, trailer_url, showtimes, genres, likes, id } = this.props.movie
        // debugger
        // if (!!likes && likes.length > 0) {
        //     likes = likes.filter(like => {
        //         return like.user_id === this.props.user.id
        //     })
        // }

        console.log("what likes I got", likes)

        return (

            <div class = "container">
            <div class = "column">
            <div class = "row-sm">
            <div className="ui-card">
                <h2>Title: {title}</h2>
                <img alt="poster for movie" src={poster_img}></img>
                {!!genres && genres.length > 0 ?
                <p>{genres.join(", ")}</p> : null
                }
                {/* <button onClick={this.showTrailer} value={trailer_url}>Watch Trailer</button>

                {!!this.state.trailer ? 
                <Trailer trailer={this.state.trailer}></Trailer> : null } */}

                {/* <button name = "like" 
                id = {id} 
                onClick = {this.props.handleOnLike}
                // (this.props.user.id, this.props.movie.id)

                > ❤️</button> */}

                {/* <button name = "unlike" id = {id} onClick = {this.props.handleOnUnLike(this.props.user.id, this.props.movie.id)}> naw </button>

                <button name = "to-watch" id = {id} onClick= {this.props.handleOnToWatch(this.props.user.id, this.props.movie.id)}> ?! </button> */}

                
                <button onClick={this.showTrailer} value={trailer_url}>Watch Trailer</button>
                {!!this.state.trailer ? <Trailer trailer={this.state.trailer}></Trailer> : null }
                {this.props.fromCurrent ? null : 
                    <div>
                        <button data-id={id} name="like" onClick = {this.props.handleOnLike}> ❤️</button>
                        <button data-id={id} name="unlike" onClick = {this.props.handleOnLike}> 💩 </button>
                        <button data-id={id} name="to-watch" onClick= {this.props.handleOnLike}> 🎬 </button>
                    </div>
                }

            
            


                <p>Summary: {summary}</p>
                <ul>
                    <li>Rating: {rating}</li>
                    <li>Runtime: {runtime}</li>
                    <li>Starring: {stars}</li>                    
                </ul>
                <p><a rel="noopener noreferrer" target="_blank" href={showtimes}>Click for Showtimes</a></p>
            </div>
            </div>
             </div>
             </div>
        )
    }
}

export default MovieDetails