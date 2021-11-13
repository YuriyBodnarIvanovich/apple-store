import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../../components/MainPage/MainPage';

const MainPage = () =>{
    return(  
        <BrowserRouter>
            <Route path='/' component={Home}/>
        </BrowserRouter>   
    )
}

export default MainPage;