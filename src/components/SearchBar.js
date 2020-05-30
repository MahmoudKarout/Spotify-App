import React from 'react';


export const SearchBar = ({ handleOnInputChange, query, message }) => {
    return (
       
       <div className="container-fluid p-0" style={{ color: "#191414", textAlign: "start" }}>
            <div className=" p-1 bg-light rounded rounded-pill shadow-sm ">
                <div className="input-group">
                    <input type="search" style={{ height: "inherit" }} value={query} onChange={handleOnInputChange} placeholder="which artist are you looking for?" className="form-control rounded rounded-pill bg-light" />
                    <div className="input-group-append" style={{ alignItems: "center" }}>
                        <button id="button-addon1" type="submit" className="btn btn-link " style={{ color: "#1DB954", fontSize: "30px" }}><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            <p style={{ color: "red", marginBottom:"0px !important" }}>{message ? message : ''}</p>
        </div>
    );
}