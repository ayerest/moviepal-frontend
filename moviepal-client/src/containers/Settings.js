import React, { Component } from 'react'
import ProfileSettings from '../components/settings_components/ProfileSettings'
import MovieSettings from '../components/settings_components/MovieSettings'
import AlertSettings from '../components/settings_components/AlertSettings'


class Settings extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            genre: []

        }
    }
    
    render() {
        return (
            <div>
                Settings
                

                <MovieSettings />

                {/* <AlertSettings />

                <ProfileSettings /> */}
            </div>
        )
    }
}

export default Settings