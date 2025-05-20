
function Button({className, btn, onClick, type = "button"}) {
    return (
        <button className={`${className} btn`} onClick={onClick} type={type}>
            {btn}
        </button>
    )
}

export default Button;
