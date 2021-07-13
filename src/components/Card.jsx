import '../scss/CardCasting.scss';


const Card = (props) => {


    const showprofil = (id) => {
        props.showprofilfromchild(id);
    }


    return (


        <>

            {/* 

            <div>
                <div className="image-flip hover-shadow" onClick={()=>showprofil(props.my_id)}>
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className="img-fluid" src={props.src} alt="card image" /></p>
                                    <h4 className="card-title"> {props.titre} </h4>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4 card_resume_block">
                                    <h4 className="card-title">{props.titre}</h4>
                                    <p className="card-text card_resume"> {props.resume}{props.my_id} </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="d-flex align-items-center justify-content-center maincard" onClick={() => showprofil(props.my_id)}>

                <div className="course-item">
             

                    <div className="course-content d-flex flex-column">
                    <a href="#cover">
                        <div className="course_image">
                            <img className="img-fluid" src={props.src} alt="card image" />

                        </div>
                        </a>

                        <h3><a href="course-details.html">{props.titre}</a></h3>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <h4>voir plus</h4>
                            <div className="trainer-rank d-flex align-items-center">
                                <i className="bx bx-user"> </i>&nbsp;50 &nbsp;&nbsp;
                                <i className="bx bx-heart"></i>&nbsp;65
                          </div>
                            <div className="movieid">{props.my_id}</div>
                        </div>

                    </div>
                </div>
            </div>




        </>

    );
}
export default Card;