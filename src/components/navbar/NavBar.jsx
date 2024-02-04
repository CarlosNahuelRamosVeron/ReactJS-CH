import './NavBar.css';
import logo from '../../assets/alv.png';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const home = '/';
    const tshirts = '/category/t-shirts';
    const hoodies = '/category/hoodies';
    const shorts = '/category/shorts';
    const activeLink = 'links activeLink';
    const links = 'links';
    const location = useLocation();
    
    return (
        <nav id="navBar">
            <div className='column'>
                <NavLink to="/"><img className='logo' src={logo} alt="LOGO" /></NavLink>
            </div>
            <div className='column navBarLinks'>
                <NavLink className={location.pathname === home? activeLink: links} to={home}>Home</NavLink>
                <NavLink className={location.pathname === tshirts? activeLink: links} to={tshirts}>T-shirts</NavLink>
                <NavLink className={location.pathname === hoodies? activeLink: links} to={hoodies}>Hoodies</NavLink>
                <NavLink className={location.pathname === shorts? activeLink: links} to={shorts}>Shorts</NavLink>
            </div>
            <div className='column'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;