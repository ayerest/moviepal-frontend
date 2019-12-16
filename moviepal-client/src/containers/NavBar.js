import React from 'react'
import {NavLink, Link} from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, NavItem} from 'react-bootstrap'


// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white'
// }

class NavBar extends React.Component {
    
    constructor(props) {
        super(props)
    }

    prevent = (e) => {
        // e.preventDefault()
    }

    render() {
        return (
                <Navbar bg="light" expand="lg" sticky="top" >
                    <Navbar.Brand href="/home">MoviePal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/home" > Home </Nav.Link>
                            
                                 <Link className="nav-link" to="/mymovies">
                                     My Movies
                                 </Link>
                                 <Link className="nav-link" to="/settings">
                                     Settings
                                 </Link>
                                    
                                    <Link className="nav-link" to="/home" onClick={this.props.onLogOut}>
                                    { !!this.props.loggedIn ?  'Logout' : null
                                        }
                                    </Link> 
                                    </Nav>
                         {/* <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                 </Form> */}
              </Navbar.Collapse>
          </Navbar>

          

        )

    }
}

export default NavBar

