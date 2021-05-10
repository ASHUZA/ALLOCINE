import '../scss/header.scss';
function Header() {
    return (
        <>
        

            <nav className="navbar navbar-expand-lg navbar-dark navbarbg">

                <div className="container-fluid">



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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Genre  </a>


                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="./../SectionMovies">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Horaire</a></li>
                                    <li><a className="dropdown-item" href="#">Drame</a></li>
                                    <li><a className="dropdown-item" href="#">Fiction</a></li>
                                    <li><a className="dropdown-item" href="#">Comedy</a></li>
                                    <li><a className="dropdown-item" href="#">Autres</a></li>


                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">A propos</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                    Contact </a >
                            </li>
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

export default Header;