import '../scss/CardCasting.scss';
import profil from '../components/profil.jpg'


const CardCasting = (props) => {

  const urlImage=`https://image.tmdb.org/t/p/original${props.src}`

  return (




    <>

      <div className="col-lg-3 col-md-4 d-flex align-items-stretch CardCastingbg">
        <div className="course-item CardCasting__block">

         
         
          <img src={props.src ? urlImage : profil} className="img-fluid" alt="bg" />
         

         
         
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

