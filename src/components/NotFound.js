import React,{useEffect} from 'react';


export const NotFound = () => {
useEffect(() => {
    setTimeout(()=>{
window.location.replace("http://localhost:3000/login");
    },1000)
})
    return (

    <div className="notFound"> 404 NOT FOUND </div>
    );
}