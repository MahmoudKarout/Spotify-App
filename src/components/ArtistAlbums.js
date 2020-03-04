import React, { Component } from 'react';
import {getArtistAlbums} from '../spotify';

import '../styles/Search.css';
import PropTypes from 'prop-types';
import {AlbumCard} from './AlbumCard';



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
        this.cancel = '';
    }

    componentDidMount() {
        this.handleSubmit();
    }
    
    handleSubmit = () => {
        getArtistAlbums(this.props.match.params.ArtistId).then(res => {  
            this.setState({
                results: res.data.items,
               
            });
        });

    }

    renderSearchResults = () => {
        const { results } = this.state;
       
        if (Object.keys(results).length && results.length) {
            console.log("hello from up");
            return (
                <div className="container-fluid">
                    <div className="row">

                        {results.map((result) => {
                            return (
                                <AlbumCard result = {result} />
                            );
                        })}
                    </div>
                </div>
            );
        }

    };
    render() {

        return (
            <div className="container-fluid" style={{ color: "#191414", textAlign: "center" }}>
                <h2 className="heading" style={{ color: "white" }}>{this.props.match.params.ArtistName} Albums</h2>
                {this.renderSearchResults()}
            </div>



        )
    }
}
export default ArtistAlbums;