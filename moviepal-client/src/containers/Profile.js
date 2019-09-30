import React, { Component } from 'react'
import MapContainer from '../components/MapContainer'
import CurrentMoviesContainer from './CurrentMoviesContainer'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api: "",
            center: null,
            theaters: null
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
            console.log("is this the city", city)
            fetch('http://localhost:3000/maps', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    city: city
                })
            }).then(response => response.json())
                .then(centerPointHash => {
                    this.setState(prevState => {
                        return { center: centerPointHash }
                    }, () => this.getTheaters(centerPointHash))
                }).catch(error => {
                    console.log(error)
                })
            }

    getTheaters = (centerPointHash) => {
        // debugger
        fetch('http://localhost:3000/markers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify({
                latLong: centerPointHash
            })
            }).then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                return { theaters: data }
            }, () => console.log("testing", this.state.theaters))
        }).catch(error => {
            console.log(error)
        })
        }



        
    render() {
        return (
            <div>
                profile
                <CurrentMoviesContainer />
                <MapContainer theaters={this.state.theaters} center={this.state.center}/>
            </div>
        )
    }
}

export default Profile