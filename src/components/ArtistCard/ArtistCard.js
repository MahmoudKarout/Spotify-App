import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as boot from "react-bootstrap";
import { usePalette } from "react-palette";
import './ArtistCard.css'
import { numFormatter, hexToRgb, titleTrimmer } from '../../utils';
import SpotifyLogo from '../icons/spotifyLogo';

export const ArtistCard = ({ result }) => {
    const [dominantColor, setDominantColor] = useState("#222")
    const { data } = usePalette(result.images.length !== 0 ? (result.images[1].url ? result.images[1].url : require("../ArtistCard/defaultSpot.png")) : require("../ArtistCard/defaultSpot.png"));

    useEffect(() => {
        if (data.vibrant) {
            setDominantColor(hexToRgb(data.vibrant));
        }
    },[data.vibrant])
    return (
        <div className="card col-sm-4 p-0" style={{ marginTop: "10px" }} key={result.id} alt={result.name} >
            <Link to={"/AlbumArtist/" + result.id + "/" + result.name} >

                <div className="box">
                    {result.images.length ? <img src={result.images[1].url} alt="Artist" /> : <img src={require("../ArtistCard/defaultSpot.png")} alt="Artist" />}
                </div>
                <div className="info_box" style={{ backgroundColor: dominantColor }} >
                    <h1 className="title" >{titleTrimmer(result.name)}</h1>
                    <p className="followers" >{numFormatter(result.followers.total)} <span style={{ fontWeight: "400" }}>followers</span></p>
                    <StarRatings rating={result.popularity * 0.05} starEmptyColor="grey" starRatedColor='rgb(30,215,96)' starDimension="20px" starSpacing="3px" />
                </div>
            </Link>
            <boot.Container className="listen_spotify">
                <a href={result.external_urls.spotify}>
                    <SpotifyLogo cusHeight={"40"} cusWidth={"90"} />
                </a>
            </boot.Container>
        </div>

    );
}


