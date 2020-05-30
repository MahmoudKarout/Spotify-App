import React, { Component } from 'react';
import { getHashParams } from '../utils';
import Loader from '../components/icons/loader'


class Authenticator extends Component {
    componentDidMount() {
        sessionStorage.setItem("access_token", getHashParams().access_token);
        window.location.replace("http://localhost:3000/search/artist");
    }
    render() {
        return (
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                
                    <Loader/>
               
            </div>
        );
    }


}
export default Authenticator;