import React, {Component} from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

class SignUpFormContainer extends Component {
    render() {
        return (
           <div>
            <SignUp />
            <SignIn />
            {/* button routes to profile */}
            <button >Already Have an Account?</button>
                {/* button leads to signin */}
            </div>
        )
    }
}

export default SignUpFormContainer 