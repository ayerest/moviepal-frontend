import React, { Component } from 'react'
import Map from '../components/profile_components/Map'
import CurrentMoviesContainer from './CurrentMoviesContainer'


class Profile extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div>
                profile
                <CurrentMoviesContainer />
                {/* <Map location="Seattle"/> */}
            </div>
        )
    }
}

export default Profile