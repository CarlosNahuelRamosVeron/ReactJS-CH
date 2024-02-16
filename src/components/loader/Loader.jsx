import "./Loader.css";
import loading from '../../assets/loader.svg';

const Loader = () => {
    return (
        <div className="loaderContainer">
             <img className="loading" src={loading} alt="Loading" />
        </div>
    )
}

export default Loader;