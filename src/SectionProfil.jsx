import Card from './components/Card';
import CardCasting from './components/CardCasting';
import './scss/SectionProfil.scss';
import SectionCarousel from './SectionCarousel';



const SectionProfil = (props) => {
    return (

        <>

            <div className="container-fluid">
                <div className="row sectionprofil">

                    <div className="col-4 col-sm-4 col-sd-12 col-lg-12 mb-5 cardprofil">


                        <div className="row profil_block">


                            <div className="col-12 col-sm-12 col-sd-12 col-lg-12 cardinfo">



                                <h2> <span>{props.titre}</span></h2>


                                <p>  {props.overview}</p>


                                <p>RELEASE DATE</p>

                                <h2>{props.release_date}</h2>
                                <br />
                                <div>
                                    <i className="bx bx-user"></i>&nbsp;{props.vote_count}&nbsp;&nbsp;
                                    <i className="bx bx-heart"></i>&nbsp;{props.popularity}
                                </div>

                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </>

    );
}
export default SectionProfil;