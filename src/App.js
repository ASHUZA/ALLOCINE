
import logo from './logo.svg';
import './App.scss';
import Cover from './components/Cover';
import Header from './components/Header';
import Card from './components/Card'
import CardBlock from './components/CardBlock';
import SectionProfil from './SectionProfil';
import SectionMovies from './SectionMovies';
import SectionFooter from './SectionFooter';
import SectionCarousel from './SectionCarousel';
import SectionVideo from './SectionVideo';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {


  //INSERTION DES FILMS 

  const [dataMovies, setdataMovies] = useState([])
  useEffect(() => {
    const recuperationdata = async () => {
      const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")
   

      setdataMovies(resultatMovies.data.results);
    }
    recuperationdata()
  }, [])



  let films = dataMovies.map(movie => {
    return {
      matricule: movie.id,
      image_profil: movie.backdrop_path,
      titre: movie.title,
      
      image_principal: movie.poster_path,
      resume: movie.overview

    };

  })
  console.log(films)


  // INSERTION DES SERIES

  const [dataTv, setdataTv] = useState([])
  useEffect(() => {
    const recuperationdataTv = async () => {
 //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")
      const resultatTv = await axios("https://api.themoviedb.org/3/tv/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")


      setdataTv(resultatTv.data.results);
    }
    recuperationdataTv()
  }, [])



  let Tvs = dataTv.map(Tv => {
    return {
      matriculeTv: Tv.id,
      image_profilTv: Tv.backdrop_path,
      titreTv: Tv.name,
      image_principalTv: Tv.poster_path,
      resumeTv : Tv.overview

    };

  })
  console.log(Tvs)


//insertion profil

  const [dataTv, setdataTv] = useState([])
  useEffect(() => {
    const recuperationdataTv = async () => {
 //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")
      const resultatTv = await axios("https://api.themoviedb.org/3/tv/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")


      setdataTv(resultatTv.data.results);
    }
    recuperationdataTv()
  }, [])



  let Tvs = dataTv.map(Tv => {
    return {
      matriculeTv: Tv.id,
      image_profilTv: Tv.backdrop_path,
      titreTv: Tv.name,
      image_principalTv: Tv.poster_path,
      resumeTv : Tv.overview

    };

  })
  console.log(Tvs)



  return (



    <>


      <Header />
      <Cover />
      <SectionProfil />
      <SectionVideo />

      


<div className="containe d-flex align-items-center blockserie  flex-column">

<div className="container bockcard">
  <div className="section-title" data-aos="fade-up">
    <h2> FILMS</h2>
    <p> FILMS POPULAIRE </p>
  </div>
  <div className="row SectionMovies">
    <div className="col-4 col-sm-4 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex justify-content-evenly flex-wrap cardMovies">


      {films.map(function (element) {
        return (
          <Card
            titre={element.titre}
            resume = {element.resume}
            src={`https://image.tmdb.org/t/p/original${element.image_principal}`}
          />
        );
      })}


    </div>

  </div>
  
</div>


<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
<div className="btn-group me-2" role="group" aria-label="First group">
<button type="button" className="btn btn-primary">1</button>
<button type="button" className="btn btn-primary">2</button>
<button type="button" className="btn btn-primary">3</button>
<button type="button" className="btn btn-primary">4</button>
</div>
<div className="btn-group me-2" role="group" aria-label="Second group">
<button type="button" className="btn btn-primary">5</button>
<button type="button" className="btn btn-primary">6</button>
<button type="button" className="btn btn-primary">7</button>
</div>
<div className="btn-group" role="group" aria-label="Third group">
<button type="button" className="btn btn-primary">8</button>
</div>
</div>


</div>



      <SectionCarousel />


      <div className="containe d-flex align-items-center blockserie  flex-column">

      <div className="container bockcard">
        <div className="section-title" data-aos="fade-up">
          <h2> SERIES</h2>
          <p> SERIES populaire </p>
        </div>
        <div className="row SectionMovies">
          <div className="col-4 col-sm-4 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex justify-content-evenly flex-wrap cardMovies">


            {Tvs.map(function (element) {
              return (
                <Card
                  titre={element.titreTv}
                  resume = {element.resumeTv}
                  src={`https://image.tmdb.org/t/p/original${element.image_principalTv}`}
                />
              );
            })}


          </div>

        </div>
        
      </div>


      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group me-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary">1</button>
    <button type="button" className="btn btn-primary">2</button>
    <button type="button" className="btn btn-primary">3</button>
    <button type="button" className="btn btn-primary">4</button>
  </div>
  <div className="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-primary">5</button>
    <button type="button" className="btn btn-primary">6</button>
    <button type="button" className="btn btn-primary">7</button>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btn-primary">8</button>
  </div>
</div>


</div>


      <SectionFooter />

    </>
  );
}

export default App;
