import React, {Component} from 'react'

class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            newUser: {
            name: "",
            username: "",
            password: "",
            city: "",
            showModal: false,
            // loading: false,
            // error: null
            }
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    // state = {
    //     name: "",
    //     username: "",
    //     password: "",
    //     city: ""
    // }

      onSubmit (e) {
          e.preventDefault();
          console.log("userame", e.target.username.value)
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
                this.props.onSignUp(data)
            })

    }
    
        handleChange = (e) => {
            const newInput = { ...this.state.fields, [e.target.name]: e.target.value}
            this.setState({fields: newInput})
        }

        openModal = (e) => {
            this.setState({
                showModal: true,
              });
            this.onSubmit(e)
        }

        onClose= (e) => {
            this.props.show = false
        }


    render() {
        // if(!this.props.showModal){
        //     return null;
        // }
        return (
            <form onSubmit = {this.onSubmit}>
                <input ref = "name" type="text" required placeholder="Enter Your Name" id = "name" onChange = {this.handleChange}></input>
                <input ref = "username" type="text" required placeholder="Enter a new username" id = "username" onChange = {this.handleChange}></input>
                <input ref = "password" type="password" required placeholder="Enter a new password" id = "password" onChange = {this.handleChange}></input>
                <input ref = "city" type="text" required placeholder="Enter Your City" id = "city" onChange = {this.handleChange}></input>
                

                <button type = "Submit">Sign up</button>
                {/* <button onClose = {e => {
                    this.onClose(e)
                }}
                >Close</button> */}
                

            </form>
        )
    }
}

export default SignUp