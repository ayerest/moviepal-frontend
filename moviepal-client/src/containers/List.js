import React from "react";
import MovieCollection from '../components/movieList_components/MovieCollection'
import MovieDetails from '../components/movieList_components/MovieDetails'
import Search from '../components/movieList_components/Search'

class List extends React.Component {
    
    constructor(props) {
        super(props)
        console.log("list props", props)
        this.state = {
            displayAllMovies: true,
            movie: null,
            searchTerm: ""
        }
    }

    displayOneMovie = (movie) => {
        this.setState({
            displayAllMovies: false,
            movie: movie
        })
    }

    handleSearch = (searchTerm) => {
        this.setState(prevState => {
            return {searchTerm: searchTerm}
        })
    }


    render(){
        // if (this.props.allMovies.length > 0) {
        //     let allMovies = this.props.allMovies.filter((movie) => {
        //         return movie.title.indexOf(this.props.search) !== -1;
        //     })
        // }
        return(
            <div>
                <Search onHandleSearch={this.handleSearch}/>
                <MovieCollection user={this.props.user} 
                allMovies={this.props.allMovies} 
                handleClick={this.displayOneMovie} 
                searchTerm={this.state.searchTerm} movie={this.state.movie}  
                handleOnLike={this.props.handleOnLike} />
                {/* <MovieDetails user={this.props.user} displayOneMovie = {this.displayOneMovie} handleClick = {this.props.handleClick} movie= {this.state.movie} handleOnLike={this.props.handleOnLike}/>  */}
                {/* 
                <Search handleSearch={this.props.handleChange}/>
                <MovieCollection allMovies = {this.props.allMovies} handleClick = {this.displayOneMovie} />
                <MovieDetails displayOneMovie = {this.displayOneMovie} handleClick = {this.props.handleClick} movie= {this.state.movie} handleOnLike = {this.props.handleOnLike} handleOnDisLike = {this.props.handleOnDisLike} handleOnToSee = {this.props.handleOnToSee}> 
                    */}
                {!!this.state.movie ? 
                <MovieDetails key={this.state.movie.id} movie={this.state.movie} 
                handleOnLike={this.props.handleOnLike}
                user={this.props.user} fromCurrent={false}
                 /> : null }
                {/* // (this.props.user.id, this.props.movie.id)
                // } 
                // handleOnUnLike={this.props.handleOnUnLike(this.props.user.id, this.props.movie.id)} 
                // handleOnToWatch={this.props.handleOnToWatch(this.props.user.id, this.props.movie.id)} 
                { user={this.props.user}
                /> : null }   */}
                
                {/* {!!this.state.movie ? <MovieDetails movie={this.state.movie} handleOnLike={this.props.handleOnLike} handleOnUnLike={this.props.handleOnUnLike} handleOnToWatch={this.props.handleOnToWatch} user={this.props.user} fromCurrent={false}/> : null }  */}
            </div>
        )}


}

export default List;