import './scss/SectionProfil.scss';


function SectionVideo() {

    return (

        <>
 <div className="container-fluid videogb">
            <div className="container">
                <div className="row SectionVideo">

                   

                    <div className="col-4 col-sm-4 col-sd-6 col-lg-6 col-xl-6 d-flex justify-content-md-center align-items-center cardvideo">


                        <div class="embed-responsive embed-responsive-16by9 videoplay">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/azvR__GRQic?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                        </div>

                    </div>


                    <div className="col-4 col-sm-4 col-sd-4 col-lg-6 col-xl-6 d-flex justify-content-md-center align-items-center cardvideo">


                        <div class="embed-responsive embed-responsive-16by9">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/azvR__GRQic?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>


                    </div>

                </div>
            </div>
        </>

    );
}
export default SectionVideo;