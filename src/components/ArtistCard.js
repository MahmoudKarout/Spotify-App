import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export const ArtistCard = ({ result}) => {
    return (
        <div className="card col-sm-4" style={{ marginTop: "10px" }} key={result.id} >
            <Link to={"/AlbumArtist/" + result.id + "/" + result.name}>
                <div className="box">
                    {result.images.length ? <img src={result.images[1].url} alt="Artist" /> : <img src="https://i2.wp.com/mattymacchiato.com/wp-content/uploads/2019/02/spotify-logo.png?w=386&ssl=1" alt="Artist" />}
                </div>
                <h1 className="title">{result.name}</h1>
                <p >{result.followers.total} followers</p>
                <StarRatings rating={result.popularity * 0.05} starEmptyColor="grey" starRatedColor='rgb(30,215,96)' starDimension="20px" starSpacing="5px" />

            </Link>
        </div>
    );
    }