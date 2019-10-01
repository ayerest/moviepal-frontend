import React from 'react'
import Profile from './Profile'
import SignIn from '../components/signIn_components/SignIn'

class Home extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        // debugger
          return (<div className="">
          <header className="">
          </header>
          {!!this.props.userStatus ? 
            ( <div> 
                <Profile user={this.props.user}/>
              </div>
              ) :  
                <SignIn onSignIn={this.props.getLoggedIn}/>
              }
     
        </div>
        
          )}
}

export default Home;