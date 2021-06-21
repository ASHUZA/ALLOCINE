// import '../scss/Videoslider.scss';



// const Videoslider = (props) => {
 

// $.js = function (el) {
//    return $('[data-js=' + el + ']')
// };

// function carousel() {
//    $.js('timeline-carousel').slick({
//       infinite: false,
//       arrows: true,
//       arrows: true,
//       prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div>Previous</div><svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/> </svg></div></div>',
//       nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"> <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/> </svg> <div>Next</div></div></div>',
//       dots: true,
//       autoplay: false,
//       speed: 1100,
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       responsive: [
//          {
//             breakpoint: 800,
//             settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1
//             }
//          }]
//    });
// }

// carousel();


 
//    return (

//       <>


//          <section className="timeline-carousel">
//             <div className="container">
//                <div className="row">
//                   <div className="col-8 offset-2 text-center mb-5">
//                      <h1>Horizontal timeline</h1>
//                      <p className="lead text-muted">Below is a concept of a horizontal timeline slider. You can drag the slides or click on the previous and next buttons.</p>
//                   </div>
//                </div>
//             </div>
//             <div className="timeline-carousel__item-wrapper" data-js="timeline-carousel">


//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2001-2003</span>
//                      <span className="month">Eget felis eget nunc lobortis mattis</span>
//                      <p>Eget felis eget nunc lobortis mattis aliquam faucibus. Viverra nam libero justo laoreet sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Nam libero justo laoreet sit amet cursus sit amet. Risus sed vulputate odio ut enim blandit. Quam adipiscing vitae proin sagittis nisl rhoncus.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>



//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2003</span>
//                      <span className="month">Tristique magna sit amet</span>
//                      <p>Tristique magna sit amet purus gravida quis blandit turpis.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>



//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2003</span>
//                      <span className="month">Mauris pellentesque pulvinar pellentesque habitant</span>
//                      <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cursus in hac habitasse platea dictumst quisque. Ipsum dolor sit amet consectetur adipiscing elit. </p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>



//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2004</span>
//                      <span className="month">Cum sociis natoque penatibus</span>
//                      <p>Cum sociis natoque penatibus et magnis dis. Interdum velit laoreet id donec ultrices tincidunt arcu non. Lorem sed risus ultricies tristique. Dui vivamus arcu felis bibendum ut. Tortor id aliquet lectus proin nibh nisl condimentum id.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>



//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <div className="pointer"></div>
//                      <span className="month">Dictumst vestibulum rhoncus est</span>
//                      <p>Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Posuere ac ut consequat semper.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>

//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2005</span>
//                      <span className="month">Id nibh tortor id aliquet</span>
//                      <p>Nunc eget lorem dolor sed viverra. Id nibh tortor id aliquet. Sed blandit libero volutpat sed cras. Fermentum posuere urna nec tincidunt praesent. Id ornare arcu odio ut sem nulla pharetra diam.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>


//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2006</span>
//                      <span className="month">Pulvinar neque laoreet suspendisse</span>
//                      <p>Pulvinar neque laoreet suspendisse interdum consectetur. Libero volutpat sed cras ornare. Ac auctor augue mauris augue.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>


//                <div className="timeline-carousel__item">
//                   <div className="timeline-carousel__image">
//                      <div className="media-wrapper media-wrapper--overlay" style="background: url('https://via.placeholder.com/550x320/171717/cccccc?text=550x320') center center; background-size:cover;"></div>
//                   </div>
//                   <div className="timeline-carousel__item-inner">
//                      <span className="year">2007</span>
//                      <span className="month">Egestas quis ipsum</span>
//                      <p>Non odio euismod lacinia at. Egestas quis ipsum suspendisse ultrices gravida. Dui nunc mattis enim ut tellus elementum sagittis vitae. Lectus quam id leo in vitae turpis massa sed elementum. Ridiculus mus mauris vitae ultricies leo integer malesuada. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.</p>
//                      <a href="#" className="read-more">Read more</a>
//                   </div>
//                </div>


//             </div>
//          </section>


//       </>
//    );

// }

// export default Videoslider;
