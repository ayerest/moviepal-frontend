import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter your username"></input>
                <input type="password" placeholder="Enter your password"></input>
                <button>Sign up</button>
            </form>
        )
    }
}

export default Signup