import React, {Component} from 'react'
import List from './List'

class AllMyMoviesContainer extends Component {
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
        .then(movieData => {
            this.renderMovies(movieData)
        })
            
    }

    renderMovies = (movieData) => {

        let myMovies = movieData.filter(movie => {
            if (movie.users.length > 0) {
                // debugger
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

    // var likeId = Like.find(like => {
    //     like.movie_id == Movie.first.id
    // })
    //incorrect method or syntax?

    // handleOnLike = () => {
    //     fetch(`http://localhost:3000/likes${likeId}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.token}`
    //         },
    //         body: JSON.stringify({
    //             like: true
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(likes => console.log(likes))
    // }

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
                    {this.state.allMovies.length > 0 ? <List user={this.props.user} handleChange= {this.handleChange}  search = {this.state.search} allMovies = {this.state.allMovies} handleOnLike = {this.handleOnLike} handleOnDisLike = {this.handleOnDisLike} handleOnToSee = {this.handleOnToSee} /> : null }
                </div>
        )
    }
}

export default AllMyMoviesContainer