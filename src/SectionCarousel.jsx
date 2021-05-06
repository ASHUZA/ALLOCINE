import './scss/SectionCarousel.scss';

function SectionCarousel() {
    return (
        <>

<div className="container-fluid mb-5 carouselbg">

<div className="container p-5">
<div
  id="carouselBasicExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>

  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>


  <div className="carousel-inner">

    <div className="carousel-item active">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"
        className="d-block w-100"
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>


    <div className="carousel-item">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/image_bf5a4c23.jpeg?region=0%2C0%2C1800%2C968"
        className="d-block w-100"
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    


    <div className="carousel-item">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/image_aeb25850.jpeg?region=0%2C0%2C1800%2C968"
        className="d-block w-100"
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  
  

  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
        </>

    );
}
export default SectionCarousel;