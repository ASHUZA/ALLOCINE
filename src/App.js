
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
  const [dataMovies, setdataMovies] = useState([])
  useEffect(() => {
    const recuperationdata = async () => {
 //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")
      const resultatMovies = await axios("https://api.themoviedb.org/3/tv/popular?api_key=2e352e05a7d8b0a12370c4ba41e55909&language=en-US&page=1")


      setdataMovies(resultatMovies.data.results);
    }
    recuperationdata()
  }, [])



  let films = dataMovies.map(movie => {
    return {
      matricule: movie.id,
      image_profil: movie.backdrop_path,
      titre: movie.title,
      titre: movie.name,
      image_principal: movie.poster_path,
      resume: movie.overview

    };

  })
  console.log(films)

  return (



    <>


      <Header />
      <Cover />
      <SectionProfil />
      <SectionVideo />

      <SectionMovies
        type="FilmS"
        detail="Film populaire" />

      <SectionCarousel />


      <div className="containe d-flex align-items-center blockserie  flex-column">

      <div className="container bockcard">
        <div className="section-title" data-aos="fade-up">
          <h2> SERIES</h2>
          <p> SERIES populaire </p>
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


      <SectionFooter />

    </>
  );
}

export default App;
