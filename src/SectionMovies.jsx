import './scss/SectionMovies.scss';

import CardBlock from './components/CardBlock';
import Card from './components/Card';

    const SectionMovies = (props) => {
    return (

        <>

            <div className="container">

            <div className="section-title" data-aos="fade-up">
                <h2> {props.type}</h2>
                <p> {props.detail} </p>
            </div>
                <div className="row SectionMovies">
                
                <div className="col-4 col-sm-4 col-sd-12 col-lg-12 col-xl-12 mb-5 d-flex justify-content-evenly flex-wrap cardMovies">
                <Card

               titre="Logan Official"
                src="https://image.tmdb.org/t/p/original/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg"
                />
              
                <Card

               titre="Logan Official"
               src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                
                />
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
               
                      </div>


                
                </div>
            </div>


        </>

    );
}
export default SectionMovies;