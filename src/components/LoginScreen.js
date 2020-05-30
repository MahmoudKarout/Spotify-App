import React from 'react';
import styled from 'styled-components/macro';
import { getHashParams } from '../utils';
const Login = styled.div`
display: flex;
height: calc(100vh - 100px);
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
margin: auto;
position: relative;
top: calc(50% - 100px);
@media (max-width: 600px) {
width:100%
}

  h1 {
    font-size: 32px;
  }
`;
const LoginButton = styled.a`
  display: inline-block;
  background-color: #1DB954;
  color: #FFFFF;
  border-radius: 30px;
  padding: 17px 35px;
  margin: 20px 0 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  &:hover,
  &:focus {
    background-color: #1ed760;
  }
`;
const stateKey = "spotify_auth_state";

const LoginScreen = class extends React.Component {

  componentDidMount() {
    localStorage.clear();
sessionStorage.clear();

    document.title = "Login";


  }
  componentDidUpdate(){
 document.title = "Login";
  }
  

  handleClick = () => {
    const client_id = "e5abbee6e0fd4e4bbd080c6d212ca520" || process.env.CLIENT_ID;
    const redirect_uri = "http://localhost:3000" || process.env.REDIRECT_URI;
    const scope = "user-read-private user-read-email";
    const state = generateRandomString(16);

    sessionStorage.setItem(stateKey, state);
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += `&client_id=${encodeURIComponent(client_id)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    url += `&state=${encodeURIComponent(state)}`;

    window.location = url;



  };
  render() {

    return (
      <div>
      <Login>
        <h1>Spotify Profile</h1>
        <LoginButton onClick={this.handleClick}>Log in to Spotify</LoginButton>
      </Login>
     
      </div>
    )
  }
};
const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  while (text.length <= length) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default LoginScreen;
