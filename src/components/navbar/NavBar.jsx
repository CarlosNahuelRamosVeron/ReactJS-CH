import './NavBar.css';
import logo from '../../assets/alv.png';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    const activeLink = 'links activeLink';
    const links = 'links';

    return (
        <nav id="navBar">
            <div className='column'>
                <img className='logo' src={logo} alt="LOGO" />
            </div>
            <div className='column navBarLinks'>
                <a className={activeLink} href="http://localhost:5173/">Home</a>
                <a className={links} href="http://localhost:5173/">New Arrivals</a>
                <a className={links} href="http://localhost:5173/">Outlet</a>
                <a className={links} href="http://localhost:5173/">Contact</a>
            </div>
            <div className='column'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;