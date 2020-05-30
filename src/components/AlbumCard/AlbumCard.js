import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as boot from "react-bootstrap";
import { usePalette } from "react-palette";
import { hexToRgb, titleTrimmer } from '../../utils';
import SpotifyLogo from '../icons/spotifyLogo';
import './AlbumCard.css';

export const AlbumCard = ({ result }) => {
    const [dominantColor, setDominantColor] = useState("#222")
    const { data } = usePalette(result.images.length !== 0 ? (result.images[1].url ? result.images[1].url : require("../ArtistCard/defaultSpot.png")) : require("../ArtistCard/defaultSpot.png"));

    useEffect(() => {
        if (data.vibrant) {
            setDominantColor(hexToRgb(data.vibrant));
        }
    },[data.vibrant])
    return (
        <div className="card col-sm-4 p-0" style={{ marginTop: "10px" }} key={result.id} alt={result.name} >
            <a className="box_link" href={result.external_urls.spotify}>
                <div className="box">
                    {result.images.length ? <img src={result.images[1].url} alt="Artist" /> : <img src={require("../ArtistCard/defaultSpot.png")} alt="Artist" />}
                </div>
                <div className="info_box" style={{ backgroundColor: dominantColor }} >
                    <h1 className="album_title" >{titleTrimmer(result.name)}</h1>
                    <p className="artist_Name">{result.artists[0].name} </p>
                    <p className="extra_info"> Realease Date: {result.release_date}<br />Total Tracks: {result.total_tracks}  </p>
                </div>
                <boot.Container className="listen_spotify">
                    <SpotifyLogo cusHeight={"40"} cusWidth={"90"} />
                </boot.Container>
            </a>
        </div >

    );
}
