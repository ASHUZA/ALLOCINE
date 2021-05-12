import Card from './components/Card';
import CardCasting from './components/CardCasting';
import './scss/SectionProfil.scss';



const SectionProfil = (props) => {
    return (

        <>

            <div className="container">
                <div className="row sectionprofil">

                    <div className="col-4 col-sm-4 col-sd-12 col-lg-12 mt-5 mb-5 cardprofil">


                        <div className="row">
                            <div className="col-4 col-sm-4 col-sd-4 col-lg-4 col-xl-4cardimg">
                                <p><img className=" img-fluid" src={`https://image.tmdb.org/t/p/original${props.src}`} alt="card image" /></p>
                            </div>

                            <div className="col-4 col-sm-4 col-sd-4 col-lg-4 cardinfo">



                                <h2> <span>{props.titre}</span></h2>
                                <div>                           <i className="bx bx-user"></i>&nbsp;50&nbsp;&nbsp;
                                    <i className="bx bx-heart"></i>&nbsp;65
                                    </div>


                                <p>  {props.overview}</p>


                                <p>RELEASE DATE</p>

                                <h2>{props.release_date}</h2>














                                <h2>CAST</h2>
                                <p>James McAvoy, Michael Fassbender, Jennifer Lawrence, Nicholas Hoult, Sophie Turner, Tye Sheridan, Alexandra Shipp </p>


                            </div>
                            <div className="col-4 col-sm-4 col-sd-4 col-lg-4 cardinfo">




                                <h2> <span>{props.titre}</span></h2>
                                <div>                           <i className="bx bx-user"></i>&nbsp;50&nbsp;&nbsp;
                                    <i className="bx bx-heart"></i>&nbsp;65
                                    </div>


                                <p>  {props.overview}</p>


                                <p>RELEASE DATE</p>

                                <h2>{props.release_date}</h2>



                            </div>

                            <div className="col-12 col-sm-12 col-sd-12 col-lg-12">



                                <div className="row casting_profil">
                                    <div>
                                    <h2>CAST</h2>
                                    </div>
                                    <div className="col-12 col-sm-12 col-sd-12 col-lg-12 col-xl-12 mb-2 d-flex justify-content-evenly flex-wrap cardMovies bg-aqua">

                                        <CardCasting></CardCasting>


                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>

                                        <CardCasting></CardCasting>
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