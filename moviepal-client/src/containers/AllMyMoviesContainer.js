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
        }, () =>  console.log("after render", this.state.allMovies)
        )
    }

    
    handleChange = (e) => {
        this.setState({
          search: e.target.value
        })
    }

    handleOnLike = (e) => {
        let movieId= e.target.id
        // console.log("like triggered")
        // console.log("e.target", eventvar.value)
        // console.log("e.target", eventvar)
        // console.log("this.props", this.props)

        // var myMovieId = btn.id
        // var myLike = "test"
        // let likeId = btn.name
        // let movieId = btn.id
        // let field = btn.name
        // let myLike = Like.all.find_by(movie_id === likeId)
        // let myMovie = Movie.all.find_by(movie_id === likeId)
        // debugger

        let myLike = (fetch(`http://localhost:3000/rottens`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                "user_id": this.props.user.id,
                "movie_id": movieId
            })
        }))
        .then(response => response.json())
        .then(returnthis => console.log(returnthis))

        // //then post to that fetch
        // fetch(`http://localhost:3000/likes${likeId}`, {
        // method: 'POST',
        // headers: {
        //     'Authorization': `Bearer ${localStorage.token}`
        // },
        // body: {}
        // })
        // .then(response => response.json())
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