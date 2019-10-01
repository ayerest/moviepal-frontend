import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

class NavBar extends React.Component {

    render() {
        return(
            <div>
                <NavLink
                to = "/mymovies"

                style= {link}
                activeStyle = {{
                    background:'darkblue'
                }}

                >
                    My Movies
                </NavLink>

                <NavLink
                to = "/home"

                style= {link}
                activeStyle = {{
                    background:'darkblue'
                }}

                >
                    Home
                </NavLink>

                <NavLink
                to = "/settings"

                style= {link}
                activeStyle = {{
                    background:'darkblue'
                }}

                >
                    Settings
                </NavLink>

            </div>
        )}
}

export default NavBar

