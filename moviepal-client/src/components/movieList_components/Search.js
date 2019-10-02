import React, { Component } from 'react'
import ModalContainer from '../signIn_components/ModalContainer'

class Search extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     searchTerm: ""
        // }
    }

    handleChange = (e) => {
        // let newVal = e.target.value
        // let fieldName = e.target.name
        // this.setState({
        //     searchTerm: newVal
        // }, () => console.log(this.state))

        let searchTerm = e.target.value
        this.props.onHandleSearch(searchTerm)
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        // let searchTerm = e.target.children[1].value
        // // debugger
        // this.props.onHandleSearch(searchTerm)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input type="search" onChange={this.handleChange} placeholder="Search Your Movies" />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default Search