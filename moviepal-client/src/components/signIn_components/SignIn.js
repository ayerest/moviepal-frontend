import React, {Component} from 'react'
import ModalContainer from '../../containers/ModalContainer.js'
import SignUp from './SignUp'


class SignIn extends Component {


constructor () {
    super()
    this.state = {
        fields: {
            username: "",
            password: "",
            newUser: {
                name: "",
                username: "",
                password: "",
                city: ""
        },
        showModal: false,
        error: false
        
    }
    
}
this.handleSubmit = this.handleSubmit.bind(this)
}


handleChange = (e) => {
    // console.log(e.target.value)
    // debugger
    let newVal = e.target.value
    let fieldName = e.target.name
    console.log(newVal, fieldName)
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
      // console.log(json.jwt)
      console.log(json)
      localStorage.setItem("token", json.jwt)
    })

  }

    openModal() {
        this.setState({
          showModal: true
        });
      }
     
      closeModal() {
        this.setState({
          showModal: false,
        //   error: null
        });
      }

    render() {
        const {fields} = this.state;
      return (
          <div>
              {this.state.error ? <h1>Try again...</h1> : null}
              <div classname= "ui field">
                 <form onSubmit = {this.handleSubmit}>
                    <div classname = "ui field">
                        <label>Username</label>
                <input name="username" type="text" required placeholder="Username" value= {fields.username} onChange = {this.handleChange}></input>
                </div>
                <div classname = "ui field">
                <label>Password</label>
                <input name="password" type="password" required placeholder="Password" value= {fields.password} onChange = {this.handleChange}></input>
                </div>
              <button type = "submit">Sign In</button>
              {/* <div>
                  <button onClick = {e => {
                  this.showModal()}}
                >New User? Sign Up!
                  </button>
                  <SignUp showModal= {this.state.showModal} onClose = {this.showModal} />
              </div> */}
              <div>
              <button onClick={() => this.openModal()}>Open Modal</button>
 
                <SignUp
                visible={this.state.showModal}
                onCloseModal={this.closeModal.bind(this)}
                error={this.state.error} />
            </div>

              
          </form>
          
          </div>
          </div>
      )
  
    }
  }


export default SignIn