import React, { Component } from 'react'
// import Switch from "react-switch";
import Switch from '@material-ui/core/Switch'

class ProfileSettings extends Component {
    constructor(props){
        super(props)
    }

    render() {
        
        return (
            <form onSubmit = {this.props.onSubmitProfile}>
                <input ref = "name" type="text" required defaultValue= {this.props.user.name} id = "name" key = "name" onChange = {this.props.handleChange}></input>

                <input ref = "city" type="text" required defaultValue= {this.props.user.city} id = "city" key = "city" onChange = {this.props.handleChange}></input>


                <label>
                Weekly text reminders
                </label>
                <input type = "checkbox-inline" data-toggle = "toggle" 
                defaultValue = {this.props.notifications}
                onChange = {this.props.handleAlertToggle}
                ></input>
                
                <button class = "btn btn-outline-primary" type = "Submit">Save Changes</button>
                

            </form>
        )
    }
}

export default ProfileSettings