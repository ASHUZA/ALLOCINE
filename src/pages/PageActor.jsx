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
      <section id="popular-courses" className="courses">
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


<SectionFooter/>
    </>

  );
}
export default PageActor;