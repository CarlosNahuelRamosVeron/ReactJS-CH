import { Link } from 'react-router-dom';
import './Footer.css';
import blackLogo from '../../assets/alvBlack.jpg';
import ocaLogo from '../../assets/oca.png';
import andreani from '../../assets/andreani.webp';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLogoContainer">
                <Link to="/">
                    <img src={blackLogo} className="footerLogo" alt="ALV" />
                </Link>
            </div>
            <div className="sendersLogos">
                <img src={andreani} className="andreaniLogo" alt="ANDREANI" />
                <img src={ocaLogo} className="ocaLogo" alt="OCA" />
            </div>
            <div className="footerContact">
                <p>CONTACT</p>
                <p>+54 011234482</p>
                <p>nahuelramosveron@hotmail.com</p>
                <p>Azopardo 1478</p>
                <p>San Telmo, Buenos Aires</p>
            </div>
        </div>
    )
}

export default Footer;