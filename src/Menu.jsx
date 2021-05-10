import './scss/menu.scss';
import { Link, NavLink } from "react-router-dom";

const Menu = (props) => {

    return (
        <>

<div className="container-fluid">


            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><a href="index.html"></a></h1>
                    <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li><NavLink exact to="/" className="a">Home</NavLink></li>
                            <li><NavLink to="SectionFilm" className="a">Films</NavLink></li>
                            <li><NavLink to="SectionSerie">Series</NavLink></li>
                            <li><NavLink to="services">Acteurs</NavLink></li>
                            <li><NavLink to="portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
{/* 
                            <form action="" method="post">
                                <input type="search" name="search" /><input type="submit" value="Search" />
                            </form> */}

                        </ul>



                    </nav>

                </div>
            </header>

</div>

        </>

    );
}

export default Menu;