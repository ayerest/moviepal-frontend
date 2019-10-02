import React, { Component } from 'react'
import ProfileSettings from '../components/settings_components/ProfileSettings'
import MovieSettings from '../components/settings_components/MovieSettings'


class Settings extends Component {
    
    constructor(props) {
        super(props)
        // debugger
    }
    
    state = {
        //we only have users genres-must hard code all...?
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
            password: "",
            city: this.props.city,
            notifications: this.props.notifications
        }
    }
    
    onGenreSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.genres)
    }

    onGenreChange = (e) => {
        /////wont' change back to false?!?!
        e.persist()
        // console.log("before value: ", e.target.value)
        let updatedValue = e.target.value === true? false : true
        // console.log("updated value: ", updatedValue)
        // console.log("e.target: ", e.target)
        // console.log("e.target.name: ", e.target)
        // console.log(this.state.genres)
        // console.log(this.state.genres[e.target.value])
        this.setState(prevState => ({
            genres: {
                ...prevState.genres, 
                [e.target.name] : updatedValue}
        }))        
    }

    handleAlertToggle(checked){
        this.setState({checked})
    }

    onProfileSubmit = (e) => {
        e.preventDefault();
          console.log("userame", e.target.username.value)
          fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
                },
                body: 
                JSON.stringify({
                    name: e.target.name.value,
                    username: e.target.username.value,
                    password: e.target.password.value,
                    city: e.target.city.value,
                    notifications: e.target.notifications.value
                })
            
            })
            // .then(Promise.resolve((response => response.json())))
            // // .then(data => console.log(data))
            // .catch(err => console.log(err))
    }
    


    render() {
        console.log(this.state.genres)

        return (
            <div>
                Settings
                <MovieSettings onGenreChange = {this.onGenreChange} onGenreSubmit = {this.onGenreSubmit} allGenres= {this.state.genres}/>

                {/* <ProfileSettings /> */}

            </div>
        )
        
    }
}


export default Settings