import '../scss/CardCasting.scss';


const CardCasting = (props) => {


  return (


    <>

      <div className="col-lg-3 col-md-4 d-flex align-items-stretch CardCastingbg">
        <div className="course-item CardCasting__block">
          <img src= {props.src} className="img-fluid" alt="..." />
          <div className="course-content CardCasting__items">

            <h3><a href="course-details.html">{props.name}</a></h3>
              <h4>voir plus</h4>
             
           

          </div>
        </div>
      </div>





    </>

  );
}
export default CardCasting;

