import '../scss/PageActor.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPeople from '../components/CardPeople'
import Cover from '../components/Cover'
import SectionFooter from '../SectionFooter';

const PageActor = (props) => {

  //insertion profil


  const My_apikey = "2e352e05a7d8b0a12370c4ba41e55909";

  const [dataProfil, setdataProfil] = useState([])
  const [my_id, setMyId] = useState("6384")
  //setMyId = "";

  useEffect(() => {
    const recuperationdataProfil = async () => {
      //     const resultatMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=${My_apikey}&language=en-US&page=1")
      const resultatProfil = await axios(`https://api.themoviedb.org/3/person/popular?api_key=${My_apikey}&language=en-US&page=1
     `)


      setdataProfil(resultatProfil.data.results);

      // console.log(resultatProfil.data.original_title)
    }
    recuperationdataProfil()
  }, [my_id])



  return (


    <>
<Cover
src = "/3lTxcQqYvtzMpTAEgTbO5RkE4iz.jpg"
/>
      {/* <section id="popular-courses" className="courses">
        <div className="container" data-aos="fade-up">

          <div className="section-title acteurs_title">
            <h2>Acteurs</h2>
            <p>Acteurs populaires</p>
          </div>

          <div className="row" data-aos="zoom-in" data-aos-delay="100">



            {dataProfil.map(function (element) {
              return (

                <>
                  <CardPeople

                    name={element.name}

                    src={`https://image.tmdb.org/t/p/original${element.profile_path}`}

                  />

                </>
              );
            })}

          </div>

        </div>
      </section>



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
                <label className="c-form__toggle" for="checkbox" data-title="Chercher un acteur"></label>
              </form>
            </div>
          </div>




        </div>

        <div className="container courses">
          <div className="container" data-aos="fade-up">
          
          <div className="section-title acteurs_title">
            <h2>Acteurs</h2>
            <p>Acteurs populaires</p>
          </div>
  <div className="row SectionMovies">
              <div className="col-4 col-sm-4 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex flex-wrap cardMovies">


              {dataProfil.map(function (element) {
              return (

                <>
                  <CardPeople

                    name={element.name}

                    src={`https://image.tmdb.org/t/p/original${element.profile_path}`}

                  />

                </>
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








<SectionFooter/>
    </>

  );
}
export default PageActor;