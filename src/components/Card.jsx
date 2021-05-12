import '../scss/Card.scss';


const Card = (props) => {


    const  showprofil = (id)=>{
        props.showprofilfromchild(id);
    }


    return (


        <>



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
            </div>




        </>

    );
}
export default Card;