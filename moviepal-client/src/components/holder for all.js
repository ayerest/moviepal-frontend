import React, {Component} from 'react'

class AllList extends Component {
    render() {
        return (
            <div>
                <h2>All historical  movies list</h2>
                <Movies />
                <MovieDetails />
            </div>
        )
    }
}

export default AllList