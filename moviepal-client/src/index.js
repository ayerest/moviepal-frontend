import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

// document.addEventListener("DOMContentLoaded", scriptSrcGoogleMaps())


ReactDOM.render((
    <App />), document.getElementById('root')
);

// (async function getSrc() {
//     fetch("http://localhost:3000/maps")
//     .then(response => response.json())
//     .then(json => {
//         let mapScript = document.getElementById("make-map")
//         mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${json.api_key}`
//     })
// })()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
