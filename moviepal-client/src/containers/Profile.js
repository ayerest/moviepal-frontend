import React, { Component } from 'react'
import MapContainer from '../components/MapContainer'
import CurrentMoviesContainer from './CurrentMoviesContainer'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        
            let city = this.props.user.city
            fetch('http://localhost:3000/maps', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${localStorage.token}`

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
                    console.log("error after generating map based on city", error)
                })
            }

    getTheaters = (centerPointHash) => {
        fetch('http://localhost:3000/markers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${localStorage.token}`
                },
            body: JSON.stringify({
                latLong: centerPointHash
            })
            }).then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                return { theaters: data }
            }, () => console.log("after getting theaters", this.state.theaters))
        }).catch(error => {
            console.log("error from theaters", error)
        })
        }



        
    render() {
        return (
            <div className="flex">
                <div className="movies">
                <CurrentMoviesContainer user={this.props.user}/>
                </div>
                <div>
                <MapContainer user={this.props.user} theaters={this.state.theaters} center={this.state.center}/>
                </div>
            </div>
        )
    }
}

export default Profile