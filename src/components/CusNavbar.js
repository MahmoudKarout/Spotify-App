import React from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';


export const CusNavbar = () => {
  return (
    <Navbar  >
      <Navbar.Brand id="font-spotify-color" href="#home">
        <a href="https://www.spotify.com/lb-en/" className="navbar-highlight-white svelte-18o1xvt"  style = {{color: '#1DB954 '}}>
         <img   alt= "brand" style = {{width: "100px"}} src ="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" /></a>

      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
      </Navbar.Collapse>
    </Navbar>
  );
}
export default CusNavbar;