import React from 'react'
import { Redirect } from 'react-router-dom'

const PrivacyHOC = WrappedComponent => {
    return class PrivacyHOC extends React.Component {

        authorized = () => {
            return this.props.logged_in === true;
        }

        render() {
            return this.authorized() ? <WrappedComponent /> : <Redirect to="/home" />
        }
    }
}

export default PrivacyHOC