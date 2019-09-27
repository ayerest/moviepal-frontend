import React, {Component} from 'react'
import Movie from './Movie'
import Like from './Like'

class List extends Component {

    
    render() {
        return (
            <div>
                <h2>All historical  movies list</h2>
                <Movie />
                <Like />
            </div>
        )
    }
}

export default List