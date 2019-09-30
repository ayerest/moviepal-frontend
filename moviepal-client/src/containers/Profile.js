import React, { Component } from 'react'
import MapContainer from '../components/profile_components/MapContainer'
import CurrentMoviesContainer from './CurrentMoviesContainer'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api: "",
            center: null
        }
        // fetch("http://localhost:3000/maps")
        // .then(response => response.json())
        // .then(json => {
        //     // let mapScript = document.getElementById("make-map")
        //     // mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${json.api_key}`
        //     this.setState({
        //         api: json.api_key
        //     })
        // })

            let city = this.props.location
            fetch('http://localhost:3000/maps', {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({
                    city: city
                })
            }).then(response => response.json())
                .then(centerPointHash => {
                    this.setState(prevState => {
                        return { center: centerPointHash }
                    }, () => console.log("testing", this.state.center))
                }).catch(error => {
                    console.log(error)
                })
    }   
    
    render() {
        return (
            <div>
                profile
                <CurrentMoviesContainer />
                <MapContainer center={this.state.center}/>
            </div>
        )
    }
}

export default Profile