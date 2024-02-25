import "./Button.css";

const Button = (prop) => {
    return (
        <button 
            type={prop.type}
            className={prop.className}
            onClick={prop.onClick}
            disabled={prop.disabled}
            title={prop.title}
        >
            {prop.value}
        </button>
    )
}

export default Button;