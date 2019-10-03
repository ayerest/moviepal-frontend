import React, { Component } from 'react'
import MovieSettings from '../components/settings_components/MovieSettings'
import PrivacyHOC from '../HOC/PrivacyHOC'

import ProfileSettings from '../components/settings_components/ProfileSettings'


class Settings extends Component {
    
    constructor(props) {
        super(props)
        // debugger
    }
    
    state = {
        genres: {
            action: false, adventure: false, animation: false, biography: false, comedy: false,
            crime: false, documentary: false, drama: false, family: false, fantasy: false,
            filmNoir: false, history: false, horror: false, music: false, musical: false,
            mystery: false, romance: false, sciFi: false, short: false, sport: false,
            superhero: false, thriller: false, war: false, western: false
        },

        profile: {
            name: this.props.name,
            username: this.props.username,
            city: this.props.city,
            notifications: this.props.notifications
        },

        editBoxes: {
            nameChange: "",
            cityChange: ""
        }
    }
    
    onGenreSubmit = (e) => {
        debugger
        // e.preventDefault()

        // console.log(this.state.genres)
        // fetch(`http://localhost:3000/users/${this.props.user.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'Authorization': `Bearer ${localStorage.token}`
        //     },
        //     body: 
        //     JSON.stringify({
        //         genre_id: e.target.name.value,
        //         city: e.target.city.value,
        //         notifications: this.state.notifications
        //     })
        
        // }).then(response => response.json())
        // .then(data => {
        //     debugger
        //     console.log(data)
        // })
}

    onGenreChange = (e) => {

        e.preventDefault()
        let genre = e.target.name
        let status = e.target.value
        // debugger
        // console.log(this.state.genres)
        fetch(`http://localhost:3000/genrepreferences`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body:
                JSON.stringify({
                    genre: genre,
                    status: status,
                    user: `${this.props.user.id}`
                })

        }).then(response => response.json())
            .then(data => {
                // debugger
                this.props.getUser(data)
            })

        // e.persist()
        console.log("before value: ", e.target.value)
        let updatedValue = e.target.value === true? false : true
        console.log("updated value: ", updatedValue)
        // console.log("e.target: ", e.target)
        // console.log("e.target.name: ", e.target)
        // console.log(this.state.genres)
        // console.log(this.state.genres[e.target.value])
        // this.setState(prevState => ({
        //     genres: {
        //         ...prevState.genres, 
        //         [e.target.name] : updatedValue}
        // }))        
    }

    handleEditToggle = (e)=> {
        console.log("alert status before toggle", e.target.value)
        this.setState({
            notifications: !e.target.value
        })
        console.log("this.state.notifications", this.props.notifications)
        this.onGenreChange()
    }

    onSubmitProfile = (e) => {
        e.preventDefault();
          fetch(`http://localhost:3000/users/${this.props.user.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
                },
                body: 
                JSON.stringify({
                    name: e.target.name.value,
                    city: e.target.city.value,
                    notifications: this.state.notifications
                })
            
            })
    }
    


    render() {
        // console.log(this.state.genres)

        return (
            <div>
                Settings
                <MovieSettings  onGenreSubmit = {this.onGenreSubmit} onGenreChange = {this.onGenreChange} allGenres= {this.state.genres} user = {this.props.user} />

                <ProfileSettings onSubmitProfile= {this.onSubmitProfile} handleEditToggle= {this.handleEditToggle}
                handleChange = {this.handleChange} user= {this.props.user}/>

            </div>
        )
        
    }
}


export default PrivacyHOC(Settings)