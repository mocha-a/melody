
function Button({className, btn, onClick, type}) {
    return (
        <button className={`${className} btn`} onClick={onClick} type={type}>
            {btn}
        </button>
    )
}

export default Button