import './NavBar.css';
import logo from '../../assets/alv.png';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const activeLink = 'links activeLink'; //TODO add this style to the active page dinamically
    const links = 'links';

    return (
        <nav id="navBar">
            <div className='column'>
                <NavLink to="/"><img className='logo' src={logo} alt="LOGO" /></NavLink>
            </div>
            <div className='column navBarLinks'>
                <NavLink className={activeLink} to={"/"}>Home</NavLink>
                <NavLink className={links} to={"/category/t-shirts"}>T-shirts</NavLink>
                <NavLink className={links} to={"/category/hoodies"}>Hoodies</NavLink>
                <NavLink className={links} to={"/category/shorts"}>Shorts</NavLink>
            </div>
            <div className='column'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;