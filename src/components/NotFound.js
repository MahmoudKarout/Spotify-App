import React, { useEffect } from 'react';


export const NotFound = () => {
    useEffect(() => {

        window.location.replace("http://localhost:3000/login");

    })
    return (

        <div className="notFound"> </div>
    );
}