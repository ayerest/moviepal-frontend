import React from 'react'
// import { Redirect } from 'react-router-dom'
import Loader from './Loader'

const LoaderHOC = WrappedComponent => {
    return class LoaderHOC extends React.Component {
        
        isLoaded = () => {
            // debugger
            return this.props.loaded;
        }

        render() {
        
            return (this.isLoaded() ? <WrappedComponent {...this.props} /> : <Loader />) 
        }
    }
}

export default LoaderHOC