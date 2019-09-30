import React, {Component} from 'react'
import ModalContainer from '../../containers/ModalContainer.js'


class SignIn extends Component {


constructor () {
    super()
    this.state = {
        fields: {
            username: "",
            password: ""
        },
        error: false
    }
}


handleChange = (e) => {
    // console.log(e.target.value)
    const newInput = { ...this.state.fields, [e.target.name]: e.target.value}
    this.setState({
        fields: newInput
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    applicationCache.auth.login(this.state.fields)
    .then (response => {
        if(!response.error) {
            const updatedState = {
                ...this.state.auth, user: response};
                this.props.handleLogin(response);
                this.props.history.push('/');
            }
            else {
                this.setState({error: true
                })
            }
            }
    )}

    render() {
        const {fields} = this.state;
      return (
          <div>
              {this.state.error ? <h1>Try again...</h1> : null}
              <div classname= "ui field">
                 <form onSubmit = {this.handleSubmit}>
                    <div classname = "ui field">
                        <label>Username</label>
                <input type="text" required placeholder="Username" value= {fields.username} onChange = {this.handleChange}></input>
                </div>
                <div classname = "ui field">
                <label>Password</label>
                <input type="password" required placeholder="Password" value= {fields.password} onChange = {this.handleChange}></input>
                </div>
              <button type = "submit">Sign In</button>
              <div>
                  {/* <button onClick = {<ModalContainer/>}>New User? Sign Up! */}
                  {/* </button> */}
              </div>
              
              
          </form>
          
          </div>
          </div>
      )
  
    }

}

export default SignIn