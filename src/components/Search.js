import React, { Component } from 'react';

import '../styles/Search.css';
// import {getSearchArtist} from from '../spotify/index';
import { ArtistCard } from './ArtistCard';
// import { SearchBar } from './SearchBar';
import Axios from 'axios';
import Loader from './icons/loader';
import { headers} from '../spotify/index';
import { SearchBar } from './SearchBar';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            updatedPageNo: 0,
            limit: 20
        };
        this.cancel = '';
    }
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '', updatedPageNo: 0 });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    fetchSearchResults = (query) => {
        const { updatedPageNo, limit } = this.state;
        const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist&offset=${updatedPageNo}&limit=${limit}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = Axios.CancelToken.source();
        Axios.get(searchUrl, {
            cancelToken: this.cancel.token,
            headers
        }).then(res => {
            const resultNotFoundMsg = !res.data.artists.items.length ? 'there are no more search results. Please try a new search' : '';
            this.setState({
                results: res.data.artists.items,
                message: resultNotFoundMsg,
                loading: false
            })
        }).catch(
            error => {
                if (Axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'failed to fetch the data'
                    })
                }
            }
        )
    }

    GoToNextPage = () => {
        this.setState({
            updatedPageNo: this.state.updatedPageNo + (this.state.limit + 1)
        }, () => {
            this.fetchSearchResults(this.state.query);
        })
    }
    GoToPreviousPage = () => {
        this.setState({
            updatedPageNo: 0
        }, () => {
            this.fetchSearchResults(this.state.query);
        })
    }
    componentDidMount() {
        localStorage.getItem('ArtistSearch') && this.setState({
            results: JSON.parse(localStorage.getItem('ArtistSearch')),
        })
    }
    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem('ArtistSearch', JSON.stringify(nextState.results));

    }
    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        {results.map((result, index) => {
                            return (
                                <ArtistCard result={result} key={++index} />
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    render() {
        const { query, loading, updatedPageNo,message } = this.state;
        return (
            <div style={{ position: "relative" }}>
                <SearchBar handleOnInputChange={this.handleOnInputChange} value={query} message={message} />
                {/* <div className="container-fluid" style={{ color: "#191414", textAlign: "center" }}>
                    <h2 className="heading" style={{ color: "white" }}>Search Spotify Artist</h2>

                    <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                        <div className="input-group">
                            <input type="search" style={{ height: "inherit" }} value={query} onChange={this.handleOnInputChange} placeholder="Which Artist are you looking for?" className="form-control rounded rounded-pill bg-light" />
                            <div className="input-group-append" style={{ alignItems: "center" }}>
                                <button id="button-addon1" type="submit" className="btn btn-link " style={{ color: "#1DB954", fontSize: "30px" }}><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <p style={{ color: "red" }}>{message ? message : ''}</p>

                </div> */}
                 {loading ? <div style={{position: "absolute",top: "100%",left: "50%"}}><Loader /> </div> : this.renderSearchResults()} 
                {query && (this.state.results) ?  <button onClick={this.GoToNextPage} > Next Page </button> : <p></p>}
                {updatedPageNo > 0 ? <button onClick={this.GoToPreviousPage} > Previous Page </button> : <p></p>}
            </div>
        )

    }
}
export default Search;