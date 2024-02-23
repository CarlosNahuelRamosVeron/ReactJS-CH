import { useState } from "react";
import hb from '../../assets/hb.jpeg';
import kok from '../../assets/kok.webp';
import mySaint from '../../assets/mySaint.jpeg';
import Button from "../button/Button";
import "./Carousel.css";

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < 2) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const previous = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(2);
        }
    }

    return (
        <div className="carouselContainer">
            <div className="carouselButton previous">
                <Button className={"carousel"} onClick={previous} value="<"/>
            </div>
            <div className="carouselImg">
                    {index == 0 ? <img src={mySaint} className="imgMS" alt="My Saint"/> 
                    : index == 1 ? <img src={kok} className="imgKOK" alt="King of the kongo"/> 
                    : <img src={hb} className="imgHB" alt="Hoopers brand"/>}
            </div>
            <div className="carouselButton next">
                <Button className={"carousel"} onClick={next} value=">"/>
            </div>
          
        </div>
    )
};

export default Carousel;