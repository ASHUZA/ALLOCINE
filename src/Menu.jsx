import './scss/menu.scss';
import {Link,NavLink} from "react-router-dom";

const Menu = (props) => {

    return (
        <>
        




<nav className="navbar navbar-expand-lg navbar-dark navbarbg">

<div className="container-fluid">

    <Link className="navbar-brand" to="#">FILAMU</Link>


    <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <i className="fas fa-bars"></i>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="SectionFilm">Films</NavLink></li>
    <li><NavLink to="SectionSerie">Series</NavLink></li>
    <li><NavLink to="services">Acteurs</NavLink></li>
    <li><NavLink to="portfolio">Portfolio</NavLink></li>
    <li><NavLink to="contact">Contact</NavLink></li>
        </ul>


        <form className="d-flex input-group w-auto">
            <input
                type="search"
                className="form-control"
                placeholder="Search movies"
                aria-label="Search"
            />
            <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
            >
                Search
</button>
        </form>
    </div>

</div>

</nav>


        </>

    );
}

export default Menu;