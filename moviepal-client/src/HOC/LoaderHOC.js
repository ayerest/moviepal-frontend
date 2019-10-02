// import React from 'react'
// import { Redirect } from 'react-router-dom'

// const LoaderHOC = WrappedComponent => {
//     return class LoaderHOC extends React.Component {

//         isLoading = () => {
//             return this.props.allMovies.length === 0;
//         }

//         render() {
//             return this.isLoading() ? <WrappedComponent  /> : <Redirect to="/home" />
//         }
//     }
// }

// export default LoaderHOC