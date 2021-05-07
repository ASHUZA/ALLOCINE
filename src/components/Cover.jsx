import '../scss/Cover.scss';


const Cover = (props) => {
    return (

        <>





            <div id="intro" className="bg-image w-100 shadow-1-strong secttioncover">

                <img
                  //  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_hero_banner_b26f8933.jpeg"
                  
                    src={`https://image.tmdb.org/t/p/original${props.src}`}
                 
                    
                    className="d-block w-100"
                    alt="..."
                />

                


                <div className="mask d-flex justify-content-evenly" >
                    {/* 


                src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968" */}

                    <div className="container-fluid covercontainer d-flex align-items-center justify-content-center text-center h-20">
                        <div className="justify-content-center text-white">
                            <h1 className="mb-0">{props.titre}</h1>
                            <h5 className="mb-2"> 1h 32min {props.release_date}, 2020 Horror, Originals, Thriller </h5>
                            <a
                                className="btn btn-outline-light btn-lg m-2"
                                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                                role="button"
                                rel="nofollow"
                                target="_blank"
                            >SHOP NOW</a
                            >
                            <a



                                className="btn btn-outline-light btn-lg m-2"
                                href="https://youtu.be/azvR__GRQic"
                                target="_blank"
                                role="button"
                            >WATCH TRAILER</a
                            >
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Cover;