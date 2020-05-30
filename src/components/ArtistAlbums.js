import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/Search.css';
import PropTypes from 'prop-types';
import { AlbumCard } from './AlbumCard/AlbumCard';




class ArtistAlbums extends Component {
    static propTypes = {
        ArtistId: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artistId: '',
            value: '',
            results: {},

        };

    }
    componentDidMount() {
        document.title = this.props.match.params.ArtistName + " | Albums";
        this.handleSubmit();

    }
    handleSubmit = () => {
       
        const token = sessionStorage.getItem("access_token");
        this.setState({
            token: token
        }, () => {
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };
            const searchUrl = `https://api.spotify.com/v1/artists/${this.props.match.params.ArtistId}/albums`;
            Axios.get(searchUrl, { headers })
                .then(res => {
                    this.setState({
                        results: res.data.items,
                    })
                })
        })
    }
    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="container-fluid">
                       <h2 className="heading" style={{ color: "white",textAlign:"center" }}>{this.props.match.params.ArtistName} Albums</h2>
                    <div className="row">
                        {results.map((result) => {
                            return (
                                <AlbumCard result={result} />
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    render() {
        return (
            <div className="container-fluid" style={{ color: "#191414", textAlign: "center", paddingLeft: "1rem",marginBottom:"100px" }}>
             
                {this.renderSearchResults()}
            </div>
        )
    }
}
export default ArtistAlbums;