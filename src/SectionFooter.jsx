
import './scss/SectionFooter.scss';


function SectionFooter() {

    return (

        <>



<footer className="footerbg text-start text-white">

  
 
 <div className="container p-4 pb-0">

   <section className="">
     <form action="">

       <div className="row d-flex justify-content-center">


         <div className="col-md-5 col-12">
         <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search movies"
                                aria-label="Search"
                            />
              
                        </form>
         </div>



         <div className="col-auto">

           <button type="submit" className="btn btn-outline-light mb-4">
           search
           </button>
         </div>

       </div>

     </form>
   </section>

 </div>

 <div className="container p-4">

<div className="row">

  <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start mb-4 mb-md-0">
    <h5 className="text-uppercase">Footer Content</h5>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
      molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
      aliquam voluptatem veniam, est atque cumque eum delectus sint!
    </p>
  </div>


  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase">Categorie</h5>

    <ul className="list-unstyled mb-0">
      <li>
        <a href="#!" className="text-white">Action</a>
      </li>
      <li>
        <a href="#!" className="text-white">Fiction</a>
      </li>
      <li>
        <a href="#!" className="text-white">Drame</a>
      </li>
      <li>
        <a href="#!" className="text-white">Comedie</a>
      </li>
    </ul>
  </div>


  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase mb-0"></h5>
    <br/>

    <ul className="list-unstyled">
      <li>
        <a href="#!" className="text-white">A propos</a>
      </li>
      <li>
        <a href="#!" className="text-white">Accueil</a>
      </li>
      <li>
        <a href="#!" className="text-white">Contact</a>
      </li>
    
    </ul>
  </div>
</div>
</div>


  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">kinshasadigital.com</a>
  </div>
  
</footer>
        </>

    );
}
export default SectionFooter;