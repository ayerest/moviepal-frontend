import React, {Component} from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

class SignUpFormContainer extends Component {
    constructor() {
        super()
        
    }
    //will need to track if they click already have account in state to dynamically display one component vs the other
    render() {
        return (
           <div>
            <SignUp />
            <SignIn />
            {/* button routes to settings */}
            <button >Already Have an Account?</button>
                {/* button leads to signin */}
            </div>
        )
    }
}

export default SignUpFormContainer 