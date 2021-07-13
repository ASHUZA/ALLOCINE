
import logo from '../logo.svg';
import '../App.scss';
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
import BtnGenres from '../components/BtnGenres';
import Menu from '../Menu';
import '../scss/btn.scss';
import CardCasting from '../components/CardCasting';
import InputSearch from '../components/InputSearch';
import sliderbtn from '../components/sliderbtn';
import coverslider from '../components/coverslider';







function PageMovies() {


  const getidmovies = (e) => {
    setMyId(e)
  };





  const geturlgenre = (My_genre_id) => {
    //alert(My_genre_id)
    urlmovies ? seturlmovies(`https://api.themoviedb.org/3/discover/movie?api_key=${My_apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${My_genre_id}&with_watch_monetization_types=flatrate`) : urlmovies(`https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=fr-FR&page=1`)
  }

  const My_apikey = "2e352e05a7d8b0a12370c4ba41e55909";






  //INSERTION DES FILMS 

  //1. FONCTION POUR APPELLER LE MOT A CHERCHER




  const [searchMovieWord, setsearchMovieWord] = useState("")

  const searchingMovies = (e) => {

    setsearchMovieWord(e.target.value

    )
    console.log(searchMovieWord)
  }

  // 2. URL RECHRECHE ET PAR DEFAUT

  //const resultatMovies = await axios(urlMovies)





  const [dataMovies, setdataMovies] = useState([])
  const [urlmovies, seturlmovies] = useState("")
  useEffect(() => {
    const recuperationdata = async () => {


      const UrlMoviesdefault = `https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=fr-FR&page=1`
      let urlMovieschangeWord = `https://api.themoviedb.org/3/search/movie?api_key=${My_apikey}&language=fr-FR&query=${searchMovieWord}&page=1&include_adult=false`


      let urlMovies = searchMovieWord ? urlMovieschangeWord : UrlMoviesdefault


      const resultatMovies = await axios(urlMovies)
      setdataMovies(resultatMovies.data.results);
    }
    recuperationdata()
  }, [searchMovieWord])

  const nextpage = () => {
    //  setPagenumber(Pagenumber + 1)
  };


  let films = dataMovies.map(movie => {
    return {
      matricule: movie.id,
      image_profil: movie.backdrop_path,

      titre: movie.title,

      image_principal: movie.poster_path,
      resume: movie.overview

    };

  })







  // INSERTION DES SERIES

  const [dataTv, setdataTv] = useState([])
  useEffect(() => {
    const recuperationdataTv = async () => {
      //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=fr-FR&page=1")
      const resultatTv = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${My_apikey}&language=fr-FR&page=1`)


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
      //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=fr-FR&page=1")



      const Urlprofildefault = `https://api.themoviedb.org/3/movie/246655?api_key=${My_apikey}&language=fr-FR`
      let urlprofilchangeid = `https://api.themoviedb.org/3/movie/${my_id}?api_key=${My_apikey}&language=fr-FR`

      let urlprofil = my_id ? urlprofilchangeid : Urlprofildefault
      const resultatProfil = await axios(urlprofil)


      setdataProfil(resultatProfil.data);
    }
    recuperationdataProfil()
  }, [my_id])





  //INSERTION TRALER


  const [dataTrailer, setdataTrailer] = useState([])
  useEffect(() => {
    const recuperationdataTrailer = async () => {


      const UrlTrailerdefault = `https://api.themoviedb.org/3/movie/246655/videos?api_key=${My_apikey}&language=fr-FR`
      let urlTrailerchangeid = `https://api.themoviedb.org/3/movie/${my_id}/videos?api_key=${My_apikey}&language=fr-FR`

      let urlTrailer = my_id ? urlTrailerchangeid : UrlTrailerdefault
      const resultatTrailer = await axios(urlTrailer)


      setdataTrailer(resultatTrailer.data.results);
    }
    recuperationdataTrailer()
  }, [my_id])


  //INSERTION ACTEURS (Cast)


  const [dataCast, setdataCast] = useState([])
  useEffect(() => {
    const recuperationdataCast = async () => {


      const UrlCastdefault = `https://api.themoviedb.org/3/movie/246655/credits?api_key=${My_apikey}&language=fr-FR`
      let urlCastchangeid = `https://api.themoviedb.org/3/movie/${my_id}/credits?api_key=${My_apikey}&language=fr-FR`

      let urlCast = my_id ? urlCastchangeid : UrlCastdefault
      const resultatCast = await axios(urlCast)



      setdataCast(resultatCast.data.cast);
    }
    recuperationdataCast()
  }, [my_id])



  //INSERTION MOVIES GENRE

  const [dataGenre, setdataGenre] = useState([])
  useEffect(() => {
    const recuperationdataGenre = async () => {
      const resultatGenre = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${My_apikey}&language=fr-FR`)


      setdataGenre(resultatGenre.data.genres);
    }
    recuperationdataGenre()
  }, [])




  return (


    <>




      {
        console.log(my_id)}

      {/* {alert(Pagenumber)}  */}


      <Cover
        src={dataProfil.backdrop_path}
        titre={dataProfil.original_title}
        release_date={dataProfil.release_date}
        homepage={dataProfil.homepage}

        budget={dataProfil.budget}

        release_date={dataProfil.release_date}

        popularity={dataProfil.popularity}

        vote_count={dataProfil.vote_count}
        infoplus={"Budget"}


      //   onload={showtoprated()}
      />



      <coverslider></coverslider>







      <div className="containe d-flex align-items-center blockserie  flex-column">
        <div className="container blockgenres">

          {dataGenre.map(function (element) {
            return (

              <BtnGenres

                showgenresfromchild={geturlgenre}
                genre_id={element.id}
                genre_name={element.name}

              />
            );
          })}
        </div>

        {/* SEARCH PART */}


        <div className="InputSearch">
          <input className="c-checkbox" type="checkbox" id="checkbox" />
          <div className="c-formContainer">
            <form className="c-form" action="">
              <input className="c-form__input" placeholder="" type="text" onChange={searchingMovies} />
              <label className="c-form__buttonLabel" for="checkbox">
                <button className="c-form__button" type="button">Chercher</button>
              </label>
              <label className="c-form__toggle" for="checkbox" data-title="Chercher un film"></label>
            </form>
          </div>


        </div>


        <div className="container courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <h2> FILMS</h2>
              <p> FILMS POPULAIRE </p>
            </div>
            <div className="row d-flex justify-content-center SectionMovies">
              <div className="col-6 col-sm-10 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex flex-wrap cardMovies">


                {films.map(function (element) {
                  return (
                    <Card
                      showprofilfromchild={getidmovies}
                      my_id={element.matricule}
                      titre={element.titre}
                      resume={element.resume}

                      homepage={element.homepage}
                      src={`https://image.tmdb.org/t/p/original${element.image_principal}`}
                    />
                  );
                })}


              </div>

            </div>
          </div>
        </div>


        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button class="favorite styled" type="button" onClick={() => nextpage()}>
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

      <Cover
        src={dataProfil.backdrop_path}
        titre={dataProfil.original_title}
        release_date={dataProfil.release_date}
        homepage={dataProfil.homepage}

        budget={dataProfil.budget}

        release_date={dataProfil.release_date}

        popularity={dataProfil.popularity}

        vote_count={dataProfil.vote_count}
        infoplus={"Budget"}


      //   onload={showtoprated()}
      />

      <SectionProfil
        src={`https://image.tmdb.org/t/p/original${dataProfil.backdrop_path}`}

        // src={dataProfil.backdrop_path}
        titre={dataProfil.original_title}
        overview={dataProfil.overview}

        release_date={dataProfil.release_date}

        popularity={dataProfil.popularity}

        vote_count={dataProfil.vote_count}
      />




      <div className="container-fluid videogb">
        <div className="container">
          <div className="section-title mt-5" data-aos="fade-up">
            <h2> VIDEO</h2>
            <p> VIDEO TRAILLER </p>

            <sliderbtn></sliderbtn>
          </div>
          <div className="row SectionVideo">

            <div className="col-12 col-sm-12 col-sd-12 col-lg-12 col-xl-12 mb-2 d-flex  Cardtraillerscroller">

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

      </div>


      <div className="container section_cast">

        <div className="col-12 col-sm-12 col-sd-12 col-lg-12">

          <div className="row casting_profil">
            <div>
              <h2>CAST</h2>
            </div>
            <div className="col-12 col-sm-12 col-sd-12 col-lg-12 col-xl-12 mb-2 d-flex Cardcastingscroller">

              {dataCast.map(function (element) {
                return (
                  <CardCasting

                    name={element.name}
                    resume={element.resume}

                    homepage={element.homepage}
                    src={element.profile_path}

                  />

                );
              })}

            </div>
          </div>
        </div>

      </div>


    




      <SectionFooter />

    </>
  );
}

export default PageMovies;
