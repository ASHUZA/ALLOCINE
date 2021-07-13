
import Cover from '../components/Cover';
import Header from '../components/Header';
import Card from '../components/Card'
import CardBlock from '../components/CardBlock';
import SectionProfil from '../SectionProfil';
import SectionMovies from '../SectionMovies';
import SectionFooter from '../SectionFooter';
import SectionCarousel from '../SectionCarousel';
import SectionVideo from '../SectionVideo';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PageTv = (props) => {



  const getidmovies = (e) => {
    setMyId(e)

  }

  const My_apikey = "2e352e05a7d8b0a12370c4ba41e55909";


  // INSERTION DES SERIES

  const [dataTv, setdataTv] = useState([])
  useEffect(() => {
    const recuperationdataTv = async () => {
      //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=en-US&page=1")
      const resultatTv = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${My_apikey}&language=en-US&page=1`)


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
      resumeTv: Tv.overview

    };

  })






  //insertion profil

  const [dataProfil, setdataProfil] = useState([])
  const [my_id, setMyId] = useState("")
  useEffect(() => {
    const recuperationdataProfil = async () => {
      //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=en-US&page=1")
      const resultatProfil = await axios(`https://api.themoviedb.org/3/tv/${my_id}?api_key=${My_apikey}&language=en-US`)

      setdataProfil(resultatProfil.data);

      // console.log(resultatProfil.data.original_title)
    }
    recuperationdataProfil()
  }, [my_id])


  // INSERTION TRALER


  const [dataTrailer, setdataTrailer] = useState([])
  useEffect(() => {
    const recuperationdataTrailer = async () => {
      const resultatTrailer = await axios(`https://api.themoviedb.org/3/tv/${my_id}/videos?api_key=${My_apikey}&language=en-US`)

      setdataTrailer(resultatTrailer.data.results);
    }
    recuperationdataTrailer()
  }, [my_id])





  return (


    <>

      <Cover
        src={dataProfil.backdrop_path}
        titre={dataProfil.original_name}
        release_date={dataProfil.last_air_date}



        homepage = {dataProfil.homepage}

        budget= {dataProfil.type}


        popularity={dataProfil.popularity}

        vote_count={dataProfil.vote_count}
        infoplus ={"Type"}
     

      />


      <SectionProfil
        src={dataProfil.poster_path}

      />





      <div className="container-fluid videogb">
        <div className="container">
          <div className="row SectionVideo">


            {dataTrailer.map(function (element) {
              return (


                <SectionVideo
                  src1={element.key}
                />

              );
            })}





          </div>

        </div>
      </div>



{/* 
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

                    showprofilfromchild={getidmovies}
                    my_id={element.matriculeTv}
                    titre={element.titreTv}
                    resume={element.resumeTv}
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


      </div> */}





      <div className="containe d-flex align-items-center blockserie  flex-column">
        <div className="container blockgenres">

          

          {/* SEARCH PART */}


          <div className="InputSearch">
            <input className="c-checkbox" type="checkbox" id="checkbox" />
            <div className="c-formContainer">
              <form className="c-form" action="">
                <input className="c-form__input" placeholder="" type="text"/>
                <label className="c-form__buttonLabel" for="checkbox">
                  <button className="c-form__button" type="button">Chercher</button>
                </label>
                <label className="c-form__toggle" for="checkbox" data-title="Chercher une serie"></label>
              </form>
            </div>
          </div>




        </div>


        <div className="container courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <h2> SERIES</h2>
              <p> SERIES populaire </p>
            </div>
            <div className="row SectionMovies">
              <div className="col-4 col-sm-4 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex flex-wrap cardMovies">

                
              {Tvs.map(function (element) {
                return (
                  <Card

                    showprofilfromchild={getidmovies}
                    my_id={element.matriculeTv}
                    titre={element.titreTv}
                    resume={element.resumeTv}
                    src={`https://image.tmdb.org/t/p/original${element.image_principalTv}`}
                  />
                );
              })}



              </div>

            </div>
          </div>
        </div>


        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button class="favorite styled" type="button">
              Precedent
</button>
          </div>
          <div className="btn-group me-2" role="group" aria-label="Second group">

            <button class="favorite styled" type="button">
              1
</button>
          </div>
          <div className="btn-group" role="group" aria-label="Third group">
            <button class="favorite styled" type="button">  Suivant
</button>

          </div>
        </div>


      </div>






      <SectionFooter />



    </>

  );
}
export default PageTv;