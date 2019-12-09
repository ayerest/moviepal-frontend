import React, {Component} from 'react'
import List from './List'

class SearchMoviesContainer extends Component {


    constructor () {
        super()
        this.state = {
            allMovies: [],
            search: ""
        }

        fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movieData => this.renderMovies(movieData))
        .then(movieData => console.log(movieData))

    }

    

    renderMovies = (movieData) => {
        
        this.setState({
            allMovies: movieData
        }, ()=>  console.log("after render", this.state.allMovies)
        )
        // console.log(movieData[0])
        // console.log(movieData)

        
    }

    handleChange = (e) => {
        this.setState({
          search: e.target.value
        })
  
      }


      //may be able to delete?
      handleClick = (movie) => {
          this.setState({
            searchMovies: [...this.state.searchMovies, movie]
          })
        }  

    render() {
        return (
                <div>
                    <h2>{this.state.movieData}</h2>

                    <List handleChange= {this.handleChange}  search = {this.state.search} handleClick={this.handleClick} allMovies = {this.state.allMovies} />
                </div>
        )
    }
}

export default SearchMoviesContainer