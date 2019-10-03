import React, {Component} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            newUser: {
            name: "",
            username: "",
            password: "",
            city: "",
            notifications: false

            },
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
      onSubmit (e) {
          e.preventDefault();
          fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
                },
                body: 
                JSON.stringify({
                    name: e.target.name.value,
                    username: e.target.username.value,
                    password_digest: e.target.password.value,
                    city: e.target.city.value,
                    notifications: this.state.notifications
                })
            
            })
            .then(response => response.json())
            .then(data => {
                console.log("after sign up form", data) 
            })

    }
        handleChange = (e) => {
            console.log(e.target.value)
            const newInput = { ...this.state.fields, [e.target.name]: e.target.value}
            this.setState({fields: newInput})
        }

        handleSignUpToggle = (e)=> {
        //     console.log("target value", e.target.value)
        //     // console.log("hitting toggle")
        //     console.log("this state's notifications", this.state.notifications)
        //     this.setState({
        //         notifications: !this.state.notifications
        //     })
        // }

        // handleSignUpToggle = (e) => {
        // this.setState({
        //     notifications: !this.notifications
        // })
            console.log("target value", e.target.value)
            // console.log("hitting toggle")
            console.log("this state's notifications", this.state.notifications)
            this.setState({
                notifications: !this.state.notifications
            })
        }



    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <label>Name</label>
                <input ref = "name" type="text" required placeholder="Enter Your Name" id = "name" onChange = {this.handleChange}></input>
                <br></br>
                <label>Username</label>
                <input ref = "username" type="text" required placeholder="Enter a new username" id = "username" onChange = {this.handleChange}></input>
                <br></br>
                <label>Password</label>
                <input ref = "password" type="password" required placeholder="Enter a new password" id = "password" onChange = {this.handleChange}></input>
                <br></br>
                <label>City</label>
                <input ref = "city" type="text" required placeholder="Enter Your City" id = "city" onChange = {this.handleChange}></input>

                {/* <div class = "btn-group-toggle" data-toggle="buttons">
                <label>Text Notifications</label>
                <ToggleButton type = "checkbox" value ={this.state.notifications}
                onClick = {this.handleSignUpToggle} 
                ></ToggleButton>
                </div> */}
                <br></br>
                <label>Text Notifications On/Off</label>
                <input type = "checkbox" value= {this.state.notifications} onChange = {this.handleSignUpToggle}></input>
                <br></br>
                {/* <div className = 'custom-controls custom switch'>
                    <input
                    type = "checkbox"
                    className = "custom-control-input"
                    id = "customSwitches"
                    checked = {this.state.notifications}
                    onChange = {this.handleSignUpToggle(1)}
                    />

                </div> */}




                <button className="btn btn-primary" type = "Submit">Sign up</button>
                

            </form>
        )
    }
}

export default SignUp