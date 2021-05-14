
import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionFilm from './SectionFilm';
import SectionSerie from './SectionSerie';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom"
import Menu from './Menu';
import SectionActeur from './SectionActeur';
import Contact from './components/Contact'



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
          <Route exact path="/SectionFilm" component={SectionFilm} />
          <Route path="/SectionSerie" component={SectionSerie} />
          <Route path="/SectionActeur" component={SectionActeur} />
          <Route path="/Contact" component={Contact} />
     
     
        </switch>

      </BrowserRouter>

    </>
  );
}

export default App;
