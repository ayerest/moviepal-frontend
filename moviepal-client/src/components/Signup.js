import React, {Component} from 'react'

class SignUp extends Component {

    constructor(){
        super()

        fetch("http://localhost:3000/genres", {
            method: 'POST',
            headers: {
            'Content-Type': 'application.json',
            },
            body: JSON.stringify({
            name: "test name", 
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))

      }

    render() {
        return (
            <form>
                <input type="text" placeholder="Enter a new username"></input>
                <input type="password" placeholder="Enter a new password"></input>

                <button onClick = {this.newUserFetch}>Sign up</button>
                

            </form>
        )
    }
}

export default SignUp