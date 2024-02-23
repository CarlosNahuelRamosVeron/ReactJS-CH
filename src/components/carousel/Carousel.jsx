import hb from '../../assets/hb.jpeg';
import kok from '../../assets/kok.webp';
import mySaint from '../../assets/mySaint.jpeg';
import barnes from '../../assets/barnes.png';
import freres from '../../assets/freres.webp';
import notte from '../../assets/notte.png';
import "./Carousel.css";

const Carousel = () => {
    return (
        <div className="carouselContainer">
            <div className='images'>
                <div><img src={mySaint} className="imgMS" alt="My Saint"/></div>
                <div><img src={kok} className="imgKOK" alt="King of the kongo"/></div>
                <div><img src={hb} className="imgHB" alt="Hoopers brand"/></div>
                <div><img src={barnes} className="imgBarnes" alt="Barnes Ind"/></div>
                <div><img src={freres} className="imgFreres" alt="Freres"/></div>
                <div><img src={notte} className="imgNotte" alt="Notte"/></div>
            </div>
            <div className='images'>
                <div><img src={mySaint} className="imgMS" alt="My Saint"/></div>
                <div><img src={kok} className="imgKOK" alt="King of the kongo"/></div>
                <div><img src={hb} className="imgHB" alt="Hoopers brand"/></div>
                <div><img src={barnes} className="imgBarnes" alt="Barnes Ind"/></div>
                <div><img src={freres} className="imgFreres" alt="Freres"/></div>
                <div><img src={notte} className="imgNotte" alt="Notte"/></div>
            </div>
        </div>
    )
};

export default Carousel;