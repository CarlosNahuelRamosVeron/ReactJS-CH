import './NavBar.css';
import logo from '../../assets/alv.png';
import CartWidget from '../cartWidget/CartWidget';
import Button from '../button/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const home = '/';
    const tshirts = '/category/t-shirts';
    const hoodies = '/category/hoodies';
    const shorts = '/category/shorts';
    const activeLink = 'links activeLink';
    const links = 'links';
    const location = useLocation();
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <nav id="navBar">
            <div className='navBarResponsive'>
                <div className={dropdown? "navBarResponsiveOn": "off"}>
                    <NavLink className={location.pathname === home? "off": links} onClick={() => setDropdown(!dropdown)} to={home}>Home</NavLink>
                    <NavLink className={location.pathname === tshirts? "off": links} onClick={() => setDropdown(!dropdown)} to={tshirts}>T-shirts</NavLink>
                    <NavLink className={location.pathname === hoodies? "off": links} onClick={() => setDropdown(!dropdown)} to={hoodies}>Hoodies</NavLink>
                    <NavLink className={location.pathname === shorts? "off": links} onClick={() => setDropdown(!dropdown)} to={shorts}>Shorts</NavLink>
                </div>
                <Button className="navBar" value="=" onClick={() => setDropdown(!dropdown)}/>
                <p className={activeLink}>
                    {location.pathname == home ? "Home"
                    : location.pathname == tshirts ? "T-shirts"
                    : location.pathname == hoodies ? "Hoodies"
                    : location.pathname == shorts ? "Shorts"
                    : null}
                </p>
            </div>
            <div className='column'>
                <NavLink to="/"><img className='logo' src={logo} alt="LOGO" /></NavLink>
            </div>
            <div className='column navBarLinks'>
                <NavLink className={location.pathname === home? activeLink: links} to={home}>Home</NavLink>
                <NavLink className={location.pathname === tshirts? activeLink: links} to={tshirts}>T-shirts</NavLink>
                <NavLink className={location.pathname === hoodies? activeLink: links} to={hoodies}>Hoodies</NavLink>
                <NavLink className={location.pathname === shorts? activeLink: links} to={shorts}>Shorts</NavLink>
            </div>
            <div className='columnCartWidget'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;