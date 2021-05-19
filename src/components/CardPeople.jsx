import '../scss/Card.scss';


const CardPeople = (props) => {


  return (


    <>

      <div className="col-lg-3 col-md-4 d-flex align-items-stretch">
        <div className="course-item">
         <div className="course-content">
         <img src={props.src} className="img-fluid" alt="..." />
         
            <h3><a href="course-details.html">{props.name}</a></h3>
            <div className="trainer d-flex justify-content-between align-items-center">
              <h4>voir plus</h4>
              <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;50
              &nbsp;&nbsp;
              <i className="bx bx-heart"></i>&nbsp;65
            </div>

            </div>

          </div>
        </div>
      </div>





    </>

  );
}
export default CardPeople;

