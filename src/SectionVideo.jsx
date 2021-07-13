import './scss/SectionProfil.scss';


const SectionVideo = (props) => {
    return (


        <>

                    <div className="col-12 col-sm-12 col-sd-12 col-lg-12 col-xl-6 d-flex justify-content-md-center align-items-center cardvideo">


                        <div class="embed-responsive embed-responsive-16by9 videoplay">

                      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.src1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        </div>


                        
                    </div>
       </>

    );
}
export default SectionVideo;