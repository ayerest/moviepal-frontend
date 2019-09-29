import React, { Component } from 'react'


class Map extends Component {
    constructor(props) {
        super(props)
        // should have the user city passed down as a prop
        this.getApiKey()
    }


    getApiKey = async () => {
        let myFunc = await fetch("http://localhost:3000/maps")
            .then(response => response.json())
            .then(json => {
                let mapScript = document.getElementById("make-map")
                mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${json.api_key}`
                console.log(json)
            })
    }

    componentDidMount() {
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
            this.displayMap(centerPointHash)
        }).catch(error => {
            console.log(error)
        })
    }

    displayMap = (centerPointHash) => {
        console.log(centerPointHash)
        // debugger
        // let map = new google.maps.Map(document.getElementById('map'), {
        //     center: centerPointHash.latlong,
        //     zoom: 9
        // })  
    }

    render() {
        return (
            <div id="map">
                Map component
            </div>
        )
    }
}

export default Map