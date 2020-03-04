
import React from 'react';


export const SearchBar = ({ onSubmit, value, onChange,renderSearchResults}) => {
    return (
        <div className="container-fluid" style={{ color: "#191414", textAlign: "center" }}>
                <h2 className="heading" style={{ color: "white" }}>Search Spotify Artist</h2>
                <form onSubmit={onSubmit} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        onSubmit(event);
                    }
                }}>
                    <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                        <div className="input-group">
                            <input type="search" style={{ height: "inherit" }} value={value} onChange={onChange} placeholder="Which Artist are you looking for?" className="form-control rounded rounded-pill bg-light" />
                            <div className="input-group-append" style={{ alignItems: "center" }}>
                                <button id="button-addon1" type="submit" className="btn btn-link " style={{ color: "#1DB954", fontSize: "30px" }}><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
                {renderSearchResults}
            </div>
    );
}
