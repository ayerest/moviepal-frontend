import React, {Component} from 'react'
import List from './List'
import { isUnaryLike } from '@babel/types'
import PrivacyHOC from '../HOC/PrivacyHOC'


class AllMyMoviesContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allMovies: [],
        }
        this.grabAllMovies()
            
    }

    grabAllMovies = () => {
        fetch("http://localhost:3000/movies", {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(movieData => {
            // debugger
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
        }, () =>  console.log("after render", this.state.allMovies)
        )
    }

    
    handleChange = (e) => {
        this.setState({
          search: e.target.value
        })
    }

    handleOnLike = (e) => {
        // debugger
        let type = e.target.name
        let movieId = e.target.attributes["data-id"].value
        fetch(`http://localhost:3000/rottens`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                "user_id": this.props.user.id,
                "movie_id": movieId,
                "type": type
            })
        })
        .then(response => response.json())
        .then(likeData => {
            // debugger
            console.log(likeData)
            this.grabAllMovies()
        })
    }



    // handleOnDisLike = () =>{
    //     fetch(`http://localhost:3000/likes${likeId}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.token}`
    //         },
    //         body: JSON.stringify({
    //             unlike: true
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(likes => console.log(likes))
    // }
    

    // handleOnToSee = () =>{
    //     fetch(`http://localhost:3000/likes${likeId}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.token}`
    //         },
    //         body: JSON.stringify({
    //             to_see: true
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(likes => console.log(likes))
    // }

    render() {
        return (
                <div>
                    <h2>All My Movies</h2>
                    {this.state.allMovies.length > 0 ? 
                    <List user={this.props.user} handleChange= {this.handleChange}  
                    search = {this.state.search} 
                    allMovies = {this.state.allMovies} 
                    handleOnLike = {this.handleOnLike} 
                    // handleOnDisLike = {this.handleOnDisLike} 
                    // handleOnToSee = {this.handleOnToSee} 
                    /> : null }

                    {/* {this.state.allMovies.length > 0 ? <List user={this.props.user} handleChange= {this.handleChange}  search = {this.state.search} allMovies = {this.state.allMovies} handleOnLike = {this.handleOnLike} handleOnUnLike = {this.handleOnUnLike} handleOnToWatch = {this.handleOnToWatch} /> : null } */}
                </div>
        )
    }
}

export default PrivacyHOC(AllMyMoviesContainer)