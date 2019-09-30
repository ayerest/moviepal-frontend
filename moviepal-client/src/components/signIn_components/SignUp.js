import React, {Component} from 'react'

class SignUp extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.state = {
        //     name: "",
        //     username: "",
        //     password: "",
        //     city: ""
        // }
    }

    state = {
        name: "",
        username: "",
        password: "",
        city: ""
    }

        // fetch("http://localhost:3000/genres", {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //     name: "test name", 
        //     })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))


      handleSubmit (e) {
          e.preventDefault();
          console.log("hit handlesubmitnew ");
          const form = e.target
          const data = new FormData(form)
          fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
                },
                body: 
                data,
                // JSON.stringify({
                //     name: this.state.name,
                //     username: this.state.username,
                //     password: this.state.password,
                //     city: this.state.city,

                
            })
            .then(response => response.json())

            .then(data => console.log(data))
            .catch(err => console.log(err))
        }

        handleChange = (e) => {
            console.log(e.target.value)
            console.log(this.state)
            const newInput = { ...this.state.fields, [e.target.name]: e.target.value}
            this.setState({fields: newInput
            
            })
        }


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
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