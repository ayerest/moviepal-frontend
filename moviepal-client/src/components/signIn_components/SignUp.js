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

            }
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
            console.log(e.target.value)
            console.log("hitting toggle")

            this.setState({
                notifications: !e.target.value
            })
        }



    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input ref = "name" type="text" required placeholder="Enter Your Name" id = "name" onChange = {this.handleChange}></input>
                <input ref = "username" type="text" required placeholder="Enter a new username" id = "username" onChange = {this.handleChange}></input>
                <input ref = "password" type="password" required placeholder="Enter a new password" id = "password" onChange = {this.handleChange}></input>
                <input ref = "city" type="text" required placeholder="Enter Your City" id = "city" onChange = {this.handleChange}></input>

                <div class = "btn-group-toggle" data-toggle="buttons">
                <label>Text Notifications</label>
                <ToggleButton type = "checkbox" value ={this.props.notifications}
                onClick = {this.handleSignUpToggle} 
                ></ToggleButton>
                </div>

                <button className="btn btn-primary" type = "Submit">Sign up</button>
                

            </form>
        )
    }
}

export default SignUp