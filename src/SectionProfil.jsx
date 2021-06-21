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

                            <div className="col-5 col-sm-6 col-sd-5 col-lg-5 cardinfo">


                                <img className="image_profil_detail" src={props.src} alt="card image" />

                                <div>
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

                            <div className="col-5 col-sm-6 col-sd-5 col-lg-5 cardinfo">


                                <img className="image_profil_detail" src={props.src}  alt="card image" />

                                <div>
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
            </div>
        </>

    );
}
export default SectionProfil;