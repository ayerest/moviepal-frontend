import React, { Component } from 'react'
// import MovieDetails from './MovieDetails'

class Trailer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // debugger
        return (
            <div className="ui card">
                <iframe src={this.props.trailer} allowFullScreen width="854" height="400"></iframe>
            </div>
        )
    }

}

export default Trailer