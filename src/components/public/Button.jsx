function Button({ className, btn, onClick, type = "button" }) {
    return (
        <button className={className} onClick={onClick} type={type}>
        {btn}
        </button>
    );
}

export default Button;
