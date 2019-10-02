import React, {Component, Button} from 'react'
import ModalContainer from './ModalContainer'
import Modal from 'react-bootstrap/Modal'


class SignIn extends Component {
constructor (props) {
    super(props)
    this.state = {
        fields: {
            username: "",
            password: "",
            newUser: {
                name: "",
                username: "",
                password: "",
                city: ""
            }
          },  
        signUpState: false  
    }  
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.toggleShow = this.toggleShow.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

toggleShow = () => {
    this.setState(prevState => ({
      signUpState: !prevState.signUpState
    }))
  }
  

handleChange = (e) => {
    let newVal = e.target.value
    let fieldName = e.target.name
    const newInput = { ...this.state.fields, [fieldName]: newVal}
    this.setState({
        fields: newInput
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        "username": this.state.fields.username,
        "password": this.state.fields.password 
      })
    })
    .then(response => response.json())
    .then(json => {
      //do something to update App state to deal with the logged_in status
      if (json.jwt) {
        localStorage.setItem("token", json.jwt)
        // debugger
        this.props.onSignIn(json)
      }
    })

  }
  
  

    render() {
        const {fields} = this.state;
      return (
          <div>
              {this.state.error ? <h1>Try again...</h1> : null}
              <div className= "ui field">
                 <form onSubmit = {this.handleSubmit}>
                    <div className = "ui field">
                        <label>Username</label>
                      <input name="username" type="text" required placeholder="Username" value= {fields.username} onChange = {this.handleChange}></input>
                    </div>
                    <div className = "ui field">
                      <label>Password</label>
                      <input name="password" type="password" required placeholder="Password" value= {fields.password} onChange = {this.handleChange}></input>
                    </div>
                    <button type = "submit">Sign In</button>
                  </form> 
                <div>
                <button name= "toggleButton"
                  variant="primary"
                  onClick={this.toggleShow}
                  >Don't have an account? Sign Up! 
                  
                  </button>
                </div>
                
                {/* this.state.signUpState = true ? <ModalContainer /> */}
                  
 
          
          
            </div>
            </div>
      )
  
    }
  }


export default SignIn