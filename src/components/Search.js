import React, { Component } from 'react';

import '../styles/Search.css';
import { ArtistCard } from './ArtistCard/ArtistCard';
import Axios from 'axios';
import Loader from './icons/loader';
import { SearchBar } from './SearchBar';
import Paging from '../components/Paging';
import {NotFound } from '../components/NotFound';


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: '',
            query: '',
            results: {},
            loading: false,
            message: '',
            offset: 0,
            totalItems: 0,
            limit: 20,
            pageNumber: 1,
            start: true,
            end: false,

        };
        this.cancel = '';
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '', offset: 0, pageNumber: 1, start: true, end: false });
        } else {
            this.setState({ query, loading: true, message: '', pageNumber: 1, start: true, end: false, offset: 0 }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    updatePage = (offset) => {
        this.setState({
            offset: offset,
        },
            () => {
                this.fetchSearchResults()
            })
    }
    fetchSearchResults = () => {
        const { offset, limit, query } = this.state;
        const token = sessionStorage.getItem("access_token");
        this.setState({
            token: token
        }, () => {
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };
            const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist&offset=${offset}&limit=${limit}`;
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
                    totalItems: res.data.artists.total,
                    message: resultNotFoundMsg,
                    loading: false
                })
            }).catch(
                error => {
                    if (Axios.isCancel(error) || error) {
                        this.setState({
                            loading: false,
                            message: 'fetching..'
                        })
                    }
                }
            )
        })

    }
    componentDidMount() {
        localStorage.getItem('ArtistSearch') && this.setState({
            results: JSON.parse(localStorage.getItem('ArtistSearch')),
        })
        document.title = "Artist Search";
    }
    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem('ArtistSearch', JSON.stringify(nextState.results));
        window.scrollTo(0, 0);


    }
    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="row">

                    <Paging state={this.state} updatePage={this.updatePage} />
                    {results.map((result, index) => {
                        return (
                            <ArtistCard result={result} key={++index} />
                        );
                    })}
                    <Paging state={this.state} updatePage={this.updatePage} />
                </div>
            );
        }
    };
    render() {
        const { query, loading, message} = this.state;
        return (

            <div style={{ position: "relative", height: "max-content" }}>
                {sessionStorage.getItem("access_token")?
                    (<div>
                        <div className="searchComp" >
                            <h2 className="heading" >Search Spotify Artist </h2>
                            <SearchBar handleOnInputChange={this.handleOnInputChange} value={query} message={message} />
                        </div>
                        <div className="container-fluid">
                            {loading ? <div style={{ position: "absolute", top: "100%", left: "50%", paddingBottom: "20px" }}><Loader /> </div> : this.renderSearchResults()}
                        </div>
                    </div>) :
                     (<NotFound/>)
                }
            </div>

        )
    }
}


export default Search;