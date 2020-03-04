import React, { Component } from 'react';
 
import '../styles/Search.css';
import { getSearchArtist} from '../spotify';
import {ArtistCard} from './ArtistCard';
import {SearchBar} from './SearchBar';

class Search extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            artistId: '',
            value: '',
            results: {},  
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }
componentWillMount(){
    localStorage.getItem('ArtistSearch') && this.setState({
        results : JSON.parse(localStorage.getItem('ArtistSearch')),
    })
}

    handleSubmit = (event) => {
        getSearchArtist(this.state.value).then(res => {
            this.setState({
                results: res.data.artists.items,      
                
            });
        })
        
        event.preventDefault()
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('ArtistSearch',JSON.stringify(nextState.results));
        
    }
    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        {results.map((result) => {
                            return (
                             <ArtistCard result = {result} />
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    render() {
        return (
           <SearchBar
            onSubmit= {this.handleSubmit}
            value ={this.state.value}
            onChange = {this.handleChange}
            renderSearchResults ={this.renderSearchResults()}
           />
        )
    }
}
export default Search;