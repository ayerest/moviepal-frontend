import React, {Component} from 'react'

class SignUp extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter a new username"></input>
                <input type="password" placeholder="Enter a new password"></input>
                <button>Sign up</button>
                

            </form>
        )
    }
}

export default SignUp