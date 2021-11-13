import React from 'react';
import { useSelector } from 'react-redux';


const Home  = () =>{
    const title = useSelector( (state) => state.MainPage.title);
    return(
        <h1>{title}</h1>    
    )
}

export default Home;