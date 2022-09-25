import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="animate__animated animate__fadeInLeft">
            <Link to={"/"}>
                <div className="logo">
                        <h3 className="nadir">Nadir</h3>
                        <h3 className="sanchez">Sanchez</h3>
                </div>
            </Link>
            <ul>
                <div className="item">
                    <i className='bx bxs-home'></i>
                    <Link to={"/"}>Inicio</Link>
                </div>
                <div className="item"> 
                    <i className='bx bxs-spreadsheet'></i>
                    <Link to={"/habilidades"}>Habilidades</Link>
                </div>
                <div className="item">
                    <i className='bx bxs-dashboard'></i>
                    <Link to={"/portafolio"}>Portafolio</Link>
                </div>
                <div className="item">
                    <i className='bx bxs-phone' ></i>
                    <Link to={"/contacto"}>Contacto</Link>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;