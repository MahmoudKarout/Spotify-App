import React, { Component } from 'react';
import './App.css';

import Search from './components/Search'
import LoginScreen from './components/LoginScreen'
import styled from 'styled-components/macro';

import { CusNavbar } from './components/CusNavbar';
import ArtistAlbums from './components/ArtistAlbums';
import {token} from './spotify';


import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  color: white;
  background-color: black;
`; 
class App extends Component {

  state = {
    token: '',
  };

  componentDidMount() {
   this.setState({ token: token });
  }

  render() {
    return (
      
      <AppContainer>
         <CusNavbar />
   
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={token ? Search : LoginScreen} />
            <Route path='/AlbumArtist/:ArtistId/:ArtistName' exact component={ArtistAlbums} />
          </Switch>
        </BrowserRouter> 
      </AppContainer>

    );
  }
}


export default App;
