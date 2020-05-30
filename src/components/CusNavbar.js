import React from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';
import SpotifyLogo from './icons/spotifyLogo';

// import RefreshIcon from './icons/refresh';


export const CusNavbar = () => {
  return (
    <Navbar  className="py-0">
      <Navbar.Brand id="font-spotify-color" className="p-0 m-0"  href="#home">
        <SpotifyLogo cusHeight={"100"} cusWidth={"150"} />

      </Navbar.Brand>
     {/* <a> <button  className="refresh_access"> <RefreshIcon /> &nbsp; Refresh Access</button></a> */}
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end ">
      </Navbar.Collapse>
    </Navbar>
  );
}
export default CusNavbar;