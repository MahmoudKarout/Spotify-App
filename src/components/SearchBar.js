import React from 'react';


export const SearchBar = ({ handleOnInputChange, query, message}) => {
    return (
        <div className="container-fluid" style={{ color: "#191414", textAlign: "center" }}>
                    <h2 className="heading" style={{ color: "white" }}>Search Spotify Artist</h2>

                    <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                        <div className="input-group">
                            <input type="search" style={{ height: "inherit" }} value={query} onChange={handleOnInputChange} placeholder="Which Artist are you looking for?" className="form-control rounded rounded-pill bg-light" />
                            <div className="input-group-append" style={{ alignItems: "center" }}>
                                <button id="button-addon1" type="submit" className="btn btn-link " style={{ color: "#1DB954", fontSize: "30px" }}><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <p style={{ color: "red" }}>{message ? message : ''}</p>

                </div>
    );
}