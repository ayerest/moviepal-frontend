import React, { Component } from 'react'
import Map from '../components/profile_components/Map'
import ToWatchContainer from './ToWatchContainer'


class Profile extends Component {
    constructor() {
        super()
        
    }
    render() {
        return (
            <div>
                Profile
                <ToWatchContainer />
                <Map />
            </div>
        )
    }
}

export default Profile