import React, {Component} from 'react'

class SignIn extends Component {

    render() {
      return (
          <form>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>
              <button>Sign In</button>
              {/* // onClick = auth */}
              

          </form>
      )
  
    }

}

export default SignIn