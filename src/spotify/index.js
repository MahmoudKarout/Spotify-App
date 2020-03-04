import axios from 'axios';

export const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

var params = getHashParams();
// *********************************************** TOKEN + HEADER

export const token = params.access_token;
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

// *********************************************** API CALLS

export const getSearchArtist = artistName =>
  axios.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, { headers });

export const getArtistAlbums = aritstId => axios.get(`https://api.spotify.com/v1/artists/${aritstId}/albums`,{headers})