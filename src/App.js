import React, { Component } from 'react';
import './App.css';

import Search from './components/Search'
import LoginScreen from './components/LoginScreen'
import styled from 'styled-components/macro';
import Middle from "./components/middle";
import { CusNavbar } from './components/CusNavbar';
import ArtistAlbums from './components/ArtistAlbums';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


const AppContainer = styled.div`

  height: max-content;
  min-height: 100vh;
  color: white;
  background-color: black;
`;
class App extends Component {





  render() {
    return (

      <AppContainer>
        <CusNavbar />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Middle} title="Search Artist" />
            <Route path='/login' exact component={LoginScreen} title="Login" />
            <Route path='/search/artist' exact component={Search} />
            <Route path='/AlbumArtist/:ArtistId/:ArtistName' exact component={ArtistAlbums} />
          </Switch>
        </BrowserRouter>
      
      </AppContainer>

    );
  }
}


export default App;
