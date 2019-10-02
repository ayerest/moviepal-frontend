import React, { Component } from 'react'
import ModalContainer from '../../containers/ModalContainer.js'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        let newVal = e.target.value
        let fieldName = e.target.name
        const newInput = { ...this.state.searchTerm = newVal }
        this.setState({
            searchTerm: newInput
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.searchTerm)
    }

    render() {
        const { fields } = this.state;
        return (
                <div className="ui field">
                    <form onSubmit={this.handleSubmit}>
                        <div className="ui field">
                            <label>Search</label>
                            <input type="search" onChange={this.handleChange} placeholder="Search Your Movies" />
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </div>
        )
    }
}

export default Search