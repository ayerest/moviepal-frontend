import React, { Component } from 'react'
import Switch from "react-switch";

class ProfileSettings extends Component {
    constructor(props){
        super(props)
    }


    render() {
        // if(!this.props.showModal){
        //     return null;
        // }
        return (
            <form onSubmit = {this.props.onSubmitProfile}>
                <input ref = "name" type="text" required placeholder= "user's name" id = "name" onChange = {this.handleChange}></input>
                <input ref = "username" type="text" required placeholder= "user's username" id = "username" onChange = {this.handleChange}></input>
                <input ref = "password" type="password" required placeholder="Enter a new password" id = "password" onChange = {this.handleChange}></input>
                <input ref = "city" type="text" required placeholder="Enter Your City" id = "city" onChange = {this.handleChange}></input>
                <label>Weekly text reminders On/Off</label>
                <Switch onChange = {this.props.handleAlertToggle} checked= {this.state.twilio} ></Switch>

                <button type = "Submit">Save Changes</button>
                

            </form>
        )
    }
}

export default ProfileSettings