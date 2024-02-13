import "./Loader.css";

const Loader = ({loading}) => {
    return (
        <h2 className={loading ? "loadingTrue": "loadingFalse"}>Loading</h2>
    )
}

export default Loader;