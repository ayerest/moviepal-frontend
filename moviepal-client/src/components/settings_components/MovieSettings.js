import React, { Component } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class MovieSettings extends Component {
    constructor(props) {
        super(props)
    }

    displayGenres () {
        return(
  <Row>{
        Object.keys(this.props.allGenres).map(genre => {
            return( 
                <Col xs="12" sm ="4">   
            <label id = {genre}>
            {genre}</label>
            <input type = "checkbox" name = {genre} onChange = {this.props.onGenreChange}
            />
            </Col> 
            )
        })
    }</Row>
    
 
        )
    }

    render() {
        return (
            <form onSubmit = {this.props.onGenreSubmit}>
                {this.displayGenres()}
                {/* <div class = "btn-group-toggle" data-toggle="buttons"> */}
                {/* <label>Weekly Text Reminders Y/N</label> */}
                {/* <ToggleButton type = "checkbox" value ={this.props.notifications}
                onClick = {this.handleEditToggle} 
                ></ToggleButton> */}
                 {/* <input type = "checkbox" value ={this.props.notifications}
                onClick = {this.handleEditToggle}></input> */}
                {/* </div> */}

            </form>
        )
    }
}

export default MovieSettings