import React, { Component } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class MovieSettings extends Component {
    constructor(props) {
        super(props)
    }

    displayGenres () {
        let user = this.props.user
        return(
            <Row>{
                Object.keys(this.props.allGenres).map(genre => {
                    return( 
                        <Col xs="12" sm ="4">   
                            <label id = {genre.id}>{genre}</label>
                            <input type = "checkbox" name = {genre} onChange = {this.props.onGenreChange}/>
                        </Col> 
                    )
                })
            }</Row>
        )
    }

    render() {
        return (
            <form>
                {this.displayGenres()}
                <div class = "btn-group-toggle" data-toggle="buttons">
                <label>Text Notifications</label>
                <ToggleButton type = "checkbox" value ={this.props.notifications}
                onClick = {this.props.onGenreSubmit} 
                >Turn On Notifications</ToggleButton>
                </div>
            </form>
        )
    }
}

export default MovieSettings