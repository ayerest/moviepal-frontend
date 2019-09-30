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
this.onSubmit = this.onSubmit.bind(this)
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
                <input type="text" required placeholder="Username" value= {fields.username} onChange = {this.handleChange}></input>
                </div>
                <div classname = "ui field">
                <label>Password</label>
                <input type="password" required placeholder="Password" value= {fields.password} onChange = {this.handleChange}></input>
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