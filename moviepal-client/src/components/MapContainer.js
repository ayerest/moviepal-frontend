import React, { Component } from 'react'
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'
// import GoogleMapReact from 'google-map-react'
// import {GoogleMap, LoadScript} from 'react-google-maps'

const mapStyles = {
    width: '60vw',
    height: '90vh'
}

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            infoWindowContent: {}
        }
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    onMarkerClick = (props, marker, e) => {
        fetch('http://localhost:3000/theaters', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${localStorage.token}`
            }, body: JSON.stringify({
                place_id: props.id

            })
        }).then(response => response.json())
        .then(data => {
            this.setState({
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: true,
                infoWindowContent: data
            },()=> console.log("marker clicked", this.state));
        })
    }
    displayMarkers = () => {
        // debugger
        if (!!this.props.theaters) {
            return this.props.theaters.map((theater, index) => {
                let lat = theater.latlong["lat"]
                let lng = theater.latlong["lng"]
                return <Marker icon={{ url: theater.icon, scaledSize: { width: 40, height: 40 }}} name={theater.name} key={index} id={theater.id} position={{lat: lat, lng: lng }}
                onClick={this.onMarkerClick}
             />
            })
        }
    }
    
    render() {
        return (
            <div>
                {!!this.props.center ? 
                    (<div>
                        <h3>Theaters Near Me</h3>
                        <Map google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={this.props.center.latlong}
                        onClick={this.onMapClick}>
                        {this.displayMarkers()}
                        <InfoWindow
                            marker = { this.state.activeMarker }
                            visible = { this.state.showingInfoWindow }>
                            <div>
                                <a href={this.state.infoWindowContent.url}>{this.state.infoWindowContent.name}</a>
                                <p>{this.state.infoWindowContent.addy}</p>
                            </div>
                        </InfoWindow>
                     </Map>
                    </div>) : null
                }
                
                {/* <GoogleMapReact
                    bootstrapURLKeys={{key: this.props.api}}
                    defaultCenter={this.state.center.latlong}
                    defaultZoom={9}>

                </GoogleMapReact> */}
            </div>

        )
    }
}
// let PROMISED = async () => { 
//     let fetched = await fetch("http://localhost:3000/maps")
//     let jsoned = await fetched.json()
//     return jsoned.api_key
// }
// let RESOLVED = PROMISED()


export default GoogleApiWrapper({
    apiKey: ""
})(MapContainer)


