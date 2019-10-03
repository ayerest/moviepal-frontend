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
                <input ref = "name" type="text" required defaultValue= {this.props.user.name} id = "name" onChange = {this.props.handleChange}></input>

                <input ref = "city" type="text" required defaultValue= {this.props.user.city} id = "city" onChange = {this.props.handleChange}></input>


                <label>
                Weekly text reminders On/Off
                </label>
                <Switch 
                defaultValue = {this.props.notifications}
                checked = {this.props.checked}
                onChange = {this.props.handleAlertToggle}
                value = {this.props.checked} 
                ></Switch>
                
                <button type = "Submit">Save Changes</button>
                

            </form>
        )
    }
}

export default ProfileSettings