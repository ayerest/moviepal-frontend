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
        // debugger
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        // should have the user city passed down as a prop
    }
    
    render() {
        // debugger
        return (
            <div>
                {/* <Map google={this.props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={this.props.center.latlong}
                /> */}
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


export default GoogleApiWrapper(({
    apiKey: ""
}))(MapContainer)


