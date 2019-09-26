import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter a new username"></input>
                <input type="password" placeholder="Enter a new password"></input>
                <button>Sign up</button>
                {/* button routes to profile */}
                <button >Already Have an Account?</button>
                {/* button leads to signin */}

            </form>
        )
    }
}

export default Signup