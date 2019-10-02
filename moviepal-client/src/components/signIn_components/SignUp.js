import React, {Component} from 'react'

class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            newUser: {
            name: "",
            username: "",
            password: "",
            city: "",

            }
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
      onSubmit (e) {
          e.preventDefault();
          console.log("userame", e.target.username.value)
          console.log("city", e.target.city.value)
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

                })
            
            })
            .then(response => response.json())
            .then(data => {
                console.log("after sign up form", data)
                // debugger
                // this.props.onSignUp(data, "signup") 
            })

    }
    
        handleChange = (e) => {
            const newInput = { ...this.state.fields, [e.target.name]: e.target.value}
            this.setState({fields: newInput})
        }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input ref = "name" type="text" required placeholder="Enter Your Name" id = "name" onChange = {this.handleChange}></input>
                <input ref = "username" type="text" required placeholder="Enter a new username" id = "username" onChange = {this.handleChange}></input>
                <input ref = "password" type="password" required placeholder="Enter a new password" id = "password" onChange = {this.handleChange}></input>
                <input ref = "city" type="text" required placeholder="Enter Your City" id = "city" onChange = {this.handleChange}></input>
                
                <button type = "Submit">Sign up</button>
                

            </form>
        )
    }
}

export default SignUp