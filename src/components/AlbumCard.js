import React from 'react';

export const AlbumCard = ({ result }) => {
   
  
    return (
        <div className="card col-sm-4" style={{ marginTop: "10px" }} key={result.id} >
        <div className="box">
            {result.images.length ? <img src={result.images[1].url} alt="Artist" /> :
                <img src= "https://i2.wp.com/mattymacchiato.com/wp-content/uploads/2019/02/spotify-logo.png?w=386&ssl=1"alt="Artist" />}
        </div>
        <h1 className="title">{result.name}</h1>
        <p className="title">{result.artists[0].name}</p>
        <p className="title">Release Date : {result.release_date}</p>
        <p className="title">Total Tracks {result.total_tracks}</p>
        <div className="container-fluid previewOnSpot " >
            <a href={"https://open.spotify.com/album/" + result.id}>Preview on Spotify</a>
        </div>
    </div> 
    );
};
