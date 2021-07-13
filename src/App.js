
import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageMovies from './pages/PageMovies';
import PageTv from './pages/PageTv';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom"
import Menu from './Menu';
import PageActor from './pages/PageActor';
import PageContact from './pages/PageContact'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coverslider from './components/coverslider';



function App() {



  return (

    <>

      <BrowserRouter>
     
        <Menu
     />

{/* 
<Menu
showprofilfromchild={getidmovies}
     /> */}
        <switch>
        
        {/* <Route exact path="/" component={coverslider} /> */}
         
          <Route exact path="/" component={PageMovies} />
          <Route path="/PageTv" component={PageTv} />
          <Route path="/PageActor" component={PageActor} />
          <Route path="/PageContact" component={PageContact} />
     
     
        </switch>

      </BrowserRouter>

    </>
  );
}

export default App;
