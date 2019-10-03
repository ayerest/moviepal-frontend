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
        e.preventDefault()
        console.log(this.state.genres)
    }

    onGenreChange = (e) => {
        e.persist()
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

    handleAlertToggle = (e)=> {
        console.log("alert status before toggle", e.target.value)
        this.setState({
            notifications: !e.target.checked
        })
        console.log("this.state.notifications", this.props.notifications)
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
                {/* <MovieSettings onGenreChange = {this.onGenreChange} onGenreSubmit = {this.onGenreSubmit} allGenres= {this.state.genres}/> */}

                <ProfileSettings onSubmitProfile= {this.onSubmitProfile} handleAlertToggle= {this.handleAlertToggle}
                handleChange = {this.handleChange} user= {this.props.user}/>

            </div>
        )
        
    }
}


export default PrivacyHOC(Settings)