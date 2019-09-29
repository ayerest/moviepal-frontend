import React, {Component} from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

class SignUpFormContainer extends Component {
    constructor() {
        super()
        
    }
    
    render() {
        return (
           <div>
             {/* <SignIn /> */}
             <SignUp />
            </div>
        )
    }
}

export default SignUpFormContainer 