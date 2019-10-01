import React, { Component } from 'react'
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'
// import GoogleMapReact from 'google-map-react'
// import {GoogleMap, LoadScript} from 'react-google-maps'

const mapStyles = {
    width: '95vw',
    height: '50vh'
}

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        // should have the user city passed down as a prop
    }

    handleMarkerClick = (e, marker) => {
        console.log("event", e)
        console.log(marker)
        // debugger
        this.setState({
            selectedPlace: "test",
            activeMarker: marker,
            showingInfoWindow: true
        },()=> console.log("marker click", this.state));
    }
    displayMarkers = () => {
        if (!!this.props.theaters) {
            return this.props.theaters.map((theater, index) => {
                let lat = theater.latlong["lat"]
                let lng = theater.latlong["lng"]
                // console.log(lat, lng)
                return <Marker icon={{ url: theater.icon, scaledSize: { width: 40, height: 40 }}} name={theater.name} key={index} id={index} position={{lat: lat, lng: lng }}
                onClick={this.handleMarkerClick}
             />
            })
        }
    }
    
    render() {
        // debugger
        return (
            <div>
                {!!this.props.center ? 
                    (<div>
                        <Map google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={this.props.center.latlong}>
                     {this.displayMarkers()}
                        <InfoWindow
                            marker = { this.state.activeMarker }
                            visible = { this.state.showingInfoWindow }
                        ></InfoWindow>
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
// console.log(RESOLVED)


export default GoogleApiWrapper({
    apiKey: ""
})(MapContainer)


